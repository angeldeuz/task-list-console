const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '1. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir  '
            },
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opcion '.green);
    console.log('=========================\n'.green);

    // aqui estoy haciendo una destructuracion del objeto que regresa el inquirer, que es opcion por mi objeto que defini llamado preguntas
    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'Enter'.green } para continuar`,
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}



module.exports = {
    inquirerMenu,
    pausa
}
