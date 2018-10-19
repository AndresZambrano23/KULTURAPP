const mysql= require('mysql');
conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'shc_kul'
});

let usermodel= {}; //se realiza para atar a un modelo
usermodel.getusuario = (callback) => {
    // => a la flecha se le llama predicado
    if(conn){
        conn.query('SELECT * FROM  usuariopr ORDER BY id',
            (error, rows) => {
                if(error){
                    throw error;
                }
                else{
                    callback(null, rows);
                }
            }
        )   
    }
};

usermodel.insertarUser=(userData,callback) => {
    if(conn){
        conn.query('INSERT INTO usuariopr SET ?', userData,
        (error, result) => {
            if(error){
                throw error;
            }
            else{
                callback(null,{
                    'insertId':result.insertId
                })
            }
        }
        )
    }
}
module.exports = usermodel;