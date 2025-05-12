import fs from 'fs';

// BEGIN
export const move = async (Path, newPath, callback) => {
    try {
        const data = await fs.promises.readFile(Path);
        await fs.promises.writeFile(newPath, data);
        await fs.promises.unlink(Path);
        callback(null);
    } catch (error) {
        callback(error);
    }
}
// END
