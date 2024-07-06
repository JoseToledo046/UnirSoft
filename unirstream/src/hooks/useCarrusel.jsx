import { useEffect, useState } from "react";

export const useCarrusel = () => {

    const [carrusel, setCarrusel] = useState(null);

    useEffect(() => {

        const fetchRequest = async () => {
            let pageNum = Math.floor(Math.random() * (9) + 1);
            let urlServ = 'https://unirsoft-gateway-production.up.railway.app/buscador-service/api/peliculas?voteAverage=8-10&page=' + pageNum;
            let res = await fetch(urlServ);
            let data = await res.json();
            let temp = data.peliculas;
            setCarrusel(temp);
        };

        fetchRequest(); 


    }, [1])

    return { carrusel }
}
