const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  try {
    const dataPath = path.join(__dirname, 'storage_', 'artistsA.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    const artists = data.slice(0, 5);
    
    console.log(`Starting test scrape for ${artists.length} artists...`);
    
    for (const artist of artists) {
      const url = `https://socrealizm.com.ua/gallery/artist/${artist.url}`;
      console.log(`Fetching: ${url}`);
      
      try {
        const start = Date.now();
        const response = await axios.get(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });
        const duration = Date.now() - start;
        
        const $ = cheerio.load(response.data);
        const title = $('h1').text().trim() || $('title').text().trim();
        const textLength = $('body').text().length;
        
        console.log(`Success (${duration}ms) - Title: "${title}" - Body Length: ${textLength}`);
        
      } catch (error) {
        if (error.response) {
          console.log(`Error: ${error.response.status} - ${error.response.statusText}`);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
      
      // Random delay 1-3 seconds
      const delay = 1000 + Math.random() * 2000;
      console.log(`Waiting ${Math.round(delay)}ms...`);
      await wait(delay);
    }
    
    console.log('Test complete.');
    
  } catch (err) {
    console.error('Fatal error:', err);
  }
}

run();
