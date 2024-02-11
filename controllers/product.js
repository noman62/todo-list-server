import Product from "../models/product"

//Add Product
export const addProduct = async (req, res) => {
    console.log("noman", req.body);
    try {

        // Save product in database
        const newProduct = new Product(req.body)
        console.log('hi',newProduct);
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
    console.log(req.params, 'ki');
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

//get a single product
export const singleProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        Product.findById(productId, (err, product) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            res.json(product);
        });
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



// DELETE route for deleting multiple products
export const deleteMultipleProduct = async (req, res) => {
    try {
        const { productIds } = req.body;

        // Delete the products with IDs matching the productIds array
        await Product.deleteMany({ _id: { $in: productIds } });

        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};