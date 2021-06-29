export const helpHttp = () => {
    //no se le pone el eport default porque no se le va a cambiar el nombre cuando se importe en otro fichero
    //el endpoint es la ruta donde queremos hacer la petición
    const customFetch = (endpoint,options) => {
        const defaultHeader = {
            accept:"application/json",
        };

        const controller = new AbortController();
        //añadir la propiedad controller-> manejador de errores para cuando el endpoint no responde
        options.signal = controller.signal;
        //comprobar el estado que tiene la propiedad method
        options.method = options.method || "GET";

        //si el usuario manda cabeceras, se añaden las defaultheaders .En caso contrario, que ponga las defaultHeaders
        options.headers = options.headers ? {...defaultHeader,...options.headers} : defaultHeader
    
        //el cuerpo hay que convertirlo a cadena cuando el usuario mande datos
        options.body = JSON.stringify(options.body) || false;

        //si el options body viene vacio se elimina , ya que no se puede enviar vacio al hacer peticiones
        if(!options.body) delete options.body;

        console.log(options)

        //si en 3 segundos el servidor no ha respondido
        setTimeout(() => controller.abort(),3000);

        

        return fetch(endpoint,options).then(res=> 
            res.ok 
            ? res.json()
            :Promise.reject({
                err:true,
                status:res.status || "00",
                statusText:res.statusText || "Ocurrió un error"
            })
        ).catch(err=>err)
    }

    //CONSULTA A LA BBDD
    const get = (url,options = {}) => customFetch(url,options);

    //INSERT A LA BBDD
    const post  = (url,options = {}) => {
        options.method = "POST";
        return customFetch(url,options);
    }

    //UPDATE A LA BBDD
    const put  = (url,options = {}) => {
        options.method = "PUT";
        return customFetch(url,options);
    }

    //DELETE A LA BBDD
    const del  = (url,options = {}) => {
        options.method = "DELETE";
        return customFetch(url,options);
    }

    return{
        get,post,put,del
    }

}