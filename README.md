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




## مستندات برنامه

برای پیاده سازی و استفاده از Ecommerce API، مستندات ذکر شده در این قسمت را به طور کامل مطالعه کنید و طبق دستورالعمل ها پیش بروید.


## اجرای برنامه بر روی سیستم شخصی

برای اجرای برنامه در سیستم شخصی خود باید نرم افزارها و ماژول های زیر را در سیستم خود نصب کرده یا نصب کنید:


```
Node.js ==> https://nodejs.org/en
Mongodb ==> https://www.mongodb.com
NPM ==> https://www.npmjs.com/
NODEMON ==> npm install -g nodemon

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

اگر برنامه Nodejs را در سیستم خود نصب کرده باشید، با اجرای دستور زیر در پوشه پروژه، تمام ماژول های مورد نیاز به صورت خودکار نصب می شوند:


```
npm install
```

## تنظیم متغیر های محلی

بعد از نصب برنامه ها و ماژول های مورد نیاز وارد پوشه config بشید و اطلاعات زیر را ویرایش کنید


```
{
  "name": "auth project",
  # اسم پروژه شما

  "db": {
    "address": "mongodb://127.0.0.1:27017/ecommerceApi"
    # آدرس اتصال به دیتابیس توجه ecommerceApi در اینجا اسم پایگاه داده شماست

  },

"jwt_key": "dfsdfff4t5j6h4j5h64564j5h645j6h45jh6",
# jwt یک مقدار تصادفی برای متود لاگین

"zarinPal":  {
  "ZARIN_PAY_MERCHANT": "",
  "PAYMENT_CALLBACK_URL": "http://localhost:3000/api/payment/checkout",
  "ZARIN_PAY_ADDRESS": "https://api.zarinpal.com/pg/v4/payment/request.json"

  # در اینجا اطلاعات درگاه پرداخت را باید پر کنید در حال حاظر میتوانید از درگاه پرداخت زرین پال استفاده کنید
},



"PORT": 5000
# پورت دسترسی شما به برنامه
}
```


## اجرای بک اند

بعد از نصب برنامه ها و ماژول های مورد نیاز و تنظیم متغیر های محیطی نوبت به اجرای اسکریپت رسیده است برای اجرا شدن از دستور زیر استفاده کنید

```
npm start
```

با این دستور برنامه شما اجرا میشود و آماده کار میباشد


## نحوه ارسال ریکوئست

برای ارسال ریکوست به بک اند به فرمت JSON باید طبق دستورالعمل های زیر اقدام کنید، توجه کنید بجای مقدار {{URL}} باید از آدرس سرور مورد نظر خود استفاده کنید.

## ثبت نام در برنامه

برای ثبت نام در برنامه به آدرس زیر با متد Post ریکوست ارسال کنید:

POST: {{URL}}/api/auth/register

| فیلد | نوع | توضیحات |
| :---:  | :---:  |  ---: |
| username* | string | نام کاربری |
| email* | string | آدرس ایمیل کاربر |
| password* | string | رمز عبور کاربر |
| isadmin | boolean | فیلد تعیین سطح کاربری (پیشفرض false) |


نمونه ریکوست:
``` json
{
    "username": "Talhe",
    "email": "talhe9990@gmail.com",
    "password": "123445678"
}
```
مقدار بازگشتی:

اگر فرایند ثبت نام به صورت صحیح و درست انجام شود خروجی مقدار بازگشتی به صورت زیر میباشد:

``` json
{
    "message": "the user successfuly registered",
    "data": {
        "_id": "64a450f699e30131c22aa7de",
        "username": "Talhe",
        "email": "talhe9930@gmail.com"
    }
}
```

## ورود به برنامه 

برای ورود به برنامه به آدرس زیر با متد Post ریکوست ارسال کنید:

POST: {{URL}}/api/auth/login

نمونه ریکوست:
``` json
{
    "email": "talhe9930@gmail.com",
    "password": "123445678"
}
```

مقدار بازگشتی:

در صورتی که فرآیند ورود با موفقیت انجام شود از سمت سرور به شما یک JsonWebToken تحویل داده میشه که اسم اون x-auth-token است و برای ارسال درخواست های بعدی احراز هویت شده میتونید از این توکن استفاده کنید


``` json
{
    "message": "successfuly logged in",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMyZGNmYjJiNTA3MzY1MDlmNzE4MGMiLCJpYXQiOjE2ODg0OTA2OTd9.2A4YWHWEZwL4_FDpT1RQUm71JIhts0Yv-wMzVZJn--k"
    }
}
```


## دریافت پروفایل

برای دریافت پروفایل کاربر به آدرس زیر درخواست get ارسال کنید

GET: {{URL}}/api/user/profile

مقدار بازگشتی:
``` json
{
{
    "message": "User Profile",
    "data": {
        "username": "talhe",
        "email": "talhe9930@gmail.com"
    }
}
}
```

## بروزرسانی پروفایل

برای بروز رسانی پروفایل کاربر به آدرس زیر با متد put ریکوست ارسال کنید:

PUT: {{URL}}/api/user/update

| فیلد | نوع | توضیحات |
| :---:  | :---:  |  ---: |
| username* | string | نام کاربری |
| password* | string | رمز عبور کاربر |

نمونه ریکوست:
``` json
{
    "username": "talhe 2",
    "password": "newpassword"
}
```

مقدار بازگشتی:
``` json
{
    "message": "User updated!",
    "data": {
        "username": "talhe 2",
        "password": "$2b$10$WEEkck11beamYsQ0Y5aIYu6ZwZUKK/9iqShxbPO7QFqfZOggFNpky"
    }
}
```

#افزودن به سبد خرید

برای اضافه کردن یک محصول بع سبد خرید باید شناسه محصول را با متد Post به آدرس زیر ارسال کنید:

POST: {{URL}}/api/cart/create

| فیلد | نوع | توضیحات |
| :---:  | :---:  |  ---: |
| productId* | string | شناسه محصول |

نمونه ریکوست:
``` json
        {
            "productId": "646b64eb38f4f6acf269ddab"
        }
