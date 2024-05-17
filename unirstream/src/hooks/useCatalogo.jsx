import { useEffect, useState } from "react";

export const useCatalogo = () => {

    const [catalogos, setCatalogos] = useState(null);

    useEffect(() => {

        const fetchRequest = async () => {
            let res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=2fb2d38addc4c92105c4f9ad0a4efe66&language=es-ES");
            let data = await res.json();
            let temp = data.results;
            setCatalogos(temp);
        };

        fetchRequest(); 


    }, [1])

    return { catalogos }
}
