const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
let sharp;
try {
  sharp = require('sharp');
} catch(e) {
  console.log("Installing sharp temporarily...");
  execSync('npm install --no-save sharp', { stdio: 'inherit', cwd: __dirname });
  sharp = require('sharp');
}

const dirToConvert = path.join(__dirname, 'public');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const imagesToConvert = [];

walkDir(dirToConvert, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    imagesToConvert.push(filePath);
  }
});

async function convertImages() {
  let count = 0;
  for (const file of imagesToConvert) {
    const parsed = path.parse(file);
    const newPath = path.join(parsed.dir, `${parsed.name}.webp`);
    try {
      await sharp(file).webp({ quality: 80 }).toFile(newPath);
      console.log(`Converted: ${file} -> ${newPath}`);
      fs.unlinkSync(file); // Delete the original
      count++;
    } catch(err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
  console.log(`Converted ${count} images.`);
  
  // Replace in data.json
  const dataJsonPath = path.join(__dirname, 'components', 'data', 'data.json');
  if (fs.existsSync(dataJsonPath)) {
    let dataJsonContent = fs.readFileSync(dataJsonPath, 'utf8');
    dataJsonContent = dataJsonContent.replace(/\.png/gi, '.webp');
    dataJsonContent = dataJsonContent.replace(/\.jpg/gi, '.webp');
    dataJsonContent = dataJsonContent.replace(/\.jpeg/gi, '.webp');
    fs.writeFileSync(dataJsonPath, dataJsonContent);
    console.log('Updated data.json');
  }
}

convertImages().catch(console.error);
