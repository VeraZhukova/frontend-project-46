import parseFile from './parser.js';

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  // получаем все ключи
  const keys = [...Object.keys(data1), ...Object.keys(data2)];

  // убираем дубликаты + сортируем
  const uniqueKeys = [...new Set(keys)].sort();

  const result = [];

  for (const key of uniqueKeys) {
    if (!(key in data2)) {
      result.push(`- ${key}: ${data1[key]}`);
    } else if (!(key in data1)) {
      result.push(`+ ${key}: ${data2[key]}`);
    } else if (data1[key] !== data2[key]) {
      result.push(`- ${key}: ${data1[key]}`);
      result.push(`+ ${key}: ${data2[key]}`);
    }
  }

  return result.join('\n');
};

export default genDiff;