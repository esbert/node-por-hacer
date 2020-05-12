//const argv = require('yargs').argv
const argv = require('./CONFIG/yargs.js').argv
const porHacer = require('./POR-HACER/por-hacer');
const colors = require('colors');

console.log(argv);
let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'crear':
        //node app crear -d "Pasear al perro "
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        //node app listar      
        let listado = porHacer.getListado();
        console.log('Mostrar tods las tareas por hacer');
        //node app crear -d "Bañarse"      
        for (let tarea = 0; tarea < listado.length; tarea++) {
            console.log('=======Por Hacer ============'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================='.green);

        }
        break;
    case 'actualizar':
        //node app actualizar -d "Pasear al perro "
        //node app actualizar -d "Comer" -c true
        console.log('cActualizar una tarea por hacer');
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        //node app borrar -d "Bañarse"
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no es reconocido.');

};


//node app crear -d "Pasear al perro"