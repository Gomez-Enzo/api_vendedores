const express = require("express");
const app = express();
const routeVendedores = require("./routes/vendedores"); 

app.use(express.json());
app.use('/vendedores', routeVendedores);

const port = 3000;

app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`);
});