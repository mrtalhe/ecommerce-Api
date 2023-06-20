You can use the Ecommerce API script to set up an online store with Nodejs. The Ecommerce API script is written in JavaScript language and Node.js - Mongodb - Mongoose - Express.js and other languages ​​and tools are used in it.


 
<! Authentication system  >


- Registration and login of users

- Authentication of users by JsonWebToken

- Encrypting users' passwords

- Protected path for website administrator

// Users' shopping carts

- Add product to cart

- Update shopping cart

- Remove the shopping cart

- View shopping cart

// User order

- Make an order

- order update

- Receive user orders

// products

- View all products

- View product  single


<! Features of the main manager >


// User management

- Add user

- User update

- Delete user

- View all users

- Changing the normal user to the administrator user by the main administrator of the site

// Product management

- Add product

- Product update

- Remove the product

- View all products

- View a single product

// Manage categories

- Ability to add main category and subcategory

- Category update

- Remove category

- View all categories

// Cart

- View All Carts

// Order

- Make an order

- order update

- Remove order

- View all orders

// Files

- Add File

- Update File

- Delete File

- List Files

- viewFile

// Comments

- getAllComments

- delete Comment

- submit Comment

// online payment

After adding the product to the shopping cart, the ability to pay online is activated and by paying and confirming the transaction, the purchase is made and the user's shopping cart is transferred to the user's order list.

- Payment with online payment portal

- Check payment done





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
