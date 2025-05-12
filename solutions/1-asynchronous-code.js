import fs from 'fs';

// BEGIN
export default async function print(filepath) {
  try {
    const data = await fs.promises.readFile(filepath, 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(`Ошибка чтения файла: ${error.message}`);
  }
}
// END
