const expressValidator = require('express-validator');
const Controller = require('./../../controller')

const check = expressValidator.check;
const Category = require('./../../../models/category');
module.exports = new class extends Controller{
    create() {
        return [
            check('name')
                .isLength({ min: 3 })
                .withMessage('عنوان دسته نباید کمتر از 3 کارکتر باشد'),
        ]
    }
}