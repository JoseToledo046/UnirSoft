import React, { useEffect } from "react";
export const SearchFilter = () => {
  const URL = "https://unir-buscador.onrender.com/facets?originalTitleValues=Pirates of the Caribbean&voteAverage=7-&voteCount=20000-";
  const [resultados, setResultados] = React.useState([]);

  useEffect(() => {
    fetchPeliculas();
  }, []);

  const fetchPeliculas = async (voteAverage) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const results = data.results;
      console.log(results);
      setResultados(data.employees);
    } catch (error) {
      console.log(error);
      console.error("Error fetching data:", error);
    }
  };

  const Filtros = () => {
    const handleVoteAvarage = (e) => {
      console.log(e)
      fetchPeliculas();
    };
    return (
      <>
        <p>agg</p>
        <div>
          <p>voteAverageValues</p>
          <span onClick={handleVoteAvarage("-5")}>0 - 5</span>
          <span onClick={handleVoteAvarage("5-10")}>5 - 10</span>
          <span onClick={handleVoteAvarage("10-")}>+10</span>
          
      
        </div>
        {/* <p>{JSON.stringify(resultados.aggs)}</p> */}
      </>
    );
  };

  const Resultados = () => {
    return (
      <>
        <div className="resultados">
          {/* <p>{JSON.stringify(resultados[0])}</p> */}

          {/* <p>Películas</p> */}
          <section className="lista-peliculas">
            {resultados.map(
              (
                employee // Usamos paréntesis para devolver JSX dentro de la función de mapeo
              ) => (
                <div key={employee.id} className="item-pelicula">
                  <img src={employee.PosterPath} alt={employee.title} />
                  <p className="titulo-pelicula">{employee.title}</p>
                  <p>Idioma: {employee.originalLanguage}</p>
                  <p>Tiempo: {employee.runTime}</p>
                  <p>Descripción: {employee.tagLine}</p>
                </div>
              )
            )}
          </section>
        </div>
      </>
    );
  };

  return (
    <section className="filtros">
      <Filtros />

      <Resultados />
    </section>
  );
};

