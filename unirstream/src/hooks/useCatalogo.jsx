import { useEffect, useState } from "react";

export const useCatalogo = () => {

    const [catalogos, setCatalogos] = useState(null);

    useEffect(() => {

        const fetchRequest = async () => {
            let urlServ = 'https://unirsoft-gateway-production.up.railway.app/buscador-service/api/peliculas'
            let res = await fetch(urlServ);
            let data = await res.json();
            let temp = data.peliculas;
            setCatalogos(temp);
        };

        fetchRequest(); 


    }, [1])

    return { catalogos }
}
