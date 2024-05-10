const { spawn } = require('node:child_process');
const { series } = require('gulp');

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
  const sass = spawn('npx', ['sass', 'src/assets/sass:dist/assets/styles']);

  sass.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  sass.on('close', (exitCode) => {
    console.log(`Sass files builded successfully with code ${exitCode}`);
  });

  cb();
}

function buildImages(cb) {
  const images = spawn('cp', ['-r', 'src/assets/img', 'dist/']);

  images.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  images.on('close', (exitCode) => {
    console.log(`Images loaded successfully with code ${exitCode}`);
  });

  cb();
}

function buildIcons(cb) {
  const icons = spawn('cp', ['-r', 'src/assets/icons', 'dist/']);

  icons.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  icons.on('close', (exitCode) => {
    console.log(`Icons loaded successfully with code ${exitCode}`);
  });

  cb();
}

function buildScripts(cb) {
  const scipts = spawn('cp', ['-r', 'src/assets/scripts', 'dist/']);

  scipts.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  scipts.on('close', (exitCode) => {
    console.log(`Scripts loaded successfully with code ${exitCode}`);
  });

  cb();
}

exports.build = series(
  buildPug,
  buildSass,
  buildImages,
  buildIcons,
  buildScripts
);
