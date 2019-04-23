const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();
        console.table(listado);
        // for (let tarea of listado) {
        //     console.log('=====POR HACER======'.green);
        //     console.log(tarea.descripcion);
        //     console.log(`Estado: ${tarea.completado}`);
        //     console.log('===================='.green);
        // }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no es reconocido');
        break;
}