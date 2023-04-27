// look for file pay exist
 const fpExist = (req, res, next) => {
    if (!req.files)
        return res.json({ status: 404, message: 'No file was found!' });
    next();
};
// look for file size limit
 const fsLimit = (fileSize = 1 * 1024 * 1024) => (req, res, next) => {
    const files = req.files;
    const limitList = [];
    Object.keys(files).forEach(item => {
        if (files[item].size > fileSize)
            limitList.push(files[item].name);
    });
    if (limitList.length)
        return res.json({ status: 400, message: `File size is too big: ${limitList.toString()}` });
    next();
};
// look for file extension
 const fxLimit = (extensions = ['jpeg', 'jpg', 'png', 'pdf']) => (req, res, next) => {
    const files = req.files;
    let isMatch = true;
    Object.keys(files).forEach(item => {
        if (!extensions.includes(files[item].mimetype.split('/')[1]))
            return isMatch = false;
    });
    if (!isMatch)
        return res.json({ status: 400, message: 'File extensions are not allowed!' });
    next();
};

module.exports = {
    fpExist,
    fsLimit,
    fxLimit
}