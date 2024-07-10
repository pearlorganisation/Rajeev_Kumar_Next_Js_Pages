import path from 'path';

function filterFiles(files, extension) {
  return files
    .filter(file => path.extname(file).toLowerCase() === `.${extension}`)
    .map(file => ({
      params: { slug: file.replace(`.${extension}`, '') },
    }));
}

module.exports = filterFiles;
