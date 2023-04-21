const autoBind = require('auto-bind');
module.exports = class middleware {
    constructor(){
        autoBind(this);
    }

    error(message, status = 500) {
        let err = new Error(message);
        err.status = status;
        throw err;
    }
}