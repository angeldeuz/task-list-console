const Tarea = require('./tarea');

class Tareas {

    _listado = {};

    // comvertirmos el objeto 'listado de tareas' en un arreglo para poder manejarlos mejor
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        // estamos creando una propiedad de un objecto uuid que tendra de parametro el objeto tarea
        this._listado[tarea.id] = tarea;
    }
}


module.exports = Tareas;