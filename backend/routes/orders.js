const express = require("express");
const authentication=require('../middleware/authentication')

const {createNewOrder,updateOrderById,getOrderById} = require("../controllers/orders");

const orderRouter = express.Router();

orderRouter.post('/',authentication,createNewOrder)
orderRouter.put('/',authentication,updateOrderById)
orderRouter.get('/:id',authentication,getOrderById)

module.exports = orderRouter;