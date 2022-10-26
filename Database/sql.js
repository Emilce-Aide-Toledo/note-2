//SQL - Structured Query Language; en español "lenguaje de consulta estructurada"
//es un lenguaje de dominio específico, diseñado para administrar, y recuperar información 
//de sistemas de gestión de bases de datos relacionales.(Las bases de datos permiten almacenar y relacionar datos que luego convertimos en información)

// id - importante saber la diferencia entre llave PRIMARY (Primaria) y FOREIGN (Foranea);
const primaryKey = 'PRIMARY KEY - PK';
const foreignKey = 'FOREIGN KEY -FK';

// Crear Base de Datos. Ej: tienda online
 const crearDB = `CREATE DATABASE tienda_online`;

 //Tipos de Datos: Numéricos: INT, TINYINT, BIGINT, FLOAT; String: VARCHAR, TEXT, CHAR; 
 //Fecha y Hora: DATE, DATETIME, TIME, TIMESTAMP; 
 
 //Crear Tabla. Ej productos
 const crearTabla = `CREATE TABLE productos(
    id_product INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    image VARCHAR(300), 
    price INT NOT NULL,
    description TEXT,
    quantity INT NOT NULL DEFAULT 1
    PRIMARY KEY(id_product)
    );`;

// Ver todas las bases de datos
const mostrarDbs = `SHOW databases;`;

//Ver Tabla. Ej productos
const motrarTabla = `DESCRIBE productos;`;

//Insertar Registro en tabla de datos. Ej productos
const insertarRegistro = `INSERT INTO productos(name, image, price)
                           VALUES ('Pantalón Shampi', 'url_imagen.extension', '110');
                           `;

// Seleccionar todo de la tabla. Ej productos
const seleccionarTodo = `SELECT * FROM productos;`;

//Seleccionar algunas columnas de la tabla
const seleccionarAlgunas = `SELECT name, price FROM  productos;`;

//Selecionar utilizando WHERE. Ej por id (filtrando)
const seleccionWhere = `SELECT * FROM productos WHERE id_product=1;`;

//Seleccionar utilizando LIMIT. Ej uno (fltrar utilizando limites)
const seleccionarLimit = `SELECT * FROM productos LIMIT 1;`;

//Seleccionar utilizando ORDER BY (ordenar). Ej una tabla de reservaciones
const seleccionarOrder = `SELECT * FROM reservaciones ORDER BY fecha DESC; `;

const seleccionarOrderBy = `SELECT * FROM platillos ORDER BY precio;`;

//Contar cuantos reservaciones tiene por fecha (filtrar, contar, ordenar)
const selectGroupBy = `SELECT COUNT(id), fecha FROM reservaciones
                       GROUP BY fecha
                       ORDER BY COUNT(id) DESC;`
//Con SELECT se pueden utilizar diferentes formas, ejemplo, utilizando
// WHERE...AND
// WHERE...OR
// WHERE... < (operador de comparación)
// WHERE... BETWEEN...AND

//SELECT y Notacion de puntos
const select = `SELECT * FROM restaurant.category;`;

//Utilizar LIKE. Ej todos los que comiencen con la palabra polo
const selectLike = `SELECT * FROM productos
                    WHERE name
                    LIKE 'polo%';`;
                    
//Utilizar LIKE. Ej todos los que contengan la palabra polo
const selecionarLike = `SELECT * FROM productos
                        WHERE name
                        LIKE '%polo%';`;

//Utilizar SELECT y LIKE de manera mas especifica. Ej reservaciones
const  selLike = `SELECT * FROM reservaciones
                  WHERE CONCAT(nombre, ' ', aellido)
                  AS 'Nombre Completo'
                  LIKE '%Maria Delgado';
                  `;

// Actualizar dato
const actualizarDato = `UPDATE productos SET name = 'Pantalón Francis', price = '115'
                        WHERE id=1;`; 

//Eliminar. Prestar Atención: "No eliminar toda la base de dato".
const eliminar =  `DELETE FROM productos WHERE id=1;`;
                        
//Alterar tabla, agregar columna.
const alterarAgregar = `ALTER TABLE productos ADD descuesto INT;`;

//Alterar tabla, eliminar columna.
const alterarEliminar = `ALTER TABLE productos DRP COLUMN description;`;
