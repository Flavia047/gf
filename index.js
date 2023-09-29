const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const { sequelize }= require('./database');
require ("./src/models/mod-foro");
const app = express ();

//midlewares
app.use (morgan ('dev'));
app.use (cors ());
app.use ( express.json ());
app.use (express.urlencoded ({extended: false}))
 
app.set ('views', __dirname + "/src/views")
app.use (express.static ("public"));

app.set ('view engine', 'ejs');


//routes 
app.use ('/foro', require ('./routes/foro.routes'))

const foro = [
  {titulo: "titulo1", contenido: "CONT del primer foro" },
  {titulo: "titulo2", contenido: "CONT del segundo foro"}
];
 
app.get ("/", (req, res ) => { 
    
    res.render ("index");
});

app.get ('/Los.foros', ( req, res) => {

   res.render ("Los.foros", { titulo:"Foro principal", foro });
});

app.listen(4001, () => {
  sequelize.sync( {force: false})
   .then  (() => {
     console.log ( "data base esta conectada")})
    .catch (err => console.log (err))
  
  
      console.log('Servidor en ejecución en el puerto 4001');
    
  });
  