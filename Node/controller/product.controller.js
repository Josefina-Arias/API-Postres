const router = require("express").Router();

const Products = require('../model/product.model');

// Obtener todos los productos
router.get('/products', async(req, res) =>{
   
    const products = await Products.findAll();
    res.status(201).json({
        ok: true,
        status: '200',
        body: products
    });
});

// Obtener un producto
router.get('/product/:codigo', async (req, res) =>{
        const codigo = req.params.codigo;
        const product = await Products.findOne({
            where: {
                codigo: codigo
            }
        });
        res.status(201).json({
            ok: true,
            status: '200',
            body: product
        });
});

// Insertar un producto
router.post('/product', async (req, res) =>{
    const dataProducts = req.body;
    await Products.sync();
    const createProduct  = await Products.create({
        codigo: dataProducts.codigo,
        nombre: dataProducts.nombre,
        sabor: dataProducts.sabor,
        tamano: dataProducts.tamano,
        adicional: dataProducts.adicional,
        precio: dataProducts.precio,
    });

    res.status(201).json({
        ok: true,
        status: '201',
        message: 'Created Product'
    });

});

// Actualizar un producto
router.put('/product/:codigo', async(req, res) =>{
    const codigo = req.params.codigo;
    const dataProducts = req.body;
    const updateProduct = await Products.update({
        nombre: dataProducts.nombre,
        sabor: dataProducts.sabor,
        tamano: dataProducts.tamano,
        adicional: dataProducts.adicional,
        precio: dataProducts.precio,
    }, {
        where: {
            codigo: codigo
        }
    });

    res.status(201).json({
        ok: true,
        status: '201',
        body: updateProduct
    });
});

// Eliminar un producto
router.delete('/product/:codigo', async(req, res) =>{
    const codigo = req.params.codigo;
    const deleteProduct = await Products.destroy({
        where: {
            codigo: codigo
        }
    });

    res.status(201).json({
        ok: true,
        status: '204',
        body: deleteProduct
    });
    
});

module.exports = router;