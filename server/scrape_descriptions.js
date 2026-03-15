const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const STORAGE_DIR = path.join(__dirname, 'storage_');
const DELAY_MS = 2500; 

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function processFile(filename, limit = Infinity) {
    const filePath = path.join(STORAGE_DIR, filename);
    console.log(`Processing file: ${filename} (Limit: ${limit})`);
    
    let data;
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(fileContent);
    } catch (err) {
        console.error(`Error reading ${filename}:`, err.message);
        return;
    }

    let modified = false;
    let processedCount = 0;

    for (let i = 0; i < data.length; i++) {
        if (processedCount >= limit) {
            console.log(`Limit of ${limit} reached for ${filename}. Stopping.`);
            break;
        }

        const artist = data[i];
        
        // Skip if description already exists and is not empty
        if (artist.description && artist.description.length > 0) {
            continue;
        }

        const url = `https://socrealizm.com.ua/gallery/artist/${artist.url}`;
        console.log(`[${filename}] (${i + 1}/${data.length}) Scraping: ${artist.title} -> ${url}`);

        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                },
                timeout: 10000
            });

            const $ = cheerio.load(response.data);
            const descriptionContainer = $('.description');

            if (descriptionContainer.length > 0) {
                
                const descriptionLines = descriptionContainer.contents()
                    .map((_, el) => $(el).text().trim())
                    .get()
                    .filter(line => line.length > 0);

                artist.description = descriptionLines;
                modified = true;
                processedCount++;
                console.log(`   -> Found ${descriptionLines.length} lines.`);
            } else {
                console.log(`   -> Warning: .description container not found. Marking as empty to avoid retry.`);
                artist.description = [""]; 
                modified = true;
                processedCount++;
            }

        } catch (error) {
            if (error.response) {
                console.error(`   -> Error: ${error.response.status} ${error.response.statusText}`);
                if (error.response.status === 403 || error.response.status === 429) {
                    console.error("!!! BLOCKED. Stopping script. !!!");
                    process.exit(1);
                }
            } else {
                console.error(`   -> Error: ${error.message}`);
            }
        }

        // Save periodically (e.g., every 5 updates) or just rely on end-of-file save
        if (processedCount % 5 === 0 && modified) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`   (Progress saved to ${filename})`);
            modified = false; 
        }

        await wait(DELAY_MS);
    }

    if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`Finished ${filename}. Saved changes.`);
    } else {
        console.log(`Finished ${filename}. No changes to save.`);
    }
}

async function run() {
    try {
        let files;
        if (process.argv[2]) {
            files = [process.argv[2]];
        } else {
            files = fs.readdirSync(STORAGE_DIR).filter(f => f.endsWith('.json') && f !== 'all.json');
        }
        
        console.log(`Processing ${files.length} files: ${files.join(', ')}`);

        const limit = process.argv[3] ? parseInt(process.argv[3]) : Infinity;

        for (const file of files) {
            await processFile(file, limit);
        }
        
        console.log("All files processed.");

    } catch (err) {
        console.error("Fatal error:", err);
    }
}

run();
