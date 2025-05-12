import fs from 'fs';

// BEGIN
const write = (path, data, callback) => {
    fs.writeFile(path, data, callback);
  }
  
  export default write;
// END