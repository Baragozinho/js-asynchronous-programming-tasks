import fsp from 'fs/promises';

// BEGIN
export async function exchange(file1, file2) {
    try {
        const content1 = await fsp.readFile(file1, 'utf8');
        const content2 = await fsp.readFile(file2, 'utf8');

        await fsp.writeFile(file1, content2);
        await fsp.writeFile(file2, content1);
    } catch (error) {
        console.error('Ошибка при обмене содержимым файлов:', error);
        throw error;
    }
}
// END