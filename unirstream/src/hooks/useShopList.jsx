import { useState, useEffect } from 'react';

export const useShopList = () => {
    const [filmShop, setFilmShop] = useState([]);

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const response = await fetch('https://unirsoft-gateway-production.up.railway.app/operador-service/api/transacciones/user?tuUserid=JTOLEDO');
                const data = await response.json();
                const filmData = await Promise.all(
                    data.map(async item => {
                        if (item.id.traFilm) {
                            const filmInfo = await fetchFilmInfo(item.id.traFilm);
                            console.log(filmInfo)
                            return {                                
                                ...filmInfo,
                            };
                        } else {
                            console.warn('Film ID is undefined for transaction:', item);
                            return null;
                        }
                    })
                );
                setFilmShop(filmData.filter(item => item !== null));
            } catch (error) {
                console.error('Error fetching shop data:', error);
            }
        };

        
        const fetchFilmInfo = async (id) => {
            try {
              const response = await fetch(`https://unirsoft-gateway-production.up.railway.app/buscador-service/api/peliculas?idFilm=${id}`);
                const data = await response.json();
                console.log(data)
                return data.peliculas[0];
            } catch (error) {
                console.error('Error fetching film info for ID:', id, error);
                return null;
            }
        };

        fetchShop();
    }, []);

    const addShop = (id, original_title, poster_path, video) => {
        const updatedShop = [...filmShop, { id, original_title, poster_path, video }];
        setFilmShop(updatedShop);
        // You might want to add the new item to the backend here
    };

    return { filmShop, addShop };
};

export default useShopList;