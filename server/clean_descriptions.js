const fs = require('fs');
const path = require('path');

const STORAGE_DIR = path.join(__dirname, 'storage_');

function cleanDescriptionLines(lines) {
  if (!Array.isArray(lines)) return lines;
  const normalized = lines.map(l => (l ?? '').toString());
  const hasNaydeno = normalized.some(
    l => l.trim().toLowerCase().includes('найдено')
  );

  const result = normalized.filter((line) => {
    const t = line.trim();
    if (!t) return false;
    if (t.toLowerCase() === 'найдено') return false;
    if (hasNaydeno && /^\d+$/.test(t)) return false;
    return true;
  });

  return result;
}

function processFile(filePath) {
  const filename = path.basename(filePath);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.error(`Error reading ${filename}: ${e.message}`);
    return { filename, changed: false, removed: 0 };
  }

  let removed = 0;
  let changed = false;

  if (Array.isArray(data)) {
    data.forEach((artist) => {
      if (artist && Array.isArray(artist.description)) {
        const before = artist.description.length;
        const afterArr = cleanDescriptionLines(artist.description);
        const after = afterArr.length;
        if (after !== before) {
          artist.description = afterArr;
          removed += (before - after);
          changed = true;
        }
      }
    });
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  return { filename, changed, removed };
}

function run() {
  const target = process.argv[2];
  let files = [];

  if (target) {
    files = [path.join(STORAGE_DIR, target)];
  } else {
    files = fs.readdirSync(STORAGE_DIR)
      .filter(f => f.endsWith('.json'))
      .map(f => path.join(STORAGE_DIR, f));
  }

  let totalRemoved = 0;
  let totalChanged = 0;

  files.forEach((filePath) => {
    const res = processFile(filePath);
    if (res.changed) {
      totalChanged += 1;
      totalRemoved += res.removed;
      console.log(`Cleaned ${res.filename}: removed ${res.removed} lines`);
    } else {
      console.log(`No changes in ${res.filename}`);
    }
  });

  console.log(`Summary: changed ${totalChanged} files, removed ${totalRemoved} lines`);
}

run();

