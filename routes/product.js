import express from 'express'
const router = express.Router()
const checkLogin = require("../middleware/checkLogin")

// controllers
import { addProduct, allProduct, deleteProduct, updateProduct } from '../controllers/product'

// Routes
router.post('/addProduct', addProduct)
router.get('/allProduct',checkLogin, allProduct)
router.delete('/delete/:id', deleteProduct)
router.put('/update/:id', updateProduct)
module.exports = router
