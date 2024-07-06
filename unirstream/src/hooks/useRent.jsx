import { useState } from 'react';

export const useRent = () => {
    console.log("jgsjdh")

    const [filmRent, setFilmRent] = useState(() => {
        const storedRent = sessionStorage.getItem('filmRent');
        return storedRent ? JSON.parse(storedRent) : [];
    });


    const handleConfirmCancel = (id, original_title, poster_path) => {
        if (window.confirm("¿Estás seguro de que deseas RENTAR la pelicula?")) {
            const peliculaRenta = {
                "userId": "JTOLEDO",
                "movieIds": [parseInt(id)], // [id],
                "type": "R",
                "traFecfin": "2025-07-07"
            }         
            fetch('https://unirsoft-gateway-production.up.railway.app/operador-service/api/transacciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(peliculaRenta),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    data.status == 201 ? alert("Se ha RENTADO la pelicula con exito") : alert("lA PELICULA YA FUE RENTADA");
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        } else {
          alert("Has cancelado la acción");
        }
      };

    const addRent = (id, original_title, poster_path) => {
        handleConfirmCancel(id, original_title, poster_path);
        // const updatedRent = [...filmRent, { id, original_title, poster_path }];
        // setFilmRent(updatedRent);
        // console.log(updatedRent)
        //sessionStorage.setItem('filmRent', JSON.stringify(updatedRent));
    };

    return { filmRent, addRent };
};

export default useRent;

