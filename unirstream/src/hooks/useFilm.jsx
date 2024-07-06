import { useEffect, useState } from "react";

export const useFilm = (id) => {

    const [film, setFilm] = useState(null);

    useEffect(() => {
        const url = `https://unirsoft-gateway-production.up.railway.app/buscador-service/api/peliculas?idFilm=${id}`;

        const fetchRequest = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                const temp = data.peliculas;
                setFilm(temp[0]);
            } catch (error) {
                console.error('Error fetching film data:', error);
            }
        };

        if (id) {
            fetchRequest();
        }
    }, [id]);

    return { film };
}
