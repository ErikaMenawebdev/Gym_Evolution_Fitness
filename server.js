require("dotenv").config();

const express = require(`express`);
const mongoose = require(`mongoose`);
const morgan = require(`morgan`);
const bodyParse = require(`body-parser`);
const cors = require("cors");

const clienteRouter = require("./routers/cliente");
const inscripcionRouter = require("./routers/inscripcion");
const planesRouter = require("./routers/planes");
const pagosRouter = require("./routers/pagos");
const usuariosRoutes = require("./routers/usuarios");
const dashboardRouter = require("./routers/dashboard");

const db = mongoose.connection;

mongoose.connect(process.env.MONGO_URI);

db.on(`error`, (err) => {
  console.log(`Error en la conexión a la base de datos`);
});

db.on(`open`, () => {
  console.log(`Conexión exitosa!!!`);
});

const app = express();

app.use(morgan(`dev`));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());

app.use("/cliente", clienteRouter);
app.use("/inscripcion", inscripcionRouter);
app.use("/planes", planesRouter);
app.use("/pagos", pagosRouter);
app.use("/usuarios", usuariosRoutes);
app.use("/dashboard", dashboardRouter);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ` + PORT);
});
