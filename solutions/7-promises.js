import fsp from 'fs/promises';

// BEGIN
export async function reverse(filepath) {
    try {
      const data = await fsp.readFile(filepath, 'utf-8');
      
      const reversedLines = data.split('\n').reverse().join('\n');
      
      await fsp.writeFile(filepath, reversedLines, 'utf-8');
    } catch (error) {
      console.error(`Ошибка при обработке файла: ${error.message}`);
    }
  }
// END