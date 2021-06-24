import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data}) => {
    return (
        <div>
           <h3>Tabla de datos</h3> 
           <table>
               <thead>
                   <tr>
                       <th>Nombre</th>
                       <th>Dorsal</th>
                       <th>Acciones</th>
                   </tr>
               </thead>
               <tbody>
                   {data.length === 0 ? <tr><td colSpan="3">No hay datos que mostrar</td></tr> :
                   data.map((hola) => <CrudTableRow key={hola.id} el={hola} />)}
               </tbody>
           </table>
        </div>
    )
}

export default CrudTable
