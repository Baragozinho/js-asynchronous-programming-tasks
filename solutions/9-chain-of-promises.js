import fsp from 'fs/promises';

// BEGIN
export async function getTypes(paths) {
    const promises = paths.map(async (path) => {
        try {
            const stats = await fsp.stat(path);
            return stats.isDirectory() ? 'directory' : 'file';
        } catch (error) {
            return null;
        }
    });

    return Promise.all(promises);
}
// END