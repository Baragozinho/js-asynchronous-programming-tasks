import fsp from 'fs/promises';

// BEGIN
export async function touch(filePath) {
    try {
        await fsp.access(filePath);
        return;
    } catch {
        await fsp.writeFile(filePath, '');
        return;
    }
}
// END