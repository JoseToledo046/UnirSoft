import React from "react";
import { Link } from "react-router-dom";

export const Usuario = ({ original_title, poster_path, id, videoLink}) => {
  return (
    <div className="usuario">
      <p className="usuario__texto">
        <b>ID:</b> {id}
      </p>
      <h3 className="usuario__texto">{original_title}</h3>

      <Link to={`/movie/${id}`}>
        <img src={poster_path} alt={original_title} className="usuario__img" />
      </Link>

      {videoLink && <a href={videoLink} target="_blank" rel="noopener noreferrer">Video de youtube</a>}


    </div>
  );
};
