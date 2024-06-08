Instalar base de datos My SQL

https://dev.mysql.com/downloads/file/?id=528489

Una vez instalada la BD crear los esquemas necesarios para el proyecto.

CREATE SCHEMA unirsoftbusca;
CREATE SCHEMA unirsoftopera;

Crear usuario de aplicacion y dar permisos necesarios

CREATE USER 'userapp'@'localhost' IDENTIFIED BY 'userapp';
GRANT ALL PRIVILEGES ON unirsoftbusca.* TO 'userapp'@'localhost' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON unirsoftopera.* TO 'userapp'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

Crear las tablas necesarias para el aplicativo:

CREATE TABLE unirsoftbusca.t_film (
  id_film INT NOT NULL,
  title VARCHAR(500) NULL,
  backdrop_path VARCHAR(100) NULL,
  poster_path VARCHAR(100) NULL,
  budget DECIMAL(17,5) NULL,
  original_language VARCHAR(15) NULL,
  original_title VARCHAR(500) NULL,
  popularity DECIMAL(15,5) NULL,
  release_date VARCHAR(15) NULL,
  revenue DECIMAL(15,5) NULL,
  runtime INT NULL,
  tagline VARCHAR(500) NULL,
  vote_average DECIMAL(7,4) NULL,
  vote_count INT NULL,
  PRIMARY KEY (id_film));

CREATE TABLE unirsoftbusca.t_sinopsis (
  id_film INT NOT NULL,
  film_sinop VARCHAR(5000) NULL,
  PRIMARY KEY (id_film),
  CONSTRAINT id_film
    FOREIGN KEY (id_film)
    REFERENCES unirsoftbusca.t_film (id_film)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE unirsoftbusca.t_generos (
  id_film INT NOT NULL,
  id_genero INT NOT NULL,
  desc_genero VARCHAR(45) NULL,
  PRIMARY KEY (id_film, id_genero),
  CONSTRAINT id_film_genero
    FOREIGN KEY (id_film)
    REFERENCES unirsoftbusca.t_film (id_film)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE unirsoftbusca.t_cast (
  id_film INT NOT NULL,
  idcast INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  original_name VARCHAR(100) NULL,
  castpopularity DECIMAL(65,3) NULL,
  profile_path VARCHAR(100) NULL,
  charac_name VARCHAR(200) NULL,
  PRIMARY KEY (id_film, idcast, name),
  CONSTRAINT id_film_cast
    FOREIGN KEY (id_film)
    REFERENCES unirsoftbusca.t_film (id_film)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE unirsoftbusca.t_produccion (
  id_film INT NOT NULL,
  id_compa INT NOT NULL,
  logo_path VARCHAR(100) NULL,
  namecompa VARCHAR(100) NULL,
  PRIMARY KEY (id_film, id_compa),
  CONSTRAINT id_film_prod
    FOREIGN KEY (id_film)
    REFERENCES unirsoftbusca.t_film (id_film)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
CREATE TABLE unirsoftbusca.t_pais_rodaje (
  id_film INT NOT NULL,
  pais VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_film, pais),
  CONSTRAINT id_film_pais
    FOREIGN KEY (id_film)
    REFERENCES unirsoftbusca.t_film (id_film)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
