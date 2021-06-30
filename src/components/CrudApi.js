//he usado el atajo rafce para crear automaticamente el import y el const CrudApi
import React,{useState,useEffect} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';





const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    
    let api=helpHttp();
    let url ="http://localhost:5000/futbol";

    //USEeFFECT PARA LA PRIMERA CARGA DE DATOS
    useEffect(() => {
        setLoading(true);
        api.get(url).then((res) => {
          
        if(!res.err){
            setDb(res);
            setError(null);
        } else{
            setDb(null);
            setError(res);
        }
        setLoading(false);
        console.log(res);
      });
      
    }, [url]);

    

        //funcion que se encargará de insertar nueva info en la BD
    const createData = (data) => {
            //manera de generar un ID para el componente único
            data.id = Date.now();

            //con esta linea de codigo hace el insert en el objeto con el método POST
            api.post(url,{body:data, headers:{"content-type":"application/json"}}).then((res) => {
                console.log(res);
                if(!res.err){
                    setDb([...db,res]);
                }else{
                    setError(res);
                }
            });
            
            
            
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
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
    }
}
    return (
        <>
            <h2>CRUD API</h2>
            <article className="grid-1-2">
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit}/>

            {/* si existe la variable Loading , carga el componente Loader */}
            {loading && <Loader />}
            {/* si existe error muestra componente mensaje */}
            {error && <Message msg={
                `Error: ${error.status} : ${error.statusText}`
                
            } bgColor="#dc3545" />}

            {db && <CrudTable 
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData} 
            />}
            
            {/* <Loader /><Message /> */}
            </article>
            
        </>
    )
}

export default CrudApi;
