# E-Commerce API
You can use **E-Commerce API** to set up an online shopping store. The script is written in JavaScript (Node.js), with the help of Express.js, MongoDB, and Mongoose.


## General Features
The script includes almost all features an online shopping website may need.

### Authentication
- User registration and login
- User authentication with [JSON Web Tokens (JWT)](https://jwt.io)
- Protected route for website admin
- Forgot password and password recovery

### User Cart
Customers can add, edit, and remove their desired products to the shopping cart.
- Add an item to the cart
- Remove the cart or an item from it
- Refres the cart
- View cart products

### User Orders
Customers can get a list of their orders and check the details of each order. This list can also be viewed by the website admin.
- Get a list of orders
- View the details of each order

### Products
- View all products
- View a single product

### Online Payment
After adding at least 1 item to the cart, online payment will be activated. Then, you can pay and confirm the transaction, and your purchase will be transferred to the order list.

### Add Address
- Submit user address
- Update address
- Delete address
- View list of addresses
- View individual addresses

### Add comments
- Add comments for products


## Admin-Only Features

### User Management
- Add user
- Update user info
- Delete user
- View all users
- Promote normal user to an admin

### Product Management
- Add product
- Update product info
- Delete product
- View all products
- View a single product

### Manage Categories
- Add main category and sub-category
- Update category
- Remove category
- View all categories

### Shopping Cart management
- View all shopping carts

### Orders Management
- Make order
- Update order
- Delete order
- View all orders

### File Management
- Add file
- Update file
- Delete file
- View list of all files

### Comments Management
- Receive all comments
- Confirm comment
- Delete comment


## Documentation (General Features)
To use **E-Commerce API** read the following section thoroughly and follow the instructions.

### Set up the Program
To run the program on your personal system, you need to have installed the following modules and software:
- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com)
- [NPM](https://www.npmjs.com)
- [Nodemon](https://nodemon.io)

```json
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

If you have already installed Node.js on you system, all required modules will be installed automatically by running the following command in the project root folder:
```
npm install
```

### Set Local Variables
After installing the required programs and modules, enter the config folder and edit the following configuration:

```json
{
   "name": "Auth Project", // Project name
   "db": {
      "address": "mongodb://127.0.0.1:27017/ecommerceApi" //
   },
   "jwt_key": "dfsdfff4t5j6h4j5h64564j5h645j6h45jh6", // A reandom value
   "zarinPal":  {
   "ZARIN_PAY_MERCHANT": "",
   "PAYMENT_CALLBACK_URL": "http://localhost:3000/api/payment/checkout",
   "ZARIN_PAY_ADDRESS": "https://api.zarinpal.com/pg/v4/payment/request.json"
   // Fill in the payment gateway information (Currently, only ZarrinPal is supported)
   },
   "PORT": 5000 // Your access port to the application
}
```

### Run the Backend
After installing the required modules and software, and setting local variables, it's time to run the script with the following command:
```
npm start
```
The script is now ready to work.

### How to Send a Request
To send a request to the backend in JSON format, you must follow the instructions below. Note that you must use the desired server address instead of `{{URL}}`.

### User Registeration
Send a `POST` request to the following address to register users:

POST: `{{URL}}/api/auth/register`

| Field | Data Type | Description |
| :----- | :---------: |  :------------ |
| username* | String | Username |
| email* | String | E-mail Address |
| password* | String | Password |
| isadmin | Boolean | Access-Level determination (Defaults to `false`) |
<br />

Request Example:
```json
{
   "username": "Talhe",
   "email": "talhe9990@gmail.com",
   "password": "123445678"
}
```
Return Value:
If the registration process is done correctly, the following response will be returned from the server:
```json
{
   "message": "the user successfuly registered",
   "data": {
      "_id": "64a450f699e30131c22aa7de",
      "username": "Talhe",
      "email": "talhe9930@gmail.com"
   }
}
```

### Login
Send a `POST` request to the following address to login:

POST: `{{URL}}/api/auth/login`

Request Example:
```json
{
   "email": "talhe9930@gmail.com",
   "password": "123445678"
}
```
Return Value:
If the login process is done successfully, a [Json Web Token (JWT)](https://jwt.io) will be sent back to you from the server, whose name is `x-auth-token`, and can be used to send authenticated requests to the server.
```json
{
   "message": "successfuly logged in",
   "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMyZGNmYjJiNTA3MzY1MDlmNzE4MGMiLCJpYXQiOjE2ODg0OTA2OTd9.2A4YWHWEZwL4_FDpT1RQUm71JIhts0Yv-wMzVZJn--k"
   }
}
```

### Forgot Password
In case of a forgotten password, send a `POST` request to the following address:

POST: `{{URL}}/api/reset/forget`

Request Example:
```json
{
   "email": "talhe9930@gmail.com"
}
```
If the process is successful, an email will be sent to the user, which contains a password recovery link such as:

POST: [{{URL}}/api/reset/b5a5e6ffab8e6f4351fde5fe9806bee5f967cf5e7b5ff2ebdc453222f79337b4f54b7e7a82e94f97]()

By clicking on the link above, the user will be transferred to the password reset page. Then, the value of the parameter that is in front of the `reset` should be sent to back to the server, along with the new password.

### Password Recovery
To recover the password, send a `POST` request to the following address:

POST: `{{URL}}/api/reset/b5a5e6ffab8e6f4351fde5fe9806bee5f967cf5e7b5ff2ebdc453222f79337b4f54b7e7a82e94f97`

Request Example:
```json
{
   "password": "mynewpass"
}
```
Return Value:
If the login process is done successfully, a [Json Web Token (JWT)](https://jwt.io) will be sent back to you from the server, whose name is `x-auth-token`, and can be used to send authenticated requests to the server.
```json
{
   "message": "Your password changed!",
   "data": {}
}
```

### Get Profile
Send a `GET` request to the following address to receive the user profile.

GET: `{{URL}}/api/user/profile`

Return Value:
If the login process is done successfully, a [Json Web Token (JWT)](https://jwt.io) will be sent back to you from the server, whose name is `x-auth-token`, and can be used to send authenticated requests to the server.
```json
{
   "message": "User Profile",
   "data": {
      "username": "talhe",
      "email": "talhe9930@gmail.com"
   }
}
```

### Update Profile
Send a `PUT` request to the following address to update the user profile:

PUT: `{{URL}}/api/user/update`

| Field | Data Type | Description |
| :----  | :---------:  |  :----------- |
| username* | String | Username |
| password* | String | Password |
<br />

Request Example:
```json
{
   "username": "talhe 2",
   "password": "newpassword"
}
```
Return Value:
```json
{
   "message": "User updated!",
   "data": {
      "username": "talhe 2",
      "password": "$2b$10$WEEkck11beamYsQ0Y5aIYu6ZwZUKK/9iqShxbPO7QFqfZOggFNpky"
   }
}
```

### Add to shopping cart
Send the product ID to the following address using the `POST` method to add a product to the shopping cart:

POST: `{{URL}}/api/cart/create`

| Field | Data Type | Description |
| :----  | :---------:  |  :----------- |
| productId* | String | Product ID |
<br />

Request Example:
```json
{
   "productId": "646b64eb38f4f6acf269ddab"
}
```
Return Value:
```json
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
Note: By sending a repeated request, only the quantity of the same product will increase in the shopping cart.

### Update Shopping Cart
Send a `PUT` request to the following address to update the shopping cart:

PUT: `{{URL}}/api/cart/update`

| Field | Data Type | Description |
| :----- | :---------:  |  :----------- |
| list* | Array | Product ID and quantity |
<br />

Request Example:
```json
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
Return Value:
```json
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

### Delete Cart
Send a `DELETE` request to the following address to clear the shopping cart:

DELET: `{{URL}}/api/cart/delete`

Return Value:
```json
{
   "message": "the cart successfuly deleted",
   "data": {}
}
```

### View Shopping Cart Items
Send a `GET` request to the following address to view the shopping cart items:

GET: `{{URL}}/api/cart/view`

Return Value:
```json
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

### Get Orders List
For a list of all orders, send a `GET` request to the following address:

GET: `{{URL}}/api/order/list`

Return Value:
```json
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

### View Order Details
Send a `GET` request to the following address to view order details:

GET: `{{URL}}/order/view/orderId`

Request Example:
```json
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
Return Value:
```json
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

### Add Comment
Send a `POST` request to the following address to add a comment:

POST: `{{URL}}/api/comment/create`

| Field | Data Type | Description |
| :----  | :---------:  |  :----------- |
| productId* | ObjectId | Product ID |
| rating* | String | User will be allowed to rate the product from 1 to 5 |
| title* | String | Comment title |
| description* | String | Comment description |
| parent* | ObjectId | To reply to a comment, just add this field and enter the ID of that comment |
<br />

Request Example:
```json
{
   "productId": "646b64ca38f4f6acf269dda7",
   "rating": "5",
   "title": "yellow",
   "description": "Yellow color suits this shirt very well"
}
```

Note: If you are an admin, your comment will be automatically approved, otherwise, your comment must be approved by the main site administrator to be displayed.

Return Value:
```json
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

### Get All Products
For a list of all products, send a `GET` request to the following address with:

GET: `{{URL}}/api/product`

Return Value:
```json
{
   "message": "the All products!",
   "data": [
      {
         "images": {
            "gallery": [],
            "main": {
               "_id": "645fe437c45c6682f650651e",
               "name": "e.jpg",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\files\\images\\2023\\5\\13\\1684005943280-9963984.jpg"
            }
         },
         "_id": "64a9988b69ea51d88393fd6b",
         "title": "Slash pants",
         "desc": "Description of Slash pants",
         "categories": [
            {
               "_id": "6441111f8382c39faa8f7eb5",
               "name": "Pants",
               "slug": "Pants",
               "id": "6441111f8382c39faa8f7eb5"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "blue"
         ],
         "price": 20000,
         "slug": "-lash-pants",
         "updatedAt": "2023-07-08T17:10:35.855Z",
         "createdAt": "2023-07-08T17:10:35.855Z",
         "__v": 0
      },
      {
         "images": {
            "gallery": [],
            "main": {
               "_id": "645fe437c45c6682f650651e",
               "name": "e.jpg",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\files\\images\\2023\\5\\13\\1684005943280-9963984.jpg"
            }
         },
         "_id": "64a998c669ea51d88393fd6f",
         "title": "t shirts",
         "desc": "Description of t shirts",
         "categories": [
            {
               "_id": "646b647438f4f6acf269dda3",
               "name": "t shirts",
               "slug": "t-shirts",
               "id": "646b647438f4f6acf269dda3"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "black"
         ],
         "price": 50000,
         "slug": "t-shirts",
         "updatedAt": "2023-07-08T17:11:34.414Z",
         "createdAt": "2023-07-08T17:11:34.414Z",
         "__v": 0
      }
   ]
}
```

### Product Search
To search for a product, send a `GET` request to the following address and pass the phrase as the value (argument) of the `search` query parameter of the URL. For example, let's say the phrase is *Slash pants*:

GET: `{{URL}}/api/product?search=Slash pants`

Return Value:
```json
{
   "message": "the product",
   "data": [
      {
         "images": {
            "gallery": [],
            "main": {
               "_id": "645fe437c45c6682f650651e",
               "name": "e.jpg",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\files\\images\\2023\\5\\13\\1684005943280-9963984.jpg"
            }
         },
         "_id": "64a9988b69ea51d88393fd6b",
         "title": "Slash pants",
         "desc": "Description of Slash pants",
         "categories": [
            {
               "_id": "6441111f8382c39faa8f7eb5",
               "name": "Pants",
               "slug": "Pants",
               "id": "6441111f8382c39faa8f7eb5"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "blue"
         ],
         "price": 20000,
         "slug": "-lash-pants",
         "updatedAt": "2023-07-08T17:10:35.855Z",
         "createdAt": "2023-07-08T17:10:35.855Z",
         "__v": 0
      }
   ]
}
```

### Get Products Based on Categories
For a list of all products based on a specific category, send a `GET` request to the following address:

GET: `{{URL}}/api/product?category=t-shirts`

Return Value:
```json
{
   "message": "the product",
   "data": [
      {
         "images": {
            "gallery": [],
            "main": {
               "_id": "645fe437c45c6682f650651e",
               "name": "e.jpg",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\files\\images\\2023\\5\\13\\1684005943280-9963984.jpg"
            }
         },
         "_id": "64a998c669ea51d88393fd6f",
         "title": "t shirts",
         "desc": "Description of t shirts",
         "categories": [
            {
               "_id": "646b647438f4f6acf269dda3",
               "name": "t shirts",
               "slug": "t-shirts",
               "id": "646b647438f4f6acf269dda3"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "black"
         ],
         "price": 50000,
         "slug": "t-shirts",
         "updatedAt": "2023-07-08T17:11:34.414Z",
         "createdAt": "2023-07-08T17:11:34.414Z",
         "__v": 0
      },
      {
         "images": {
            "gallery": [],
            "main": {
               "_id": "645fe437c45c6682f650651e",
               "name": "e.jpg",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\files\\images\\2023\\5\\13\\1684005943280-9963984.jpg"
            }
         },
         "_id": "64a99f36db9be9de231940b9",
         "title": "t shirts 2",
         "desc": "Description of t shirts 2",
         "categories": [
            {
               "_id": "646b647438f4f6acf269dda3",
               "name": "t shirts",
               "slug": "t-shirts",
               "id": "646b647438f4f6acf269dda3"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "black"
         ],
         "price": 60000,
         "slug": "t-shirts-2",
         "updatedAt": "2023-07-08T17:39:02.761Z",
         "createdAt": "2023-07-08T17:39:02.761Z",
         "__v": 0
      }
   ]
}
```

### Get a Single Product
To get a single product, send a `GET` request to the following address with the corresponding product ID. For example, if the `productId` is *64a9988b69ea51d88393fd6b*:

GET: `{{URL}}/api/product/productId`

or

GET: `{{URL}}/api/product/64a9988b69ea51d88393fd6b`

Return Value:
```json
{
   "message": "the product",
   "data": {
      "images": {
      "gallery": [],
      "main": {
            "_id": "645fe437c45c6682f650651e",
            "name": "e.jpg",
            "encoding": "7bit",
            "size": "29090",
            "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\files\\images\\2023\\5\\13\\1684005943280-9963984.jpg",
            "mimetype": "image/jpeg",
            "md5": "c150d69e86358d94c5d0454454076abb",
            "userId": "6432dcfb2b50736509f7180c",
            "__v": 0
      }
      },
      "_id": "64a9988b69ea51d88393fd6b",
      "title": "Slash pants",
      "desc": "Description of Slash pants",
      "categories": [
         {
            "_id": "6441111f8382c39faa8f7eb5",
            "name": "Pants",
            "slug": "Pants",
            "parent": "6436d1bdbb3fee1fde6d8802",
            "updatedAt": "2023-04-20T10:17:03.179Z",
            "createdAt": "2023-04-20T10:17:03.179Z",
            "__v": 0,
            "id": "6441111f8382c39faa8f7eb5"
         }
      ],
      "size": [
         "sm"
      ],
      "color": [
         "blue"
      ],
      "price": 20000,
      "slug": "-lash-pants",
      "updatedAt": "2023-07-08T17:10:35.855Z",
      "createdAt": "2023-07-08T17:10:35.855Z",
      "__v": 0
   }
}
```

### Get Product Comments
For a list of all product comments, send a `GET` request to the following address with the corresponding product ID. For example, if the `productId` is *64a9988b69ea51d88393fd6b*:

GET: `{{URL}}/api/product/productId`

or

GET: `{{URL}}/api/product/64a9988b69ea51d88393fd6b`

Return Value:
```json
{
   "message": "comments of this product",
   "data": [
      {
         "_id": "64a6c98ad68599ed4dbcc1bd",
         "name": "talhe",
         "email": "talhe9930@gmail.com",
         "authorId": "6432dcfb2b50736509f7180c",
         "productId": "64b950947c6705e61f87080b",
         "parent": {
            "_id": "64b94e9e7a12a8bce2d1d931",
            "name": "talhe",
            "email": "talhe9930@gmail.com",
            "authorId": "6432dcfb2b50736509f7180c",
            "productId": "64b950947c6705e61f87080b",
            "parent": null,
            "rating": 5,
            "title": "gooooood",
            "description": "The price of this product is much better than other products",
            "check": true,
            "updatedAt": "2023-07-20T15:11:26.060Z",
            "createdAt": "2023-07-20T15:11:26.060Z",
            "__v": 0,
            "id": "64b94e9e7a12a8bce2d1d931"
         },
         "rating": 5,
         "title": "yellow",
         "description": "Yellow color suits this shirt very well",
         "check": true,
         "updatedAt": "2023-07-16T18:27:42.668Z",
         "createdAt": "2023-07-06T14:02:50.476Z",
         "__v": 0,
         "id": "64a6c98ad68599ed4dbcc1bd"
      },
      {
         "_id": "64b94e9e7a12a8bce2d1d931",
         "name": "talhe",
         "email": "talhe9930@gmail.com",
         "authorId": "6432dcfb2b50736509f7180c",
         "productId": "64b950947c6705e61f87080b",
         "parent": null,
         "rating": 5,
         "title": "gooooood",
         "description": "The price of this product is much better than other products",
         "check": true,
         "updatedAt": "2023-07-20T15:11:26.060Z",
         "createdAt": "2023-07-20T15:11:26.060Z",
         "__v": 0,
         "id": "64b94e9e7a12a8bce2d1d931"
      }
   ]
}
```

### Online Payment
For online payment, send a `POST` request to the following address:

POST: `{{URL}}/api/payment`

Return Value:
```json
{
   "data": {
      "info": {
         "payment": {
            "authority": "A00000000000000000000000000444068040",
            "code": 100,
            "state": "PEDNDING",
            "date": 1689181562833
         },
         "_id": "64ad8bbe56d83bae0a586430",
         "userId": "6432dcfb2b50736509f7180c",
         "list": [
            {
               "productId": "64a998c669ea51d88393fd6f",
               "quantity": 1,
               "price": 50000,
               "_id": "64ad8bbe56d83bae0a586431"
            }
         ],
         "amount": 50000,
         "updatedAt": "2023-07-11T17:06:02.850Z",
         "createdAt": "2023-07-11T17:05:02.925Z",
         "__v": 0
      },
      "redirect": "https://www.zarinpal.com/pg/StartPay/A00000000000000000000000000444068040"
   }
}
```

After receiving the response, redirect the user to the `returned` value. If the transaction is successful, the value of `Status` will be `OK`, and if the transaction is not successful, the value will be `NOK`.

Successful transaction example where the user hase been redirected from the payment gateway back to the website:

`{{URL}}?Authority=A00000000000000000000000000403047345&Status=OK`

Failed transaction example where the user hase been redirected from the payment gateway back to the website:

`{{URL}}?Authority=A00000000000000000000000000403047345&Status=NOK`

Note: Currently, the only regulated payment gateway is Zarin Pal.

To check the payment details, send a request to the following address using the `POST` method:

POST: `{{URL}}/api/payment/checkout`
| Field | Data Type | Description |
| :----  | :---------:  |  :----------- |
| Authority* | String | Payment code |
| Status* | String | *OK* or *NOK* |
<br />

Request Example:
```json
{
   "Authority":"A00000000000000000000000000444068040",
   "Status":"OK"
}
```
Return Value:
```json
{
   "status": 200,
   "data": {
      "userId": "6432dcfb2b50736509f7180c",
      "products": [],
      "payment": {
         "authority": "A00000000000000000000000000444068040",
         "code": 100,
         "state": "SUCCESS",
         "date": 1689181562833
      },
      "amount": 50000,
      "_id": "64ad8d7789763be17299a143",
      "updatedAt": "2023-07-11T17:12:23.102Z",
      "createdAt": "2023-07-11T17:12:23.102Z",
      "__v": 0
   },
   "message": "The payment is done."
}
```

Note: After a successful transaction, the shoppint cart will be deleted from the database.

### Add Address
To add an address, send a `POST` request to the following address:

POST: `{{URL}}/api/address/add`

Request Example:
```json
{
   "country": "64ea34e7ed63fc37f380339a",
   "provState": "64ea3330316f9f571f40823b",
   "city": "64ea337b316f9f571f40823e",
   "address": "َAzadi street",
   "postalcode": "8999333432"
}
```
Return Value:
```json
{
   "message": "Address added.",
   "data": {
      "country": "64ea34e7ed63fc37f380339a",
      "provState": "64ea3330316f9f571f40823b",
      "city": "64ea337b316f9f571f40823e",
      "address": "َAzadi street",
      "postalcode": "8999333432",
      "userId": "6432dcfb2b50736509f7180c",
      "_id": "64ea417e1163f4e83605e576",
      "updatedAt": "2023-08-26T18:16:30.553Z",
      "createdAt": "2023-08-26T18:16:30.553Z",
      "__v": 0
   }
}
```

### Update Address
To update an address, send a `PUT` request to the following address. For example, if the `addressId` is *64ea417e1163f4e83605e576*:

PUT: `{{URL}}/api/address/update/:addressId`

or

PUT: `{{URL}}/api/address/update/64ea417e1163f4e83605e576`

Request Example:
```json
{
  "country": "64ea34e7ed63fc37f380339a",
   "provState": "64ea3330316f9f571f40823b",
   "city": "64ea337b316f9f571f40823e",
   "address": "َAddress Updated!",
   "postalcode": "8999333432"
}
```
Return Value:
```json
{
   "message": "Address updated.",
   "data": {
      "_id": "64ea417e1163f4e83605e576",
      "country": "64ea34e7ed63fc37f380339a",
      "provState": "64ea3330316f9f571f40823b",
      "city": "64ea337b316f9f571f40823e",
      "address": "َAddress Updated!",
      "postalcode": "8999333432",
      "userId": "6432dcfb2b50736509f7180c",
      "updatedAt": "2023-08-26T18:19:06.343Z",
      "createdAt": "2023-08-26T18:16:30.553Z",
      "__v": 0
   }
}
```

### Addresses List
To get a list of all addresses, send a `GET` request to the following address:

GET: `{{URL}}/api/address/list`

Return Value:
```json
{
   "message": "Address found.",
   "data": [
      {
         "_id": "64ea417e1163f4e83605e576",
         "address": "َAddress Updated!"
      },
      {
         "_id": "64ea45001163f4e83605e57e",
         "address": "َAzadi street"
      }
   ]
}
```

### Get Address Details
To get the details of a user's postal address, send a `GET` request to the following address. For example, if the `addressId` is *64ea45001163f4e83605e57e*:

GET: `{{URL}}/api/address/view/:addressId`

or

GET: `{{URL}}/api/address/view/64ea45001163f4e83605e57e`

Return Value:
```json
{
   "message": "Address found.",
   "data": {
      "_id": "64ea45001163f4e83605e57e",
      "country": "64ea34e7ed63fc37f380339a",
      "provState": "64ea3330316f9f571f40823b",
      "city": "64ea337b316f9f571f40823e",
      "address": "َAzadi street",
      "postalcode": "8999333432",
      "userId": "6432dcfb2b50736509f7180c",
      "updatedAt": "2023-08-26T18:31:28.171Z",
      "createdAt": "2023-08-26T18:31:28.171Z",
      "__v": 0
   }
}
```

### Delete an Address
To delete an address, send a `DELETE` request to the following address. For example, if the `addressId` is *64ea45001163f4e83605e57e*:

DELETE: `{{URL}}/api/address/view/:addressId`

or

DELETE: `{{URL}}/api/address/view/64ea45001163f4e83605e57e`

Return Value:
```json
{
   "message": "Address deleted.",
   "data": {
      "_id": "64ea45001163f4e83605e57e",
      "country": "64ea34e7ed63fc37f380339a",
      "provState": "64ea3330316f9f571f40823b",
      "city": "64ea337b316f9f571f40823e",
      "address": "َAzadi street",
      "postalcode": "8999333432",
      "userId": "6432dcfb2b50736509f7180c",
      "updatedAt": "2023-08-26T18:31:28.171Z",
      "createdAt": "2023-08-26T18:31:28.171Z",
      "__v": 0
   }
}
```


## Documentation (Admin-Only Features)
**Note: The following features are only available to the admin of the website.**

### Add Category
To add a new category, send a `POST` request to the following address:

PUT: `{{URL}}/api/admin/category/create`

| Field | Data Type | Description |
| :----  | :---------:  |  :----------- |
| name* | string |  Category name |
| parent* | ObjectId | If you want this category to be a subset of another category, enter the parent category ID (Optional) |
<br />

Request Example:
```json
{
   "name": "new Category"
}
```
Return Value:
```json
{
   "message": "the category successfuly saved",
   "data": {
      "name": "new Category",
      "slug": "new-Category",
      "parent": null,
      "_id": "64b2e8059f0bd229c9be768e",
      "updatedAt": "2023-07-15T18:40:05.263Z",
      "createdAt": "2023-07-15T18:40:05.263Z",
      "__v": 0,
      "id": "64b2e8059f0bd229c9be768e"
   }
}
```

Note: In case you want this category to be a subset of another one, add the `parent` property to the request object and set the ID of that category as the value.

### Update Category
To update a category, send a `POST` request to the following address. For example, if the `categoryId` is *64b2e3be8936f0ca5aa6d777*:

POST: `{{URL}}/api/admin/category/:categoryId`

or

POST: `{{URL}}/api/admin/category/64b2e3be8936f0ca5aa6d777`

Request Example:
```json
{
   "name": "name updated"
}
```
Return Value:
```json
{
   "message": "the category successfuly updated",
   "data": {
      "_id": "64b2e8059f0bd229c9be768e",
      "name": "name updated",
      "slug": "name-updated",
      "parent": null,
      "updatedAt": "2023-07-15T18:41:20.350Z",
      "createdAt": "2023-07-15T18:40:05.263Z",
      "__v": 0,
      "id": "64b2e8059f0bd229c9be768e"
   }
}
```

### Delete Category
To delete a category, send a `DELETE` request to the following address. For example, if the `categoryId` is *64b2e8059f0bd229c9be768e*:

DELETE: `{{URL}}/api/admin/category/:categoryId`

or

DELETE: `{{URL}}/api/admin/category/64b2e8059f0bd229c9be768e`

Return Value:
```json
{
   "message": "the category successfuly deleted",
   "data": {}
}
```

Note: If you delete a main category, its subcategories will also be deleted.

### Get All Categories
To get all categories, send a `GET` request to the following address:

GET: `{{URL}}/api/admin/category`

Return Value:
```json
{
   "message": "the All Categories",
   "data": [
      {
         "_id": "64b2e9459f0bd229c9be7698",
         "name": "category one",
         "slug": "category-one",
         "parent": null,
         "updatedAt": "2023-07-15T18:45:25.250Z",
         "createdAt": "2023-07-15T18:45:25.250Z",
         "__v": 0,
         "id": "64b2e9459f0bd229c9be7698"
      },
      {
         "_id": "64b2e94b9f0bd229c9be769c",
         "name": "category two",
         "slug": "category-two",
         "parent": null,
         "updatedAt": "2023-07-15T18:45:31.688Z",
         "createdAt": "2023-07-15T18:45:31.688Z",
         "__v": 0,
         "id": "64b2e94b9f0bd229c9be769c"
      }
   ]
}
```

### Get All Comments
To get all comments, send a `GET` request to the following address:

GET: `{{URL}}/api/admin/comment`

Return Value:
```json
{
   "message": "the All Comments",
   "data": [
      {
         "_id": "64a6c98ad68599ed4dbcc1bd",
         "name": "talhe",
         "email": "talhe9930@gmail.com",
         "authorId": {
               "_id": "6432dcfb2b50736509f7180c"
         },
         "productId": "646b64ca38f4f6acf269dda7",
         "parent": null,
         "rating": 5,
         "title": "yellow",
         "description": "Yellow color suits this shirt very well",
         "check": true,
         "updatedAt": "2023-07-06T14:02:50.476Z",
         "createdAt": "2023-07-06T14:02:50.476Z",
         "__v": 0,
         "id": "64a6c98ad68599ed4dbcc1bd"
      },
      {
         "_id": "64b43374a3d11ba96fa36bce",
         "name": "talhe",
         "email": "talhe9930@gmail.com",
         "authorId": {
               "_id": "6432dcfb2b50736509f7180c"
         },
         "productId": "64a9988b69ea51d88393fd6b",
         "parent": null,
         "rating": 5,
         "title": "The price is right",
         "description": "The price of this product is much better than other products",
         "check": true,
         "updatedAt": "2023-07-16T18:14:12.232Z",
         "createdAt": "2023-07-16T18:14:12.232Z",
         "__v": 0,
         "id": "64b43374a3d11ba96fa36bce"
      }
   ]
}
```

### Delete Comment
To delete a comment, send a `DELETE` request to the following address. For example, if the `commentId` is *64b43374a3d11ba96fa36bce*:

DELETE: `{{URL}}/api/admin/category/:categoryId`

or

DELETE: `{{URL}}/api/admin/category/64b43374a3d11ba96fa36bce`

Return Value:
```json
{
   "message": "The comment was deleted! ",
   "data": {
      "_id": "64b43374a3d11ba96fa36bce",
      "name": "talhe",
      "email": "talhe9930@gmail.com",
      "authorId": "6432dcfb2b50736509f7180c",
      "productId": "64a9988b69ea51d88393fd6b",
      "parent": null,
      "rating": 5,
      "title": "The price is right",
      "description": "The price of this product is much better than other products",
      "check": true,
      "updatedAt": "2023-07-16T18:14:12.232Z",
      "createdAt": "2023-07-16T18:14:12.232Z",
      "__v": 0,
      "comments": [],
      "id": "64b43374a3d11ba96fa36bce"
   }
}
```

### Approve Comment
To approve a comment and make it visible to all users, send a `PUT` request to the following address. For example, if the `commentId` is *64b43374a3d11ba96fa36bce*:

PUT: `{{URL}}/api/api/admin/comment/commentId/approve`

or

PUT: `{{URL}}/api/api/admin/comment/64b43374a3d11ba96fa36bce/approve`

Return Value:
```json
{
   "message": "The comment Submited! ",
   "data": {
      "_id": "64a6c98ad68599ed4dbcc1bd",
      "name": "talhe",
      "email": "talhe9930@gmail.com",
      "authorId": "6432dcfb2b50736509f7180c",
      "productId": "646b64ca38f4f6acf269dda7",
      "parent": null,
      "rating": 5,
      "title": "yellow",
      "description": "Yellow color suits this shirt very well",
      "check": true,
      "updatedAt": "2023-07-16T18:27:42.668Z",
      "createdAt": "2023-07-06T14:02:50.476Z",
      "__v": 0,
      "comments": [],
      "id": "64a6c98ad68599ed4dbcc1bd"
   }
}
```

Note: After sending the request to this address, the corresponding chckbox will be checked, and it will be confirmed by the site admin.

### Add File
To add a file, send a `POST` request to the following address:

POST: `{{URL}}/api/api/admin/file/upload`

Return Value:
```json
{
   "message": "The File Successfully Added!",
   "data": [
      {
         "name": "e.jpg",
         "encoding": "7bit",
         "size": "29090",
         "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg",
         "mimetype": "image/jpeg",
         "md5": "c150d69e86358d94c5d0454454076abb",
         "userId": "6432dcfb2b50736509f7180c",
         "_id": "64b54755937ea0ffaa2e0525",
         "__v": 0
      }
   ]
}
```

After uploading the file, it will be saved in `src/files` directory. The maximum upload size is 2MB. Also, only jpg, png, jpeg, mp3, and mpeg extensions are supported.

### Update File Data
To update the data of a file, send a `PATCH` request to the following address. For example, if the `fileId` is *64b54755937ea0ffaa2e0525*:

PATCH: `{{URL}}/api/admin/file/update/:fileId`

or

PATCH: `{{URL}}/api/admin/file/update/64b54755937ea0ffaa2e0525`

| Field | Data Type | Description |
| :----- | :---------- |  :----------- |
| name* | String | New file name |
| userId* | ObjectId | New owner's ID |
<br />

Request Example:
```json
{
   "name": "new name",
   "userId": "64a450f699e30131c22aa7de"
}
```
Return Value:
```json
{
   "message": "file Updated! ",
   "data": {
      "_id": "64b54755937ea0ffaa2e0525",
      "name": "new name",
      "encoding": "7bit",
      "size": "29090",
      "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg",
      "mimetype": "image/jpeg",
      "md5": "c150d69e86358d94c5d0454454076abb",
      "userId": "64a450f699e30131c22aa7de",
      "__v": 0,
      "updatedAt": "2023-07-17T14:00:47.734Z",
      "createdAt": "2023-07-17T14:00:47.734Z"
   }
}
```

### Delete File
To delete a file, send a `DELETE` request to the following address. For example, if the `fileId` is *645fe437c45c6682f650651e*:

DELETE: `{{URL}}/api/admin/file/delete/:fileId`

or

DELETE: `{{URL}}/api/admin/file/delete/645fe437c45c6682f650651e`

Return Value:
```json
{
   "message": "file Deleted! ",
   "data": {
      "_id": "64b5376c4dfa8b92212cceed",
      "name": "e.jpg",
      "encoding": "7bit",
      "size": "29090",
      "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689597804846-8619500.jpg",
      "mimetype": "image/jpeg",
      "md5": "c150d69e86358d94c5d0454454076abb",
      "userId": "6432dcfb2b50736509f7180c",
      "__v": 0
   }
}
```

Note: After receiving the response from the server, the file information will be deleted from the database, and the file itself will be deleted from `src/files`.

### Get All Fiels
To get a list of all files, send a `GET` request to the following address:

GET: `{{URL}}/api/admin/file/list`

Return Value:
```json
{
   "message": "The All Files. ",
   "data": [
      {
         "_id": "64b54755937ea0ffaa2e0525",
         "name": "new name",
         "encoding": "7bit",
         "size": "29090",
         "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg",
         "mimetype": "image/jpeg",
         "md5": "c150d69e86358d94c5d0454454076abb",
         "userId": "6432dcfb2b50736509f7180c",
         "__v": 0,
         "createdAt": "2023-07-17T14:00:47.734Z",
         "updatedAt": "2023-07-17T14:00:47.734Z"
      },
      {
         "_id": "64b54b6d0e8383ad48270568",
         "name": "wp11266119.jpg",
         "encoding": "7bit",
         "size": "598165",
         "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689602925181-4339100.jpg",
         "mimetype": "image/jpeg",
         "md5": "4c040d78de5435815bb3b50bf7bf6483",
         "userId": "6432dcfb2b50736509f7180c",
         "__v": 0
      }
   ]
}
```

### View File
To view a file, send a `GET` request to the following address. For example, if the `fileId` is *644a78aea7fac85d554*:

GET: `{{URL}}/api/admin/file/view/:fileId`

or

GET: `{{URL}}/api/admin/file/view/644a78aea7fac85d554`

Return Value:
```json
{
   "message": "the file! ",
   "data": {
      "_id": "64b54755937ea0ffaa2e0525",
      "name": "new name",
      "encoding": "7bit",
      "size": "29090",
      "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg",
      "mimetype": "image/jpeg",
      "md5": "c150d69e86358d94c5d0454454076abb",
      "userId": "6432dcfb2b50736509f7180c",
      "__v": 0,
      "createdAt": "2023-07-17T14:00:47.734Z",
      "updatedAt": "2023-07-17T14:00:47.734Z"
   }
}
```

### Add Product
To add a product, send a `POST` request to the following address:

POST: `{{URL}}/api/admin/product/create`

| Field | Data Type | Description |
| :----- | :---------: | :------------ |
| title* | String | Product name  | 
| description* | String | Product full description | 
| mindescription* | String | Product short description | 
| images* | ObjectId | The *main* contains the main image and the *gallery* contains the gallary image |
| categories* | ObjectId | Product category | 
| size* | String | Product size | 
| color* | String | Product color | 
| price* | String | Product price |
<br />

Request Example:
```json
{
   "title": "react js course",
   "description": "The library for web and native user interfaces.",
   "mindescription": "React.js is a JavaScript library",
   "images": {
      "main": "64b54755937ea0ffaa2e0525",
      "gallery": [
         "64b7fb1b3e474c037fb428cf",
         "64b7fb0b3e474c037fb428cc"
      ]
   },
   "categories": "64b2e94b9f0bd229c9be769c",
   "size": "sm",
   "color": "green",
   "price": "50000"
}
```
Return Value:
```json
{
   "message": "the product successfuly saved",
   "data": {
      "_id": "64b950947c6705e61f87080b",
      "title": "react js course",
      "mindescription": "React.js is a JavaScript library",
      "price": 50000
   }
}
```

### Update Product
To update a product, send a `PUT` request to the following address. For example, if the `productId` is *64b7fb593e474c037fb428d3*:

PUT: `{{URL}}/api/admin/product/:productId`

or

PUT: `{{URL}}/api/admin/product/64b7fb593e474c037fb428d3`

| Field | Data Type | Description |
| :----- | :---------: | :------------ |
| title* | String | Product name  | 
| description* | String | Product full description | 
| mindescription* | String | Product short description | 
| images* | ObjectId | The *main* contains the main image and the *gallery* contains the gallary image |
| categories* | ObjectId | Product category | 
| size* | String | Product size | 
| color* | String | Product color | 
| price* | String | Product price |
| owner* | String | Owner ID (defaults to the ID of the website owner) |
<br />

Request Example:
```json
{
   "title": "node Js course updated",
   "description": "Node.js® is an open-source, cross-platform JavaScript runtime environment.",
   "mindescription": "Node.js is a JavaScript runtime",
   "images": {
      "main": "64b54755937ea0ffaa2e0525",
      "gallery": [
         "64b7fb1b3e474c037fb428cf",
         "64b7fb0b3e474c037fb428cc"
      ]
   },
   "categories": "64b2e94b9f0bd229c9be769c",
   "size": "sm",
   "color": "green",
   "price": "50000",
   "owner": "6436767e1f76bd45c30117c1"
}
```
Return Value:
```json
{
   "message": "the product successfuly updated",
   "data": {
      "_id": "64b950947c6705e61f87080b",
      "title": "node Js course updated",
      "mindescription": "Node.js is a JavaScript runtime",
      "price": 50000
   }
}
```

### Delete Product
To delete a product, send a `DELETE` request to the following address. For example, if the `productId` is *64b80ce92798792c74a79382*:

DELETE: `{{URL}}/api/admin/product/:productId`

or

DELETE: `{{URL}}/api/admin/product/64b80ce92798792c74a79382`

Return Value:
```json
{
   "message": "the product successfuly deleted",
   "data": {
      "_id": "64b80ce92798792c74a79382",
      "title": "node Js course updated"
   }
}
```

### View Product
To view a single product, send a `GET` request to the following address. For example, if the `productId` is *64b7fb593e474c037fb428d3*:

GET: `{{URL}}/api/admin/product/:productId`

or

GET: `{{URL}}/api/admin/product/64b7fb593e474c037fb428d3`

Return Value:
```json
{
   "message": "the product",
   "data": {
      "images": {
         "main": {
            "_id": "64b54755937ea0ffaa2e0525",
            "name": "new name",
            "encoding": "7bit",
            "size": "29090",
            "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg",
            "mimetype": "image/jpeg",
            "md5": "c150d69e86358d94c5d0454454076abb",
            "userId": "6432dcfb2b50736509f7180c",
            "__v": 0,
            "createdAt": "2023-07-17T14:00:47.734Z",
            "updatedAt": "2023-07-17T14:00:47.734Z"
         },
         "gallery": [
            {
               "_id": "64b7fb1b3e474c037fb428cf",
               "name": "wp11266119.jpg",
               "encoding": "7bit",
               "size": "598165",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778971586-203953.jpg",
               "mimetype": "image/jpeg",
               "md5": "4c040d78de5435815bb3b50bf7bf6483",
               "userId": "6432dcfb2b50736509f7180c",
               "__v": 0
            },
            {
               "_id": "64b7fb0b3e474c037fb428cc",
               "name": "e.jpg",
               "encoding": "7bit",
               "size": "29090",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778955688-4330658.jpg",
               "mimetype": "image/jpeg",
               "md5": "c150d69e86358d94c5d0454454076abb",
               "userId": "6432dcfb2b50736509f7180c",
               "__v": 0
            }
         ]
      },
      "_id": "64b7fb593e474c037fb428d3",
      "title": "node Js course updated 2",
      "description": "Node.js® is an open-source, cross-platform JavaScript runtime environment.",
      "mindescription": "Node.js is a JavaScript runtime",
      "categories": [
         {
            "_id": "64b2e94b9f0bd229c9be769c",
            "name": "category two",
            "slug": "category-two",
            "parent": null,
            "updatedAt": "2023-07-15T18:45:31.688Z",
            "createdAt": "2023-07-15T18:45:31.688Z",
            "__v": 0,
            "id": "64b2e94b9f0bd229c9be769c"
         }
      ],
      "size": [
         "sm"
      ],
      "color": [
         "green"
      ],
      "price": 50000,
      "slug": "node-s-course-updated-2",
      "updatedAt": "2023-07-19T16:17:36.031Z",
      "createdAt": "2023-07-19T15:03:53.386Z",
      "__v": 0
   }
}
```

### View All Products
To view All products, send a `GET` request to the following address:

GET: `{{URL}}/api/admin/product`

Return Value:
```json
{
   "message": "the All products",
   "data": [
      {
         "images": {
            "main": {
               "_id": "64b54755937ea0ffaa2e0525",
               "name": "new name",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg"
            },
            "gallery": [
               {
                  "_id": "64b7fb1b3e474c037fb428cf",
                  "name": "wp11266119.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778971586-203953.jpg"
               },
               {
                  "_id": "64b7fb0b3e474c037fb428cc",
                  "name": "e.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778955688-4330658.jpg"
               }
            ]
         },
         "_id": "64b812fe9f218256148bc2b4",
         "title": "node Js course",
         "description": "Node.js® is an open-source, cross-platform JavaScript runtime environment.",
         "mindescription": "Node.js is a JavaScript runtime",
         "categories": [
            {
               "_id": "64b2e94b9f0bd229c9be769c",
               "name": "category two",
               "slug": "category-two",
               "id": "64b2e94b9f0bd229c9be769c"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "green"
         ],
         "price": 10000,
         "slug": "node-s-course",
         "owner": "6432dcfb2b50736509f7180c",
         "updatedAt": "2023-07-19T16:44:46.909Z",
         "createdAt": "2023-07-19T16:44:46.909Z",
         "__v": 0
      },
      {
         "images": {
            "main": {
               "_id": "64b54755937ea0ffaa2e0525",
               "name": "new name",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg"
            },
            "gallery": [
               {
                  "_id": "64b7fb1b3e474c037fb428cf",
                  "name": "wp11266119.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778971586-203953.jpg"
               },
               {
                  "_id": "64b7fb0b3e474c037fb428cc",
                  "name": "e.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778955688-4330658.jpg"
               }
            ]
         },
         "_id": "64b813729f218256148bc2bc",
         "title": "react js course",
         "description": "The library for web and native user interfaces.",
         "mindescription": "React.js is a JavaScript library",
         "categories": [
            {
               "_id": "64b2e94b9f0bd229c9be769c",
               "name": "category two",
               "slug": "category-two",
               "id": "64b2e94b9f0bd229c9be769c"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "green"
         ],
         "price": 50000,
         "slug": "react-js-course",
         "owner": "6432dcfb2b50736509f7180c",
         "updatedAt": "2023-07-19T16:46:42.954Z",
         "createdAt": "2023-07-19T16:46:42.954Z",
         "__v": 0
      }
   ]
}
```

### View Product
To view all products from a specific category, send a `GET` request to the following address and pass the phrase as the value (argument) of the `category` query parameter of the URL. For example, let's say the phrase is *Slash pants*:


GET: `{{URL}}/api/admin/product?category=categoryName`

or

GET: `{{URL}}/api/admin/product?category=category-one`

Return Value:
```json
{
   "message": "the product",
   "data": [
      {
         "images": {
            "main": {
               "_id": "64b54755937ea0ffaa2e0525",
               "name": "new name",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg"
            },
            "gallery": [
               {
                  "_id": "64b7fb1b3e474c037fb428cf",
                  "name": "wp11266119.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778971586-203953.jpg"
               },
               {
                  "_id": "64b7fb0b3e474c037fb428cc",
                  "name": "e.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778955688-4330658.jpg"
               }
            ]
         },
         "_id": "64b812fe9f218256148bc2b4",
         "title": "node Js course",
         "description": "Node.js® is an open-source, cross-platform JavaScript runtime environment.",
         "mindescription": "Node.js is a JavaScript runtime",
         "categories": [
            {
               "_id": "64b8141a9f218256148bc2c5",
               "name": "category one",
               "slug": "category-one",
               "id": "64b8141a9f218256148bc2c5"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "green"
         ],
         "price": 10000,
         "slug": "node-s-course",
         "owner": "6432dcfb2b50736509f7180c",
         "updatedAt": "2023-07-19T16:44:46.909Z",
         "createdAt": "2023-07-19T16:44:46.909Z",
         "__v": 0
      }
   ]
}
```

### Product Search
To search for a product, send a `GET` request to the following address and pass the phrase as the value (argument) of the `search` query parameter of the URL. For example, let's say the phrase is *Slash pants*:

GET: `{{URL}}/api/product?search=Slash pants`

Return Value:
```json
{
   "message": "the product",
   "data": [
      {
         "images": {
            "main": {
               "_id": "64b54755937ea0ffaa2e0525",
               "name": "new name",
               "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\17\\1689601877301-2383559.jpg"
            },
            "gallery": [
               {
                  "_id": "64b7fb1b3e474c037fb428cf",
                  "name": "wp11266119.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778971586-203953.jpg"
               },
               {
                  "_id": "64b7fb0b3e474c037fb428cc",
                  "name": "e.jpg",
                  "filepath": "\\Users\\Markazi-108\\Desktop\\projects\\ecommerce-Api-main\\src\\files\\images\\2023\\7\\19\\1689778955688-4330658.jpg"
               }
            ]
         },
         "_id": "64b813729f218256148bc2bc",
         "title": "react js course",
         "description": "The library for web and native user interfaces.",
         "mindescription": "React.js is a JavaScript library",
         "categories": [
            {
               "_id": "64b2e94b9f0bd229c9be769c",
               "name": "category two",
               "slug": "category-two",
               "id": "64b2e94b9f0bd229c9be769c"
            }
         ],
         "size": [
            "sm"
         ],
         "color": [
            "green"
         ],
         "price": 50000,
         "slug": "react-js-course",
         "owner": "6432dcfb2b50736509f7180c",
         "updatedAt": "2023-07-19T16:46:42.954Z",
         "createdAt": "2023-07-19T16:46:42.954Z",
         "__v": 0
      }
   ]
}
```

### Add Product
To add a new user, send a `POST` request to the following address:

POST: `{{URL}}/api/admin/user/create`

Request Example:
```json
{
   "email": "morteza@gmail.com",
   "username": "morteza",
   "password": "123445678"
}
```
Return Value:
```json
{
   "message": "the user successfuly registered",
   "data": {
      "_id": "64bebca6e321e8706eb818b6",
      "username": "morteza",
      "email": "morteza@gmail.com"
   }
}
```

### Update User Info
To update user information, send a `PUT` request to the following address. For example, if the `userId` is *64bebca6e321e8706eb818b6*:

PUT: `{{URL}}/api/admin/product/:userId`

or

PUT: `{{URL}}/api/admin/product/64bebca6e321e8706eb818b6`

Request Example:
```json
{
   "email": "morteza2@gmail.com",
   "username": "newusername",
   "password": "newpassword"
}
```
Return Value:
```json
{
   "message": "the user successfuly updated",
   "data": {
      "_id": "64bebca6e321e8706eb818b6",
      "username": "newusername",
      "email": "morteza2@gmail.com"
   }
}
```

### Delete User
To update user information, send a `DELETE` request to the following address. For example, if the `userId` is *64bebca6e321e8706eb818b6*:

DELETE: `{{URL}}/api/admin/user/:userId`

or

DELETE: `{{URL}}/api/admin/product/64bebca6e321e8706eb818b6`

Return Value:
```json
{
   "message": "the user successfuly deleted",
   "data": {
      "_id": "64bebca6e321e8706eb818b6",
      "username": "newusername",
      "email": "morteza2@gmail.com"
   }
}
```

### Promote User to Main Admin
To promote a normal user to the administrator of the website, send a `PUT ` request to the following address. For example, if the `userId` is *64a450f699e30131c22aa7de*:

PUT : `{{URL}}/api/admin/user/:userId`

or

PUT : `{{URL}}/api/admin/product/64a450f699e30131c22aa7de`

Return Value:
```json
{
   "message": "The user has successfully become an administrator",
   "data": {
      "_id": "6436767e1f76bd45c30117c1",
      "username": "ali",
      "email": "ali@gmail.com",
      "isadmin": true
   }
}
```

Note: The value of the `isAdmin` property will change to `true` after this action, which means the user will be able to manage the entire website.

### View All Users
To view all users, send a `GET ` request to the following address:

GET : `{{URL}}/api/admin/user`

Return Value:
```json
{
   "message": "the All users",
   "data": [
      {
         "_id": "6432dcfb2b50736509f7180c",
         "email": "talhe9930@gmail.com",
         "username": "talhe",
         "password": "$2b$10$HsWdNCwkybiTjpMHefKrC.Vw/OkQYYHZiUDaPPv3qhOT91PBLg8Xe",
         "isadmin": true,
         "updatedAt": "2023-07-06T13:41:13.349Z",
         "createdAt": "2023-04-09T15:42:51.516Z",
         "__v": 0
      },
      {
         "_id": "6436767e1f76bd45c30117c1",
         "email": "ali@gmail.com",
         "username": "ali",
         "password": "$2b$10$f2hBcnkVx3JoIt5FDUuA.OfCesnxWeTmDP6QI3T9dNqbO8SkO6tqC",
         "isadmin": true,
         "updatedAt": "2023-07-24T18:14:11.606Z",
         "createdAt": "2023-04-12T09:14:38.809Z",
         "__v": 0
      },
      {
         "_id": "64a450f699e30131c22aa7de",
         "email": "ali9930@gmail.com",
         "username": "ali",
         "password": "$2b$10$rZ/7mooIMgLnW3J5AkH2uOK8R.QsCIGLvMkGZHqW5EsLexkP74ivS",
         "isadmin": false,
         "updatedAt": "2023-07-04T17:03:50.484Z",
         "createdAt": "2023-07-04T17:03:50.484Z",
         "__v": 0
      }
   ]
}
```

### View Last 5 Registered Users
To view the last 5 registered users, send a `GET` request to the following address and pass `true` as the value (argument) of the `true` query parameter of the URL:

GET : `{{URL}}/api/admin/user?new=true`

Return Value:
```json
{
   "message": "the All users",
   "data": [
      {
         "_id": "64a450f699e30131c22aa7de",
         "email": "ali9930@gmail.com",
         "username": "ali",
         "password": "$2b$10$rZ/7mooIMgLnW3J5AkH2uOK8R.QsCIGLvMkGZHqW5EsLexkP74ivS",
         "isadmin": false,
         "updatedAt": "2023-07-04T17:03:50.484Z",
         "createdAt": "2023-07-04T17:03:50.484Z",
         "__v": 0
      },
      {
         "_id": "6436767e1f76bd45c30117c1",
         "email": "ali@gmail.com",
         "username": "ali",
         "password": "$2b$10$f2hBcnkVx3JoIt5FDUuA.OfCesnxWeTmDP6QI3T9dNqbO8SkO6tqC",
         "isadmin": true,
         "updatedAt": "2023-07-24T18:14:11.606Z",
         "createdAt": "2023-04-12T09:14:38.809Z",
         "__v": 0
      },
      {
         "_id": "6432dcfb2b50736509f7180c",
         "email": "talhe9930@gmail.com",
         "username": "talhe",
         "password": "$2b$10$HsWdNCwkybiTjpMHefKrC.Vw/OkQYYHZiUDaPPv3qhOT91PBLg8Xe",
         "isadmin": true,
         "updatedAt": "2023-07-06T13:41:13.349Z",
         "createdAt": "2023-04-09T15:42:51.516Z",
         "__v": 0
      }
   ]
}
```

### View All Orders
To view all orders, send a `GET` request to the following address:

GET: `{{URL}}/api/admin/order`

Return Value:
```json
{
   "message": "the all orders",
   "data": [
      {
         "payment": {
               "authority": "A00000000000000000000000000447834209",
               "code": 100,
               "state": "SUCCESS",
               "date": 1690552842953
         },
         "_id": "64c27892e31f67a15158f0a3",
         "userId": "6432dcfb2b50736509f7180c",
         "list": [
            {
               "productId": "64b950947c6705e61f87080b",
               "quantity": 1,
               "price": 50000,
               "_id": "64c27882e31f67a15158f09a"
            }
         ],
         "amount": 50000,
         "updatedAt": "2023-07-27T14:00:50.097Z",
         "createdAt": "2023-07-27T14:00:50.097Z",
         "__v": 0
      },
      {
         "payment": {
            "authority": "A00000000000000000000000000447834543",
            "code": 100,
            "state": "SUCCESS",
            "date": 1690552967672
         },
         "_id": "64c2790fe31f67a15158f0b7",
         "userId": "6432dcfb2b50736509f7180c",
         "list": [
            {
               "productId": "64b951c32e572138eab8d226",
               "quantity": 1,
               "price": 30000,
               "_id": "64c27904e31f67a15158f0ae"
            }
         ],
         "amount": 30000,
         "updatedAt": "2023-07-27T14:02:55.714Z",
         "createdAt": "2023-07-27T14:02:55.714Z",
         "__v": 0
      }
   ]
}
```

### Delete Order
To delete an order, send a `DELETE ` request to the following address. For example, if the `orderId` is *64c27892e31f67a15158f0a3*:

DELETE : `{{URL}}/api/admin/order/:orderId`

or

DELETE : `{{URL}}/api/admin/order/64c27892e31f67a15158f0a3`

Return Value:
```json
{
   "message": "the order successfuly deleted",
   "data": {
      "payment": {
         "authority": "A00000000000000000000000000447834209",
         "code": 100,
         "state": "SUCCESS",
         "date": 1690552842953
      },
      "_id": "64c27892e31f67a15158f0a3",
      "userId": "6432dcfb2b50736509f7180c",
      "list": [
         {
            "productId": "64b950947c6705e61f87080b",
            "quantity": 1,
            "price": 50000,
            "_id": "64c27882e31f67a15158f09a"
         }
      ],
      "amount": 50000,
      "updatedAt": "2023-07-27T14:00:50.097Z",
      "createdAt": "2023-07-27T14:00:50.097Z",
      "__v": 0
   }
}
```

### View All Available Shopping Carts
To view all available shopping carts, send a `GET` request to the following address:

GET: `{{URL}}/api/admin/cart`

Return Value:
```json
{
   "message": "the all carts",
   "data": [
      {
         "payment": {
            "state": "READY",
            "date": 1690467072107
         },
         "_id": "64c27b2cd9fba21e09275b7a",
         "userId": "6432dcfb2b50736509f7180c",
         "list": [
            {
               "productId": "64b951c32e572138eab8d226",
               "quantity": 1,
               "price": 30000,
               "_id": "64c27b2cd9fba21e09275b7b"
            },
            {
               "productId": "64b950947c6705e61f87080b",
               "quantity": 1,
               "price": 50000,
               "_id": "64c27b5bd9fba21e09275b84"
            }
         ],
         "amount": 80000,
         "updatedAt": "2023-07-27T14:12:43.197Z",
         "createdAt": "2023-07-27T14:11:56.082Z",
         "__v": 1
      }
   ]
}
```

### Add Location
To add a location, send a `POST` request including the country/state|province/city to the following address:

POST: `{{URL}}/api/admin/location/add`

| Field | Data Type | Description |
| :----- | :---------: | :------------ |
| type* | String | Country or province/state or city (all in UPPERCASE) |
| name | String | The name of the country or province/state or city|
| url | String | Link |
| parent | ObjectId | You must specify the parent value for province/state and city |
<br />

Request Example:
```json
{
   "type": "COUNTRY",
   "name": "Iran",
   "url": "iran"
}
```
Return Value:
```json
{
   "message": "Location added.",
   "data": {
      "name": "Iran",
      "url": "iran",
      "_id": "64ea3270316f9f571f408238",
      "updatedAt": "2023-08-26T17:12:16.769Z",
      "createdAt": "2023-08-26T17:12:16.769Z",
      "__v": 0
   }
}
```

### Update Location
To update a location, send a `PUT` request to the following address. For example, if the `locationId` is *64ea3330316f9f571f40823b*:

PUT: `{{URL}}/api/admin/location/update/:locationId`

or

PUT: `{{URL}}/api/admin/location/update/64ea3330316f9f571f40823b`

Request Example:
```json
{
   "type": "PROVESTATE",
   "name": "Tehran",
   "url": "tehran",
   "parent": "64ea34e7ed63fc37f380339a"
}
```
Return Value:
```json
{
   "message": "Location updated.",
   "data": {
      "_id": "64ea3330316f9f571f40823b",
      "name": "Tehran",
      "url": "tehran",
      "parent": "64ea34e7ed63fc37f380339a",
      "updatedAt": "2023-08-26T17:23:20.889Z",
      "createdAt": "2023-08-26T17:15:28.610Z",
      "__v": 0
   }
}
```

### View Contries List
To get a list of all countries, send a `GET` request including the country/state|province/city to the following address:

GET: `{{URL}}/api/admin/location/list`

Return Value:
```json
{
   "message": "Country found.",
   "data": [
      {
         "_id": "64ea3270316f9f571f408238",
         "name": "Iran",
         "url": "iran",
         "updatedAt": "2023-08-26T17:12:16.769Z",
         "createdAt": "2023-08-26T17:12:16.769Z",
         "__v": 0
      },
      {
         "_id": "64ea34e7ed63fc37f380339a",
         "name": "Canada",
         "url": "canada",
         "updatedAt": "2023-08-26T17:22:47.883Z",
         "createdAt": "2023-08-26T17:22:47.883Z",
         "__v": 0
      }
   ]
}
```

### View Location Details
To get the details of the provinces and cities of a location, send a `GET ` request to the following address. For example, if the `locationId` is *64ea34e7ed63fc37f380339a*:

GET : `{{URL}}/api/admin/location/update/:locationId`

or

GET : `{{URL}}/api/admin/location/update/64ea34e7ed63fc37f380339a`

Request Example:
```json
{
   "type": "COUNTRY"
}
```
Return Value:
```json
{
   "message": "Country found",
   "data": {
      "country": {
         "_id": "64ea34e7ed63fc37f380339a",
         "name": "Canada",
         "url": "canada",
         "updatedAt": "2023-08-26T17:22:47.883Z",
         "createdAt": "2023-08-26T17:22:47.883Z",
         "__v": 0
      },
      "provState": [
         {
            "_id": "64ea3330316f9f571f40823b",
            "name": "Tehran",
            "url": "tehran",
            "parent": "64ea34e7ed63fc37f380339a",
            "updatedAt": "2023-08-26T17:23:20.889Z",
            "createdAt": "2023-08-26T17:15:28.610Z",
            "__v": 0
         }
      ]
   }
}
```

### Delete Location
To delete a location, send a `DELETE ` request to the following address. For example, if the `locationId` is *64ea3270316f9f571f408238*:

DELETE : `{{URL}}/api/admin/location/update/:locationId`

or

DELETE : `{{URL}}/api/admin/location/update/64ea3270316f9f571f408238`

Request Example:
```json
{
   "type": "COUNTRY"
}
```
Return Value:
```json
{
   "message": "This location id: 64ea3270316f9f571f408238 deleted!",
   "data": {
      "_id": "64ea3270316f9f571f408238",
      "name": "Iran",
      "url": "iran",
      "updatedAt": "2023-08-26T17:12:16.769Z",
      "createdAt": "2023-08-26T17:12:16.769Z",
      "__v": 0
   }
}
```