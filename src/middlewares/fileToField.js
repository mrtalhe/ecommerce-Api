const middleware = require('./middleware')
class fileToField extends middleware {
    handle(req, res, next) {
        if(! req.file) {
            req.body.img = undefined
        }else {
            req.body.img = req.file.originalname
        }
        next()
    }
}

module.exports = new fileToField();