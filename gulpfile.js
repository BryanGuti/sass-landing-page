const { spawn } = require('node:child_process');
const { series } = require('gulp');

function buildDistDirectory(cb) {
  const dist = spawn('mkdir', ['-p', 'dist/assets']);

  dist.stderr.on('data', (data) => {
    console.error(`${data}`);
  })

  dist.on('close', (exitCode) => {
    console.log(`Folder structure of dist directory created successfully`);
  });

  cb();
}

function buildPug(cb) {
  const pug = spawn('npx', ['pug', 'src/assets/pug/index.pug', '--out', 'dist/']);

  pug.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  pug.on('close', (exitCode) => {
    console.log(`Pug files builded successfully with code ${exitCode}`);
  });

  cb();
}

function buildSass(cb) {
  const sass = spawn('npx', ['sass', '--style=compressed', '--no-source-map', 'src/assets/sass:dist/assets/styles']);

  sass.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  sass.on('close', (exitCode) => {
    console.log(`Sass files builded successfully with code ${exitCode}`);
  });

  cb();
}

function buildImages(cb) {
  const images = spawn('cp', ['-r', './src/assets/img/', './dist/assets/']);

  images.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  images.on('close', (exitCode) => {
    console.log(`Images loaded successfully with code ${exitCode}`);
  });

  cb();
}

// function buildIcons(cb) {
//   const icons = spawn('cp', ['-r', 'src/assets/icons', 'dist/']);

//   icons.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
//   });

//   icons.on('close', (exitCode) => {
//     console.log(`Icons loaded successfully with code ${exitCode}`);
//   });

//   cb();
// }

function buildScripts(cb) {
  const scipts = spawn('cp', ['-r', './src/assets/scripts/', './dist/assets/']);

  scipts.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  scipts.on('close', (exitCode) => {
    console.log(`Scripts loaded successfully with code ${exitCode}`);
  });

  cb();
}

exports.build = series(
  buildDistDirectory,
  buildPug,
  buildSass,
  buildScripts,
  buildImages
);
