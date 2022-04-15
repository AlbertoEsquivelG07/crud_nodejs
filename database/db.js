const mysql = require('mysql'); 

const conexion = mysql. createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'crud_nodejs_bd'
})

conexion. connect((error)=>{
    if (error) {
        console.log('El error de conexion es:'+error);
        return
    } 
    console.log('Conectado a la BD MYSQL!');
})

module.exports =conexion;