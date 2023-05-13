const path = require('path');
const url = require('url');

const myDirname = path.dirname(url.parse(__filename).pathname);

function genFilePath(name, mimetype) {
    const currDate = new Date();
    const datePath = currDate.getFullYear() + '/' + (currDate.getMonth() + 1) + '/' + currDate.getDate();
    const randName = Math.floor(Math.random() * 9999999);
    const fileName = Date.now() + '-' + randName + name.substring(name.lastIndexOf('.'), name.length);
    const dirPath = path.join(myDirname, '../../files/' + mimetype.split('/')[0] + 's/' + datePath + '/');
    // ایجاد پوشه اگر وجود ندارد
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    return path.join(dirPath, fileName);
};

module.exports = {
    genFilePath
  }


  const fs = require('fs');
const { dir } = require('console');


