//he usado el atajo rafce para crear automaticamente el import y el const CrudApp
import React from 'react';
import CrudForm from './CrudForm';


//esto va a simular una base de datos , que en este caso va a ser un objeto
const initialDb = [
    {
        id:1,
        name:"Luis Suarez",
        dorsal:"9"
    },
    {
        id:2,
        name:"Antonio Puertas",
        dorsal:"10"
    },
    {
        id:3,
        name:"Maxime Gonalons",
        dorsal:"4"
    },
    {
        id:4,
        name:"Ruben Rochina",
        dorsal:"23"
    },
    {
        id:5,
        name:"Carlos Neva",
        dorsal:"15"
    }

    
]



const CrudApp = () => {
    return (
        <>
            <h2>CRUD APP</h2>
            <CrudForm />
            <table>
                    
            </table>

            
        </>
    )
}

export default CrudApp;
