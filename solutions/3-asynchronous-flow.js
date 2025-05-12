import fs from 'fs';

// BEGIN
export function compareFileSizes (filePath1, filePath2, callback) {
    fs.stat(filePath1, (err1, stats1) => {
        fs.stat(filePath2, (err2, stats2) => {
            const result = Math.sign(stats1.size - stats2.size);
            callback(null, result);
        });
    });
};
// END