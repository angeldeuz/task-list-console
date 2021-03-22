require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
 } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ) { // cargar Tareas
        tareas.cargarTareasFromArray( tareasDB );
    }

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
                // console.log ( tareas.listadoArr );
                tareas.listadoCompleto();
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
            case '5':// completado | pendiente 
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
            break;
            case '6':
                // importante colocar el await de funcion asyncronica, para que espere la respuesta
                const id = await listadoTareasBorrar( tareas.listadoArr );
                // TODO: preguntar si esta seguro
                if ( id !== '0' ) {
                    const ok = await confirmar('Esta seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada')
                    }
                }
            break;
        }

        guardarDB( tareas.listadoArr );
        
        await pausa();
    } while( opt !== '0' );

    // pausa();
}

main();
 

