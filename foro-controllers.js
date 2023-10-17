
const {TDC } = require ('../models/mod-foro');

const getallforos = async (req, res) => { 
    try{ 
      const allforos = await TDC.findAll();
      res.render("index", { allforos:allforos});
   } catch (error) {
    console.error(error);
    res.render('error', { error: 'Hubo un error al obtener los foros.' });
  }
};
    

const createforo= async (req, res )=>{ 
   const { title, FC, URLI, autor,  content } = req.body;
   try { 
   await TDC.create ( {
     title, 
     FC, 
     URLI,
     autor,
     content
    });
   res.render ("/new-foro");

   } catch (error) {
    console.error(error);
    res.render('createforo', { error: 'Hubo un error al crear el foro.' });
  }
};

const formeditarforo= async  (req, res ) =>{
    const foroid= req.params.id;
   
    try {
        const foro = await TDC.findByPk(foroid); // Encuentra el foro por su ID
    
        if (!foro) {
          return res.render('error', { error: 'Foro no encontrado.' });
        }
    
        // Renderiza la vista 'editarForo.ejs' y pasa el foro como datos
        res.render('editarForo', { foro});
      } catch (error) {
        console.error(error);
        res.render('error', { error: 'Hubo un error al cargar el formulario de edición.' });
      }
    };

const editarForo = async (req, res) => {
    const { id } = req.params;
    const { title,  FC,  URLI,  autor, content } = req.body;
  
    try {
      const foro = await TDC.findByPk(id); // Encuentra el foro por su ID
  
      if (!foro) {
        return res.render('error', { error: 'Foro no encontrado.' });
      }
  
      // Actualiza los datos del foro con los nuevos valores
      foro.title = title;
      foro.FC = FC;
      foro.URLI = URLI;
      foro.autor = autor;
      foro.content = content;
  
      await foro.save(); // Guarda los cambios en la base de datos
  
      res.redirect('/foros'); // Redirige a la lista de foros después de la edición
    } catch (error) {
      console.error(error);
      res.render('error', { error: 'Hubo un error al editar el foro.' });
    }
  };

const deleteforo= async (req, res )=>{ 
    const foroid = req.params.id;

    try {
        const foro = await TDC.findByPk(foroid); // Encuentra el foro por su ID
    
        if (!foro) {
          return res.render('error', { error: 'Foro no encontrado.' });
        }
    
        await foro.destroy(); // Elimina el foro de la base de datos
    
        res.redirect('/foros'); // Redirige a la lista de foros después de la eliminación
      } catch (error) {
        console.error(error);
        res.render('error', { error: 'Hubo un error al eliminar el foro.' });
      }
   
};
/* 
 titulo descriptivo del contenido = TDC
 fecha de creacion = FC 
 URL de imagen relevante = URLI
*/
module.exports = {
    getallforos: getallforos,
    formeditarforo: formeditarforo,
    createforo: createforo,
    editarForo:editarForo,
    deleteforo: deleteforo
  };
  