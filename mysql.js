const mysql = require('mysql')
//vamos a nuestro servidor y clickeamos cuentas de usuarios y damos clic en agregar cuenta de usuario
//le damos un nombre de usuario, el nombre del servidor que sea 'localhost' y una contraseña y le damos permisos a la base de datos
// y listo ya tenemos una base de datos con un usuario y contraseña conectada con javascript
const connection = mysql.createConnection({
    localhost: 'localhost',
    user: 'manolo',
    password: 'manolo',
    database: 'usuarios'
})

connection.connect((err) => {
    if (err) throw err
    console.log('La conexión a la base de datos se ha realizado correctamente')
})
//conexion de la base de datos con javascript
// 1) npm init -y
// 2)  node install mysql
// 3) npm install mysql 
// 4) node .\mysql.js   

connection.query('SELECT * FROM usuarios', (err, result) => {
    if (err) throw err
    console.log('Los datos de la tabla son: ', result) //result muestra los datos de la tabla sin esto no parece nada
    console.log('La cantidad de resultados es:', result.length)//result.length muestra la cantidad de resultados
    const usuarioUno = result[0] //para motrar el priner usuario siempre se pone un 0 ya que este lo cuenta como numero de inicio
    console.log('El primer usuario es: ', usuarioUno)
    const usuarioDos = result[1]
    console.log('El segundo usuario es: ', usuarioDos)
})
//en esta consulta insertamos en la tabla usuarios los datos que queramos por ejemplo el id, nombre, apellido y edad :D
connection.query('insert into usuarios (id , nombre, apellido, edad) values ("3","Manolo", "Perez", 25)', (err, result) => {
    if (err) throw err
    console.log('El usuario se ha insertado correctamente')
})