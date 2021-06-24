import React from 'react';
import CrudTable from './CrudTable';

const CrudTableRow = ({el}) => {
    return (
        <tr>
            <td>{el.name}</td>
            <td>{el.dorsal}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
