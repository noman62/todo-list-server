import Product from "../models/product"

//Add Product
export const addProduct = async (req, res) => {
    try {

        // Save product in database
        const newProduct = new Product(req.body)
        await newProduct.save().then(product => {
            console.log('New product----->', product)
        })

        return res.json({ ok: true })
    } catch (err) {
        console.log(err)
        return res.status(400).send('Error. Try again.')
    }
}

//fetch all product from the database

export const allProduct = async (req, res) => {
    const all = await Product.find().exec()
    res.json(all)
}

//delete a single product
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

//update single product 
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = req.body;

        const existingProduct = await Product.findByIdAndUpdate(id, updatedProduct, {
            new: true,
        });

        if (!existingProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully', product: existingProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}



