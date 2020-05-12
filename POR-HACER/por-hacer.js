const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new error('No se puedo grabar', err);
    });

};

const cargarDB = () => {

    //  como estado en lado del servidor el lo serealiza y lo convierte de json a data normal    
    try {

        listadoPorHacer = require('../DB/data.json');

    } catch (error) {

        // si el archivo esta vacion retorna un arreglo
        listadoPorHacer = [];
    };
    console.log(listadoPorHacer);

};

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        // descripcion: descripcion        
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    };
};

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;

    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    };



};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

};