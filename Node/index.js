const app = require("./app/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`---------- Servidor ejecutandose en el puerto ${port}`);
});