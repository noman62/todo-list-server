import express from 'express'
const router = express.Router()


// controllers
import { addProduct, allProduct, deleteMultipleProduct, deleteProduct, singleProduct, updateProduct } from '../controllers/product'

// Routes
router.post('/addProduct', addProduct)
router.get('/allProduct', allProduct)
router.delete('/delete/:id', deleteProduct)
router.put('/update/:id', updateProduct)
router.get('/product/:id', singleProduct)
router.post('/deleteProducts', deleteMultipleProduct); 

module.exports = router
