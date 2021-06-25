import React from 'react';
import CrudTable from './CrudTable';

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {
    let {name,dorsal,id} = el;
    
    return (
        <tr>
            <td>{name}</td>
            <td>{dorsal}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
