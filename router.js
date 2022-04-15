const express =require('express')
const router =express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud')
router.get('/',(req,res)=>{
    //res.render('index',{var1:'esto es una variable'});
    conexion.query('select* from users',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{results:results});
        }
    })
    //res.send('Contacto');
})
// ruta para crear los registros
router.get('/create',(req,res)=>{
    res.render('create');
})
router.post('/save',crud.save);
// Ruta para editar registros
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id],(error,results)=> {
        if(error){
            throw error;
        }else{
            res.render('edit',{user:results[0]});
        }
    })
});
// ruta para actualizar el registro 
router.post('/update',crud.update);
// ruta par aeliminar el registro
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id],(error, results)=>{
        if(error){
            Console.log(error);
        }else{
            res.redirect('/');
        }
    });
})
module.exports = router;