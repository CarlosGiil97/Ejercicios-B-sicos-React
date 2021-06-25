import React,{useState,useEffect} from 'react'


//se declaran como arrancan los values del form
const initialForm = {
    name:"",
    dorsal:"",
    id:null,
}

const CrudForm = () => {

    const [form, setForm] = useState({initialForm});
    //los 3 eventos necesasrios para el formulario
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.dorsal){
            alert("Datos incompletos");
            return;
        }
    }

    const handleReset = (e) => {

    }

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange}/>
                <input type="text" name="dorsal" placeholder="Dorsal" value={form.dorsal} onChange={handleChange}/>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm
