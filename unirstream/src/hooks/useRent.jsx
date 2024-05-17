import { useState } from 'react';

export const useRent = () => {
    const [filmRent, setFilmRent] = useState(() => {
        const storedRent = sessionStorage.getItem('filmRent');
        return storedRent ? JSON.parse(storedRent) : [];
    });

    const addRent = (id, original_title, poster_path) => {
        const updatedRent = [...filmRent, { id, original_title, poster_path }];
        setFilmRent(updatedRent);
        sessionStorage.setItem('filmRent', JSON.stringify(updatedRent));
    };

    return { filmRent, addRent };
};

export default useRent;