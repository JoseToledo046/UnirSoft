import { useState } from 'react';

export const useShop = () => {
    const [filmShop, setfilmShop] = useState(() => {
        const storedShop = sessionStorage.getItem('filmShop');
        return storedShop ? JSON.parse(storedShop) : [];
    });

    const addShop = (id, original_title, poster_path) => {
        const updatedShop = [...filmShop, { id, original_title, poster_path }];
        setfilmShop(updatedShop);
        sessionStorage.setItem('filmShop', JSON.stringify(updatedShop));
    };

    return { filmShop, addShop };
};

export default useShop;