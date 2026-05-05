import path from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) =>
  path.resolve(process.cwd(), '__fixtures__', filename);

test('compare flat json files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  const result = genDiff(filepath1, filepath2);

  const expected = `- follow: false
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true`;

  expect(result).toBe(expected);
});