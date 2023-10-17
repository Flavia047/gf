const {Router}= require ('express')
const {
getallforos,
 createforo,
 formeditarforo,
 editarForo,
 deleteforo,
}= require ('../src/controllers/foro-controllers');

const router = Router ();

router.get ('/Los-foros', getallforos);
router.get ("foros/editar/:id", formeditarforo);
router.get ("/delete/:id", deleteforo);

router.post ('/createforo', createforo );
router.post("foros/editar/:id", editarForo);

module.exports = router; 