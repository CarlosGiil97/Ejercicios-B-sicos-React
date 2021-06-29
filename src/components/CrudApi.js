//he usado el atajo rafce para crear automaticamente el import y el const CrudApi
import React,{useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';




const CrudApi = () => {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

        //funcion que se encargará de insertar nueva info en la BD
    const createData = (data) => {
            //manera de generar un ID para el componente único
            data.id = Date.now();
            setDb([...db,data]);
            
    }
//funcion que va a actualizar la info de la BD
const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
}

//funcion que va a eliminar info de la BD
const deleteData = (id) => {
    let isDelete = window.confirm (`¿Estas seguro de eliminar el registro con el id '${id}'?`)
    console.log(isDelete);
   
    if(isDelete){
        console.log('DB ANTIGUA:')
        console.log(db);
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
        console.log('DB NUEVA:')
        console.log(db);
    }
}
    return (
        <>
            <h2>CRUD APP</h2>
            <article className="grid-1-2">
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
            </article>
            
        </>
    )
}

export default CrudApi;
