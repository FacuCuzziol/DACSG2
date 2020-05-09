const express = require('express');
const router = express.Router();
const peticionController = require('../controllers/peticionControllers');
const loginController = require('../controllers/loginController')

router.get('/',(req,res)=>{
    console.log("Hola,probando");
    res.json({message:"mensaje escrito en consola"});
});


router.post('/pruebas',(req,res)=>{
    console.log(req.body);
    
    res.send(req.body);
})

router.post('/peticiones',
    peticionController.nuevaPeticion
)

router.get('/peticiones',
    peticionController.obtenerPeticiones
)

router.post('/login',
loginController.logUser
)

router.post('/register',
loginController.registerUser
)


module.exports = router;