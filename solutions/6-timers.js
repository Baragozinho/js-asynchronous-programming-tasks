import fs from 'fs';

// BEGIN
export default function watch(filePath, period, callback) {
  let lastMtime = null;

  const timerId = setInterval(() => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        callback(err);
        return;
      }

      if (lastMtime === null) {
        lastMtime = stats.mtimeMs;
      } else if (stats.mtimeMs !== lastMtime) {
        lastMtime = stats.mtimeMs;
        callback(null);
      }
    });
  }, period);

  return timerId;
}
// END
