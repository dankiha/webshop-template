const fs = require('fs');
const path = require('path');
const templatesPath = path.join(__dirname, 'templates.json');
if (!fs.existsSync(templatesPath)) {
  console.error("Error: templates.json not found!");
  process.exit(1);
}
const configArray = JSON.parse(fs.readFileSync(templatesPath, 'utf-8'));
if (!Array.isArray(configArray)) {
  console.error("Error: templates.json should be an array.");
  process.exit(1);
}
const index = process.argv[2] ? parseInt(process.argv[2], 10) : 0;
if (index < 0 || index >= configArray.length) {
  console.error("Error: Invalid config index provided.");
  process.exit(1);
}
const config = configArray[index];
const title = config.title || "Default Title";
const homepageFile = config.homepageFile;
if (!homepageFile) {
  console.error("Error: homepageFile not specified in configuration.");
  process.exit(1);
}
const homepageFilePath = path.join(__dirname, 'homepages', homepageFile);
if (!fs.existsSync(homepageFilePath)) {
  console.error(`Error: Homepage file "${homepageFile}" not found in the homepages folder.`);
  process.exit(1);
}
const homepageContent = fs.readFileSync(homepageFilePath, 'utf-8');
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf-8');
  indexContent = indexContent.replace(/<title>.*<\/title>/, `<title>${title}</title>`);
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  console.log("Updated index.html title.");
} else {
  console.warn("Warning: index.html not found.");
}
const homeVuePath = path.join(__dirname, 'src', 'views', 'Home.vue');
if (fs.existsSync(homeVuePath)) {
  let homeContent = fs.readFileSync(homeVuePath, 'utf-8');
  homeContent = homeContent.replace(/<div id="homepage-content">[\s\S]*?<\/div>/, `<div id="homepage-content">\n${homepageContent}\n</div>`);
  fs.writeFileSync(homeVuePath, homeContent, 'utf-8');
  console.log(`Updated Home.vue with homepage content from "${homepageFile}".`);
} else {
  console.warn("Warning: Home.vue not found.");
}