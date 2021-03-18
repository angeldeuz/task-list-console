require('colors');
const { 
    inquirerMenu,
    pausa,
    leerInput
 } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    do {
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea( desc );
            break;
            case '2':
                console.log ( tareas._listado );
            break;
        }
        
        await pausa();
    } while( opt !== '0' );

    // pausa();
}

main();
 