```

مقدار بازگشتی:
``` json
{
    "message": "A new cart created.",
    "data": {
        "userId": "6432dcfb2b50736509f7180c",
        "list": [
            {
                "productId": "646b64eb38f4f6acf269ddab",
                "quantity": 1,
                "price": 233,
                "_id": "64a583ae0ecadbf718719621"
            }
        ],
        "payment": {
            "state": "READY",
            "date": 1688568430754
        },
        "amount": 0,
        "_id": "64a583ae0ecadbf718719620",
        "updatedAt": "2023-07-05T14:52:30.088Z",
        "createdAt": "2023-07-05T14:52:30.088Z",
        "__v": 0
    }
}
```

نکته: با تکرار ارسال یک ریکوست تکراری فقط تعداد Quantity همان محصول در سبد خرید افزایش پیدا میکند.

## بروزرسانی سبد خرید

برای بروز رسانی سبد خرید به آدرس زیر با متد PUT ریکوست ارسال کنید:

PUT: {{URL}}/api/cart/update

| فیلد | نوع | توضیحات |
| :---:  | :---:  |  ---: |
| list* | array | شناسه محصول و تعداد محصول |


نمونه ریکوست:
``` json
{

    "list": [
        {
            "productId": "646b64ca38f4f6acf269dda7",
            "quantity": 50
        },
                {
            "productId": "646b64eb38f4f6acf269ddab",
            "quantity": 100
        }
    ]

}
```

مقدار بازگشتی:


``` json
{
    "message": "the cart successfuly updated",
    "data": {
        "payment": {
            "state": "READY",
            "date": 1688569513694
        },
        "_id": "64a586d01261be396411c9b2",
        "userId": "6432dcfb2b50736509f7180c",
        "list": [
            {
                "productId": "646b64eb38f4f6acf269ddab",
                "quantity": 100,
                "price": 233,
                "_id": "64a586d01261be396411c9b3"
            },
            {
                "productId": "646b64ca38f4f6acf269dda7",
                "quantity": 50,
                "price": 233,
                "_id": "64a586e21261be396411c9b9"
            }
        ],
        "amount": 0,
        "updatedAt": "2023-07-05T15:06:45.265Z",
        "createdAt": "2023-07-05T15:05:52.393Z",
        "__v": 1
    }
}
```


## حذف سبد خرید

برای خالی کردن سبد خرید به آدرس زیر با متد Delete ریکوست ارسال کنید:

DELET: {{URL}}/api/cart/delete


مقدار بازگشتی:

``` json
{
    "message": "the cart successfuly deleted",
    "data": {}
}
```

## مشاهده محتوای سبد خرید

برای مشاهده محصولات افزوده شده به سبد خرید به آدرس زیر با متد Get ریکوست ارسال کنید:

DELETE: {{URL}}/api/cart/view

مقدار بازگشتی:

``` json
{
    "message": "Cart found",
    "data": {
        "payment": {
            "state": "READY",
            "date": 1688570239225
        },
        "_id": "64a589cb69c7529dc384d85d",
        "userId": "6432dcfb2b50736509f7180c",
        "list": [
            {
                "productId": "646b64ca38f4f6acf269dda7",
                "quantity": 1,
                "price": 233,
                "_id": "64a589cb69c7529dc384d85e"
            }
        ],
        "amount": 0,
        "updatedAt": "2023-07-05T15:18:35.448Z",
        "createdAt": "2023-07-05T15:18:35.448Z",
        "__v": 0
    }
}
```

## فهرست گیری از سفارشات

برای فهرست گیری از کلیه سفارش های انجام شده به آدرس زیر با متد Get ریکوست ارسال کنید:

GET: {{URL}}/api/order/list

مقدار بازگشتی:

``` json
{
    "message": "the orders",
    "data": [
        {
            "payment": {
                "authority": "A00000000000000000000000000435575690",
                "code": 100,
                "state": "SUCCESS",
                "date": 1686162129294
            },
            "_id": "647f79a41abb3ad00910c3d1",
            "userId": "6432dcfb2b50736509f7180c",
            "products": [
                {
                    "productId": "646b64ca38f4f6acf269dda7",
                    "quantity": 1,
                    "price": 0,
                    "_id": "647f78d718c399b8e445e951"
                }
            ],
            "amount": 10000,
            "updatedAt": "2023-06-06T18:23:32.198Z",
            "createdAt": "2023-06-06T18:23:32.198Z",
            "__v": 0
        }
    ]
}
```

## مشاهده جزئیات  سفارش 

برای دریافت جزئیات سفارش به آدرس زیر با متد Get ریکوست ارسال کنید:


GET: {{GET}}/order/view/orderId

نمونه ریکوست:

{{URL}}/api/order/view/647f79a41abb3ad00910c3d1


پاسخ دریافت شده:
``` json
{
    "message": "Order found.",
    "data": {
        "payment": {
            "authority": "A00000000000000000000000000435575690",
            "code": 100,
            "state": "SUCCESS",
            "date": 1686162129294
        },
        "_id": "647f79a41abb3ad00910c3d1",
        "userId": {
            "_id": "6432dcfb2b50736509f7180c",
            "email": "talhe9930@gmail.com",
            "username": "talhe"
        },
        "products": [
            {
                "productId": "646b64ca38f4f6acf269dda7",
                "quantity": 1,
                "price": 0,
                "_id": "647f78d718c399b8e445e951"
            }
        ],
        "amount": 10000,
        "updatedAt": "2023-06-06T18:23:32.198Z",
        "createdAt": "2023-06-06T18:23:32.198Z",
        "__v": 0
    }
}
```

## ایجاد دیدگاه

برای ثبت نظر به آدرس زیر با متد Post ریکوست ارسال کنید:



POST: {{URL}}/api/comment/create

| فیلد | نوع | توضیحات |
| :---:  | :---:  |  ---: |
| productId* | ObjectId | شناسه محصول |
| rating* | string | امتیاز محصول کاربر مجاز خواهد بود که از عدد 1 تا5 به یک محصول امتیاز دهد |
| title* | string |  عنوان دیدگاه |
| description* | string |  توضیحات  |
| parent* | ObjectId |  برای پاسخ به یک دیدگاه کافیست این فیلد را اضافه کنید و شناسه آن دیدگاه را وارد کنید  |

نمونه درخواست:
``` json
{
    "productId": "646b64ca38f4f6acf269dda7",
    "rating": "5",
    "title": "yellow",
    "description": "Yellow color suits this shirt very well"
}
```

توجه اگر کاربر مدیر باشید دیدگاه شما بصورت خودکار تایید میشود در غیر اینصورت اگر کاربر عادی باشید دیدگاه شما باید توسط مدیر اصلی سایت تایید شود تا نمایش داده شود

پاسخ دریافت شده:
``` json
{
    "message": "New comment added.",
    "data": {
        "name": "talhe",
        "email": "talhe9930@gmail.com",
        "authorId": "6432dcfb2b50736509f7180c",
        "productId": "646b64ca38f4f6acf269dda7",
        "parent": null,
        "rating": 5,
        "title": "yellow",
        "description": "Yellow color suits this shirt very well",
        "check": true,
        "_id": "64a6c98ad68599ed4dbcc1bd",
        "updatedAt": "2023-07-06T14:02:50.476Z",
        "createdAt": "2023-07-06T14:02:50.476Z",
        "__v": 0,
        "id": "64a6c98ad68599ed4dbcc1bd"
    }
}
```












