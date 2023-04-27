const isValidReq = (body, list) => {
    const element = Object.keys(body);
    const isMatch = element.every(item => list.includes(item));
    return isMatch;
};

module.exports = {isValidReq}
