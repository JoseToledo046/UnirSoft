import { useEffect, useState } from "react";

export const useFilm = (id) => {

    const [film, setFilm] = useState(null);

    useEffect(() => {

        const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=2fb2d38addc4c92105c4f9ad0a4efe66&language=es-ES";

        const fetchRequest = async () => {
            let res = await fetch(url);
            let data = await res.json();
            let temp = data;
            setFilm(temp);
        };

        fetchRequest(); 


    }, [id])

    return { film }
}
