import { useState } from 'react';

export const useShop = () => {
    const [filmShop, setfilmShop] = useState(() => {
        const storedShop = sessionStorage.getItem('filmShop');
        return storedShop ? JSON.parse(storedShop) : [];
    });

    const handleConfirmCancel = (id, original_title, poster_path) => {
        if (window.confirm("¿Estás seguro de que deseas proceder?")) {
            const peliculaRenta = {
                "userId": "JTOLEDO",
                "movieIds": [parseInt(id)], // [id],
                "type": "V",
                "traFecfin": "2025-07-07"
            }         
            alert("Has confirmado la acción.");    
            console.log(peliculaRenta)
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
                    alert("Se ha comprado la película con exito");
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        } else {
          alert("Has cancelado la acción.");
        }
      };


    const addShop = (id, original_title, poster_path) => {
        // console.log(id)
        handleConfirmCancel(id, original_title, poster_path);

        // const updatedShop = [...filmShop, { id, original_title, poster_path }];
        // setfilmShop(updatedShop);
        // sessionStorage.setItem('filmShop', JSON.stringify(updatedShop));
    };

    return { filmShop, addShop };
};

export default useShop;