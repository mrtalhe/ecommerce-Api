  می‌توانید از اسکریپت Ecommerce API برای راه‌اندازی یک فروشگاه آنلاین با Nodejs استفاده کنید. اسکریپت Ecommerce API به زبان جاوا اسکریپت نوشته شده است و Node.js - Mongodb - Mongoose - Express.js و سایر زبان‌ها و ابزارها در آن استفاده می‌شود.

## ویژگی‌های Ecommerce API
اسکریپت Ecommerce API دارای اکثر ویژگی‌های یک سایت فروشگاهی کامل می‌باشد که در ادمه به شرح برخی از این ویژگی‌ها می پردازم:
 
## سیستم احراز هویت

- ثبت نام و ورود کاربران

- احراز هویت کاربران توسط json webtoken

- مسیر محافظت شده برای مدیر وب سایت

##  سبد خرید کاربران

مشتریان میتوانند محصولات مورد نظر خود را به سبد خرید اضافه کنند و یا سبد خرید خود را ویرایش و حذف کنند.

- افزودن محصول به سبد خرید

- به روز رسانی سبد خرید

- حذف سبد خرید

- مشاهده سبد خرید

## سفارشات کاربران 

مشتریان میتوانند فهرست سفارشات خود را دریافت کرده و جزئیات هر سفارش را بررسی کنند. همچنین این فهرست توسط مدیر وبسایت نیز قابل مشاهده است.

- فهرست گرفتن از سفارشات 

- نمایش جزئیات سفارش

## محصولات 

- مشاهده همه محصولات

- مشاهده یک محصول

## پرداخت آنلاین

پس از افزودن محصول به سبد خرید توانایی پرداخت آنلاین فعال شده و با پرداخت و تایید تراکنش، خرید انجام شده و سبد خرید کاربر به فهرست سفارشات کاربر منتقل میشود.

- پرداخت با درگاه پرداخت آنلاین

- بررسی پرداخت انجام شده

## ویژگی های مدیر اصلی



## مدیریت کاربران

- افزودن کاربر

- بروزرسانی کاربر

- حذف کاربر

- مشاهده همه کاربران

- تغییر کاربر عادی به کاربر مدیر توسط مدیر اصلی سایت

## مدیریت محصولات

- افزودن محصول

- بروزرسانی محصول

- حذف محصول

- مشاهده همه محصولات

- مشاهده یک محصول

## مدیریت دسته بندی ها

- امکان اضافه کردن دسته بندی اصلی و دسته بندی زیر مجموعه

- بروزرسانی دسته بندی

- حذف دسته بندی

- مشاهده همه دسته بندی ها

## مدیریت سبد خرید

- مشاهده همه سبد خرید ها

## مدیریت سفارشات 

- ساخت سفارش

- بروزرسانی سفارش

- حذف سفارش

- مشاهده همه سفارش ها

## مدیریت فایل ها

- افزودن فایل

- بروزرسانی فایل

- حذف فایل

- لیست فایل ها

- مشاهده فایل

## مدیریت دیدگاه ها

- دریافت همه دیدگاه ها

- حذف دیدگاه

- تایید دیدگاه



## Program documentation

To implement and use the Ecommerce API, read the documentation mentioned in this section completely and proceed according to the instructions.

## Running the program on a personal system

To run the program in your personal system, you must have the following software and modules installed in your system or install them:
```
Node.js ==> https://nodejs.org/en
TypeScript ==> https://www.typescriptlang.org/download
Mongodb ==> https://www.mongodb.com
NPM ==> https://www.npmjs.com/
```
```
    auto-bind: ^4.0.0,
    axios: ^1.4.0,
    bcrypt: ^5.0.1,
    config: ^3.3.6,
    cors: ^2.8.5,
    debug: ^4.3.2,
    express: ^4.17.1,
    express-async-errors: ^3.1.1,
    express-fileupload: ^1.4.0,
    express-validator: ^6.13.0,
    jsonwebtoken: ^8.5.1,
    lodash: ^4.17.21,
    mkdirp: ^0.5.5,
    mongoose: ^6.8.3,
    mongoose-timestamp: ^0.6.0,
    winston: ^3.8.1
```

If you have the Nodejs program installed in your system, by running the following command in the project folder, all required modules will be installed automatically:


```
npm install
```
