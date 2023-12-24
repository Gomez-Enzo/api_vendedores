const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empresa", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const vendedorSchema = new mongoose.Schema({
    nombre: String,
    producto: String,
    email: String,
},{collection: 'vendedores'});

const vendedor = mongoose.model('vendedor',vendedorSchema);

module.exports = vendedor;