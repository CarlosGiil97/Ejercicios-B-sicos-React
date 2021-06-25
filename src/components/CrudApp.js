//he usado el atajo rafce para crear automaticamente el import y el const CrudApp
import React,{useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


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

//funcion que se encargará de insertar nueva info en la BD
const createData = (data) => {

}
//funcion que va a actualizar la info de la BD
const updateData = (data) => {

}

//funcion que va a eliminar info de la BD
const deleteData = (id) => {

}
const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);
    return (
        <>
            <h2>CRUD APP</h2>
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}/>

            <CrudTable 
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} 
            />
            
        </>
    )
}

export default CrudApp;
