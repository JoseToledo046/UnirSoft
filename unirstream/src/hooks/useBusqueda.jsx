import { useEffect, useState } from "react";

export const useBusqueda = (nombreFilm) => {

    const [busqueda, setBusqueda] = useState(null);

    useEffect(() => {

        const url = "https://unirsoft-gateway-production.up.railway.app/buscador-service/api/peliculas?originalTitleValues=" + nombreFilm;
        
        const fetchRequest = async () => {
            let res = await fetch(url);
            let data = await res.json();
            let temp = data.peliculas;
            setBusqueda(temp);
        };

        fetchRequest(); 


    }, [1])

    return { busqueda }
}
