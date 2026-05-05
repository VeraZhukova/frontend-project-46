import fs from 'fs';
import path from 'path';
import process from 'process';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => {
  const fullPath = getFullPath(filepath);
  return fs.readFileSync(fullPath, 'utf-8');
};

const getFormat = (filepath) => path.extname(filepath).slice(1);

const parse = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }

  throw new Error(`Unknown format: ${format}`);
};

const parseFile = (filepath) => {
  const data = readFile(filepath);
  const format = getFormat(filepath);
  return parse(data, format);
};

export default parseFile;