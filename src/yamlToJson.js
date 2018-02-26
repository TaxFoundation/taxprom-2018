const yaml = require('js-yaml');
const fs = require('fs');

const input = './src/data/taxprom2018.yml';
const output = './src/data/taxprom2018.json';

const updateData = () => {
  try {
    var doc = yaml.safeLoad(fs.readFileSync(input, 'utf8'));
    fs.writeFileSync(output, JSON.stringify(doc, null, 2));
    console.log('Update complete.');
  } catch (e) {
    console.log(`Data update failed: ${e}`);
  }
};

const beginTheWatch = () => {
  console.log('Inital new data building.');
  updateData();
  console.log('Watching for new changes...');
  fs.watch(input, { encoding: 'utf8' }, (event, file) => {
    console.log('Updating data...');
    updateData();
  });
};

console.log('Removing old data.');
fs.unlink(output, err => {
  if (err) throw err;
  console.log('Old data deleted.');
  beginTheWatch();
});
