import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize (directoryPath, callback) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return callback(err);
        }

        const fullPaths = files.map(file => path.join(directoryPath, file));

        async.map(fullPaths, (filePath, cb) => {
            fs.stat(filePath, (statErr, stats) => {
                if (statErr) {
                    return cb(statErr);
                }
                return cb(null, stats.isFile() ? stats.size : 0);
            });
        }, (mapErr, sizes) => {
            if (mapErr) {
                return callback(mapErr);
            }
            const totalSize = _.reduce(sizes, (sum, size) => sum + size, 0);
            callback(null, totalSize);
        });
    });
};
// END
