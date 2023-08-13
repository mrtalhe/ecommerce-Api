const express = require('express');
const router = express.Router();
const controller = require('./controller');
const userRouter = require("./user")
const productRouter = require("./product")
const cartRouter = require("./cart")
const orderRouter = require("./order")
const categoryRouter = require("./category")
const fileRouter = require("./file")
const commentRouter = require("./comment")
const locationRouter = require("./location")

router.get(
  '/',
  controller.dashboard
);
router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/cart", cartRouter)
router.use("/order", orderRouter)
router.use("/category", categoryRouter)
router.use("/file", fileRouter)
router.use("/comment", commentRouter)
router.use("/location", locationRouter)





module.exports = router;