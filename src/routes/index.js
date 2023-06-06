const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const orderRouter = require("./order");
const cartRouter = require("./cart");
const userRouter = require("./user");
const commentRouter = require("./comment");

const productRouter = require("./product");
const paymentRouter = require("./payment");

const adminRouter = require("./admin");

const { isLoggined, isAdmin } = require("./../middlewares/auth");
const error = require("./../middlewares/error");

router.use("/auth", authRouter);
router.use("/order", orderRouter);
router.use("/cart", cartRouter)
router.use("/product", productRouter) 
router.use("/payment", isLoggined, paymentRouter) 

router.use("/user", isLoggined, userRouter);
router.use("/comment", isLoggined, commentRouter);
router.use("/admin", isLoggined, isAdmin, adminRouter);

router.use(error);

module.exports = router;
