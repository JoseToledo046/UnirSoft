import {useRef, useState,useEffect} from "react";
import '../styles/Carousel.css';
/*import {Carrusel} from "../components/Carrusel";
import {useCarrusel} from "../hooks/useCarrusel";*/


export const CarruselList = ({images, interval = 5000}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(intervalId);
    }, [images, interval]);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button className="carousel__button" onClick={prevSlide}>
                Anterior
            </button>
            <img
                className="carousel__image"
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
            />
            <button className="carousel__button" onClick={nextSlide}>
                Siguiente
            </button>
        </div>
    );

}
