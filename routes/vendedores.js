const express = require("express");
const router = express.Router();
const vendedor = require("../models/vendedor");

//obtener vendedores
router.get("/", async (req, res) => {
    try {
        const vendedores = await vendedor.find();
        res.json(vendedores);
    } catch (error) {
        res.status(500).json({error:"Error al obtener los vendedores"});
    }
});


//agregar un nuevo vendedor
router.post("/", async (req, res) => {
    try {
        const nuevoVendedor = new vendedor(req.body);
        await nuevoVendedor.save();
        res.json(nuevoVendedor);
    } catch (error) {
        res.status(500).json({error: "Error al crear el vendedor"});
    }
});

//actualizar vendedor
router.put("/:id", async (req, res) => {
    try {
        const vendedorUpdate = await vendedor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(vendedorUpdate);
    } catch (error) {
        res.status(500).json({error: "Error al actualizar el vendedor"});
    }
});

//borrar vendedor
router.delete("/:id", async (req, res) => {
    try {
        await vendedor.findByIdAndDelete(req.params.id);
        res.json({message: "Vendedor eliminado correctamente"});
    } catch (error) {
        res.status(500).json({error: "Error al eliminar el vendedor"});
    }
});


module.exports = router;