export const data = {
  employees: [
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "sXTJZJABhbHMfDY10eQU",
      title: "La guerra de las galaxias",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/ahT4ObS7XKedQkOSpGr1wQ97aKA.jpg",
      budget: 1.1e7,
      originalLanguage: "en",
      originalTitle: "Star Wars",
      popularity: 230.01,
      releaseDate: "1977-05-25",
      revenue: 7.75398007e8,
      runTime: "121",
      tagLine: "Hace mucho tiempo, en una galaxia muy lejana...",
      voteAverage: 8.2,
      voteCount: 20157.0,
      overview:
        'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del emperador. El intrépido Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial "El Halcón Milenario", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la Galaxia.',
      Genero: "Acción - Aventura - Ciencia ficción",
      Video: "https://www.youtube.com/watch?v=CNfIQVplY9U",
    },
    {
      id: "snTJZJABhbHMfDY10eQU",
      title: "Buscando a Nemo",
      budget: 9.4e7,
      originalLanguage: "en",
      originalTitle: "Finding Nemo",
      popularity: 133.96,
      releaseDate: "2003-05-30",
      revenue: 9.40335536e8,
      runTime: "101",
      tagLine: "Hay 3,7 billones de peces en el océano, están buscando uno.",
      voteAverage: 7.82,
      voteCount: 18845.0,
      overview:
        "Nemo, un pececillo, hijo único muy querido y protegido por su padre, ha sido capturado en un arrecife australiano y ahora vive en una pecera en la oficina de un dentista de Sidney. El tímido padre de Nemo se embarcará en una peligrosa aventura para rescatar a su hijo. Pero Nemo y sus nuevos amigos tienen también un astuto plan para escapar de la pecera y volver al mar.",
    },
    {
      id: "s3TJZJABhbHMfDY10eQU",
      title: "Forrest Gump",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/eCynaAOgYYiw5yN5lBwz3IxqvaW.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/jPhak722pNGxQIXSEfeWIUqBrO5.jpg",
      budget: 5.5e7,
      originalLanguage: "en",
      originalTitle: "Forrest Gump",
      popularity: 112.75,
      releaseDate: "1994-06-23",
      revenue: 6.77387716e8,
      runTime: "142",
      tagLine:
        "La vida es como una caja de bombones... nunca sabes lo que te va a tocar",
      voteAverage: 8.48,
      voteCount: 26796.0,
      overview:
        "Forrest Gump es un chico con deficiencias mentales no muy profundas y con alguna incapacidad motora que, a pesar de todo, llegará a convertirse, entre otras cosas, en un héroe durante la Guerra del Vietnam. Su persistencia y bondad le llevarán a conseguir una gran fortuna, ser objeto del clamor popular y a codearse con las más altas esferas sociales y políticas del país. Siempre sin olvidar a Jenny, su gran amor desde que era niño.",
      Genero: "Animación - Familia",
      Video: null,
    },
    {
      id: "tHTJZJABhbHMfDY10eQU",
      title: "American Beauty",
      BackdropPath:
        "https://image.tmdb.org/t/p/original/mzfx54nfDPTUXZOG48u4LaEheDy.jpg",
      PosterPath:
        "https://image.tmdb.org/t/p/original/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg",
      budget: 1.5e7,
      originalLanguage: "en",
      originalTitle: "American Beauty",
      popularity: 109.68,
      releaseDate: "1999-09-15",
      revenue: 3.56296601e8,
      runTime: "122",
      tagLine: "...fíjate bien",
      voteAverage: 8.02,
      voteCount: 11770.0,
      overview:
        "Divertida, inquietante y sorprendente incursión en la América suburbana a través de las vidas de Lester y Carolyn, una pareja perteneciente a la clase medio-alta cuyo matrimonio -y cuyas vidas- lentamente se deshacen. Carolyn odia a su marido, su hija lo desprecia y su jefe está a punto de despedirlo. Así que Lester decide cambiar algunas cosas en su vida; a medida que va siendo más libre, consigue ser más feliz, lo que enfurece más a su esposa y a su hija.",
      Genero: "Comedia - Drama - Romance",
      Video: "https://www.youtube.com/watch?v=0AnJ-1gSF1o",
    },
    {
      id: "tXTJZJABhbHMfDY10eQU",
      title: "Ciudadano Kane",
      budget: 839727.0,
      originalLanguage: "en",
      originalTitle: "Citizen Kane",
      popularity: 196.09,
      releaseDate: "1941-04-17",
      revenue: 2.3218e7,
      runTime: "119",
      tagLine: "La clásica historia del poder y la prensa.",
      voteAverage: 8.01,
      voteCount: 5344.0,
      overview:
        "Un importante financiero estadounidense, Charles Foster Kane, dueño de una importante cadena de periódicos, de una red de emisoras, de dos sindicatos y de una inimaginable colección de obras de arte, muere en su fabuloso castillo de estilo oriental, Xanadú. La última palabra que pronuncia al expirar es Rosebud. El país entero y la prensa en general quedan intrigados por saber el significado de esta palabra. Para descubrirlo, un grupo de periodistas se pone a investigar.",
    },
    {
      id: "tnTJZJABhbHMfDY10eQU",
      title: "El quinto elemento",
      budget: 9.0e7,
      originalLanguage: "en",
      originalTitle: "The Fifth Element",
      popularity: 85.61,
      releaseDate: "1997-05-02",
      revenue: 2.6392018e8,
      runTime: "127",
      tagLine: "No hay futuro sin él.",
      voteAverage: 7.55,
      voteCount: 10463.0,
      overview:
        "Cada 5.000 años se abre una puerta entre las dimensiones. En una dimensión existe el Universo y la vida. En la otra dimensión existe un elemento que no está hecho ni de tierra, ni de fuego, ni de aire, ni de agua, sino que es una anti-energía, la anti-vida: es el quinto elemento.",
    },
    {
      id: "t3TJZJABhbHMfDY10eQU",
      title: "Metrópolis",
      budget: 5300000.0,
      originalLanguage: "de",
      originalTitle: "Metropolis",
      popularity: 98.62,
      releaseDate: "1927-02-06",
      revenue: 1350322.0,
      runTime: "153",
      tagLine:
        "No puede haber acuerdo entre las manos y el cerebro a menos que el corazón actúe como mediador.",
      voteAverage: 8.14,
      voteCount: 2637.0,
      overview:
        "En una megalópolis del año 2000, los obreros están condenados a vivir recluidos en un gueto subterráneo, donde se encuentra el corazón industrial de la ciudad. Sin embargo, incitados por un robot, se rebelan contra la clase dominante y amenazan con destruir la ciudad exterior. Freder (Gustav Frölich), el hijo del soberano de Metrópolis, y María, una muchacha de origen humilde, intentarán evitar la destrucción apelando a los sentimientos y al amor.",
    },
    {
      id: "uHTJZJABhbHMfDY10eQU",
      title: "Piratas del Caribe: La maldición de la Perla Negra",
      budget: 1.4e8,
      originalLanguage: "en",
      originalTitle: "Pirates of the Caribbean: The Curse of the Black Pearl",
      popularity: 152.84,
      releaseDate: "2003-07-09",
      revenue: 6.55011224e8,
      runTime: "143",
      tagLine:
        "Unas 3000 islas de paraíso. Para algunos es una bendición, para otros es una maldición.",
      voteAverage: 7.8,
      voteCount: 20110.0,
      overview:
        "El aventurero capitán Jack Sparrow recorre las aguas caribeñas. Pero su andanzas terminan cuando su enemigo, el capitán Barbossa le roba su barco, la Perla Negra, y ataca la ciudad de Port Royal, secuestrando a Elizabeth Swann, hija del gobernador. Will Turner, el amigo de la infancia de Elizabeth, se une a Jack para rescatarla y recuperar la Perla Negra. Pero el prometido de Elizabeth, comodoro Norrington, les persigue a bordo del HMS Impávido. Además, Barbossa y su tripulación son víctimas de un conjuro por el que están condenados a vivir eternamente, y a transformarse cada noche en esqueletos vivientes, en fantasmas guerreros.",
    },
    {
      id: "uXTJZJABhbHMfDY10eQU",
      title: "Kill Bill: Volumen 1",
      budget: 3.0e7,
      originalLanguage: "en",
      originalTitle: "Kill Bill: Vol. 1",
      popularity: 63.49,
      releaseDate: "2003-10-10",
      revenue: 1.80906076e8,
      runTime: "111",
      tagLine: "La sangrienta historia de una venganza",
      voteAverage: 7.97,
      voteCount: 16973.0,
      overview:
        "Uma Thurman es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill (David Carradine). Logra sobrevivir al ataque, aunque queda en coma. Cinco años después despierta con un trozo de metal en la cabeza y un gran deseo de venganza en su corazón.",
    },
    {
      id: "unTJZJABhbHMfDY10eQU",
      title: "Jarhead, el infierno espera",
      budget: 7.2e7,
      originalLanguage: "en",
      originalTitle: "Jarhead",
      popularity: 42.79,
      releaseDate: "2005-11-04",
      revenue: 9.7076152e7,
      runTime: "125",
      tagLine: "",
      voteAverage: 6.66,
      voteCount: 2781.0,
      overview:
        'La historia de un chico de veinte años en la guerra del Golfo tiene poco que ver con lo que ofrecían los periódicos o la televisión de la época. Se describe la guerra vista desde el suelo con imágenes de pozos de petróleo ardiendo en la noche, cual cometas caídos del cielo; habla de reclutas ruidosos, cachondos, polvorientos, llenos de entusiasmo y, al mismo tiempo, atemorizados ante la idea de toparse con el enemigo en cualquier momento; de chicos jóvenes a los que habían dejado caer en un terreno inhóspito, que mataban el tiempo jugando al fútbol con las máscaras antigás puestas, mientras esperaban paquetes de casa, cartas y revistas porno, que apostaban en combates de escorpiones y se emborrachaban para celebrar la Navidad. Sin embargo, en esta situación infernal nacieron amistades improbables, lealtades eternas, una camaradería que nada podría romper, la hermandad de los “jarheads” que se habían jurado fidelidad eterna... "semper fi".',
    },
    {
      id: "u3TJZJABhbHMfDY10eQU",
      title: "Apocalypse Now",
      budget: 3.15e7,
      originalLanguage: "en",
      originalTitle: "Apocalypse Now",
      popularity: 68.54,
      releaseDate: "1979-08-15",
      revenue: 1.5e8,
      runTime: "147",
      tagLine: "Esto es el fin...",
      voteAverage: 8.28,
      voteCount: 7967.0,
      overview:
        "Durante la guerra de Vietnam, al joven Capitán Willard, un oficial de los servicios de inteligencia del ejército estadounidense, se le ha encomendado entrar en Camboya con la peligrosa misión de eliminar a Kurtz, un coronel renegado que se ha vuelto loco. El capitán deberá ir navegar por el río hasta el corazón de la selva, donde parece ser que Kurtz reina como un buda despótico sobre los miembros de la tribu Montagnard, que le adoran como a un dios.",
    },
    {
      id: "vHTJZJABhbHMfDY10eQU",
      title: "Sin perdón",
      budget: 1.44e7,
      originalLanguage: "en",
      originalTitle: "Unforgiven",
      popularity: 45.3,
      releaseDate: "1992-08-07",
      revenue: 1.59157447e8,
      runTime: "131",
      tagLine:
        "Algunas leyendas nunca serán olvidadas. Algunos errores nunca pueden ser perdonados.",
      voteAverage: 7.92,
      voteCount: 4255.0,
      overview:
        "William Munny es un pistolero retirado, viudo y padre de familia, que tiene dificultades económicas para sacar adelante a su hijos. Su única salida es hacer un último trabajo. En compañía de un viejo colega y de un joven inexperto, Munny tendrá que matar a dos hombres que cortaron la cara a una prostituta.",
    },
    {
      id: "vXTJZJABhbHMfDY10eQU",
      title: "Los Simpson: La película",
      budget: 7.5e7,
      originalLanguage: "en",
      originalTitle: "The Simpsons Movie",
      popularity: 98.96,
      releaseDate: "2007-07-25",
      revenue: 5.27068851e8,
      runTime: "87",
      tagLine: "Observa a nuestra familia. Te sentirás mejor con la tuya.",
      voteAverage: 7.01,
      voteCount: 7785.0,
      overview:
        "Homer debe salvar al mundo de una catástrofe que él mismo ha provocado. Todo comienza con Homer, su nueva mascota, un cerdo, y un silo lleno de excrementos que tiene una fuga, una combinación que desencadena un desastre distinto a todo lo que Springfield haya experimentado jamás. Mientras Marge está indignada por la monumental metedura de pata de su patán marido, una turba vengativa cae sobre el hogar de los Simpson...",
    },
    {
      id: "vnTJZJABhbHMfDY10eQU",
      title: "¡Olvídate de mí!",
      budget: 2.0e7,
      originalLanguage: "en",
      originalTitle: "Eternal Sunshine of the Spotless Mind",
      popularity: 76.27,
      releaseDate: "2004-03-19",
      revenue: 7.2258126e7,
      runTime: "108",
      tagLine: "Ya me olvide de lo que sentía por ti.",
      voteAverage: 8.1,
      voteCount: 14500.0,
      overview:
        "Una mujer usa los servicios de una empresa para borrar de su memoria todo recuerdo de su ex pareja. Ofendido, el hombre intenta hacer lo mismo que ella, pero el proceso no sucede según lo esperado y el protagonista debe atravesar la gigantesca marea de recuerdos de su propio cerebro para recomponer las cosas.",
    },
    {
      id: "v3TJZJABhbHMfDY10eQU",
      title: "Piratas del Caribe: El cofre del hombre muerto",
      budget: 2.0e8,
      originalLanguage: "en",
      originalTitle: "Pirates of the Caribbean: Dead Man's Chest",
      popularity: 136.7,
      releaseDate: "2006-07-06",
      revenue: 1.0657e9,
      runTime: "151",
      tagLine: "Vuelve el capitán Jack",
      voteAverage: 7.36,
      voteCount: 15530.0,
      overview:
        "Will Turner y Elizabeth Swann se van a casar, pero ambos son hechos prisioneros por Lord Cutler Beckett y acusados de haber liberado al capitán Jack Sparrow. Para salvar su vida, Will tendrá que encontrar a Jack y conseguir su misteriosa brújula. Esta esconde un gran poder, además de la clave de una deuda de sangre del pirata con un temible y siniestro Davy Jones, el legendario capitán del barco fantasma Holandés Errante.",
    },
    {
      id: "wHTJZJABhbHMfDY10eQU",
      title: "2001: una odisea del espacio",
      budget: 1.2e7,
      originalLanguage: "en",
      originalTitle: "2001: A Space Odyssey",
      popularity: 263.31,
      releaseDate: "1968-04-02",
      revenue: 7.192356e7,
      runTime: "141",
      tagLine: "Un drama épico de aventura y exploración.",
      voteAverage: 8.08,
      voteCount: 11182.0,
      overview:
        "Hace millones de años, en los albores del nacimiento del homo sapiens, unos simios descubren un monolito que les lleva a un estadio de inteligencia superior. Otro monolito vuelve a aparecer, millones de años después, enterrado en una luna, lo que provoca el interés de los científicos humanos. Por último, HAL 9000, una máquina de inteligencia artificial, es la encargada de todos los sistemas de una nave espacial tripulada durante una misión de la NASA.",
    },
    {
      id: "wXTJZJABhbHMfDY10eQU",
      title: "8 millas",
      budget: 4.1e7,
      originalLanguage: "en",
      originalTitle: "8 Mile",
      popularity: 62.21,
      releaseDate: "2002-11-08",
      revenue: 2.42875078e8,
      runTime: "110",
      tagLine: "Cada momento es otra oportunidad.",
      voteAverage: 7.14,
      voteCount: 7026.0,
      overview:
        "La película narra la historia de Jimmy Smith Jr. (Eminem), un joven rapero que vive en un barrio pobre de Detroit y que sueña con triunfar en el mundo de la música. Jimmy tiene que enfrentarse a varios problemas, como su trabajo precario, su relación con su madre alcohólica y su hija pequeña, su novia infiel y sus rivales en el rap. Jimmy participa en unas batallas de rap donde tiene que demostrar su talento y su ingenio frente a otros raperos. Su objetivo es ganar el concurso que se celebra en el club 8 Mile, el límite entre el barrio blanco y el negro, y así conseguir el respeto y la fama que desea.",
    },
    {
      id: "wnTJZJABhbHMfDY10eQU",
      title: "Brazil",
      budget: 1.5e7,
      originalLanguage: "en",
      originalTitle: "Brazil",
      popularity: 59.28,
      releaseDate: "1985-02-20",
      revenue: 9900000.0,
      runTime: "131",
      tagLine: "Es sólo un estado mental.",
      voteAverage: 7.7,
      voteCount: 3186.0,
      overview:
        "En un extraño y deprimente universo futurista donde reinan las máquinas, una mosca cae dentro de un ordenador y cambia el apellido del guerrillero Harry Tuttle (Robert de Niro) por el del tranquilo padre de familia Harry Buttle, que es detenido y asesinado por el aparato represor del Estado. El tranquilo burócrata Sam Lowry (Jonathan Pryce) es el encargado de devolver un talón a la familia de la víctima, circunstancia que le permite conocer a Jill Layton (Kim Greist), la mujer de sus sueños. Y, mientras la persigue, hace amistad con Harry Tuttle y se convierte en su cómplice.",
    },
    {
      id: "w3TJZJABhbHMfDY10eQU",
      title: "En la cuerda floja",
      budget: 2.8e7,
      originalLanguage: "en",
      originalTitle: "Walk the Line",
      popularity: 46.48,
      releaseDate: "2005-09-13",
      revenue: 1.868e8,
      runTime: "136",
      tagLine: "Cuando se vive al límite.",
      voteAverage: 7.5,
      voteCount: 2773.0,
      overview:
        "Biopic del gran cantante de música country Johnny Cash. La historia comienza en Arkansas, en la época de la Gran Depresión. John R. Cash es el hijo de un aparcero, pero no tardará en iniciar salvajes giras con los pioneros del rock and roll: Elvis Presley, Carl Perkins, Roy Orbison, Jerry Lee Lewis y Waylon Jennings, giras que culminan con su inolvidable concierto de 1968 en la Prisión de Folsom. Cash se convirtió en el artista más en boga del momento, vendiendo incluso más que los Beatles.",
    },
    {
      id: "xHTJZJABhbHMfDY10eQU",
      title: "Million Dollar Baby",
      budget: 3.0e7,
      originalLanguage: "en",
      originalTitle: "Million Dollar Baby",
      popularity: 54.45,
      releaseDate: "2004-12-15",
      revenue: 2.16763646e8,
      runTime: "132",
      tagLine:
        "Más allá de su silencio, hay un pasado. Más allá de sus sueños, hay un sentimiento. Más allá de sus esperanzas, hay una memoria. Más allá de su viaje, hay un amor.",
      voteAverage: 7.96,
      voteCount: 9312.0,
      overview:
        "Frankie Dunn, después de haber entrenado y representado a los mejores púgiles, regenta un gimnasio con la ayuda de Scrap, un ex-boxeador que, además, es su único amigo. Frankie es un hombre solitario y adusto que se refugia desde hace años en la religión buscando una redención que no llega. Un día, entra en su gimnasio Maggie Fitzgerald, una voluntariosa chica que quiere boxear y que está dispuesta a luchar denodadamente para conseguirlo. Pero lo que más desea y necesita es que alguien crea en ella. Frankie la rechaza alegando que es demasiado mayor y que, además, él no entrena a chicas. Pero Maggie no se rinde y se machaca cada día en el gimnasio, con el único apoyo de Scrap. Finalmente, convencido de la inquebrantable determinación de Maggie, Frankie decide entrenarla.",
    },
  ],
  aggs: {
    voteAverageValues: [
      {
        key: "-5",
        count: 0,
      },
      {
        key: "5-7",
        count: 15,
      },
      {
        key: "10-",
        count: 85,
      },
    ],
    runTimeValues: [
      {
        key: "-60",
        count: 0,
      },
      {
        key: "60-90",
        count: 3,
      },
      {
        key: "90-",
        count: 97,
      },
    ],
    budgetValues: [
      {
        key: "-2000000",
        count: 11,
      },
      {
        key: "2000000-10000000",
        count: 16,
      },
      {
        key: "10000000-",
        count: 73,
      },
    ],
    popularityValues: [
      {
        key: "-100",
        count: 69,
      },
      {
        key: "100-200",
        count: 25,
      },
      {
        key: "200-",
        count: 6,
      },
    ],
    originalLanguageValues: [
      {
        key: "en",
        count: 90,
      },
      {
        key: "ja",
        count: 5,
      },
      {
        key: "fr",
        count: 2,
      },
      {
        key: "de",
        count: 1,
      },
      {
        key: "it",
        count: 1,
      },
      {
        key: "ko",
        count: 1,
      },
    ],
    voteCountValues: [
      {
        key: "-10000",
        count: 61,
      },
      {
        key: "10000-20000",
        count: 29,
      },
      {
        key: "20000-",
        count: 10,
      },
    ],
  },
};
