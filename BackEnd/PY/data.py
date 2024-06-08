import requests
import csv
import mysql.connector
from mysql.connector import Error

def leer_ids(archivo):
    with open(archivo, 'r') as file:
        ids = file.read().splitlines()
    return ids

def obtener_datos_pelicula(movie_id, api_key):
    url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=es-ES&append_to_response=credits"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None
    
def guardar_datos_csv(datos, archivo_salida):
    with open(archivo_salida, 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        for dato in datos:
            writer.writerow(dato)

def insertar_datos_film(conn, datos):
    cursor = conn.cursor()
    query = """
    INSERT INTO t_film (id_film, title, backdrop_path, poster_path, budget, original_language, original_title, popularity, release_date, revenue, runtime, tagline, vote_average, vote_count)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(query, datos)
    conn.commit()

def insertar_datos_cast(conn, datos):
    cursor = conn.cursor()
    query = """
    INSERT INTO t_cast (id_film, idcast, name, original_name, castpopularity, profile_path, charac_name)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(query, datos)
    conn.commit()

def insertar_datos_generos(conn, datos):
    cursor = conn.cursor()
    query = """
    INSERT INTO t_generos (id_film, id_genero, desc_genero)
    VALUES (%s, %s, %s)
    """
    cursor.execute(query, datos)
    conn.commit()

def insertar_datos_pais(conn, datos):
    cursor = conn.cursor()
    query = """
    INSERT INTO t_pais_rodaje (id_film, pais)
    VALUES (%s, %s)
    """
    cursor.execute(query, datos)
    conn.commit()

def insertar_datos_produccion(conn, datos):
    cursor = conn.cursor()
    query = """
    INSERT INTO t_produccion (id_film, id_compa, logo_path, namecompa )
    VALUES (%s, %s, %s, %s)
    """
    cursor.execute(query, datos)
    conn.commit()

def insertar_datos_sinopsis(conn, datos):
    cursor = conn.cursor()
    query = """
    INSERT INTO t_sinopsis (id_film, film_sinop)
    VALUES (%s, %s)
    """
    cursor.execute(query, datos)
    conn.commit()

def main():
    api_key = "2fb2d38addc4c92105c4f9ad0a4efe66"
    archivo_ids = 'CSV/id.csv'

    ids = leer_ids(archivo_ids)

    try:
        conn = mysql.connector.connect(
            host='localhost',  # Cambia según tu configuración
            database='unirsoftbusca',  # Cambia según tu configuración
            user='userapp',  # Cambia según tu configuración
            password='userapp'  # Cambia según tu configuración
        )
        if conn.is_connected():
            print('Conectado a la base de datos MySQL')
            for movie_id in ids:
                data = obtener_datos_pelicula(movie_id, api_key)
                if data:
                    
                    overview = data.get('overview')

                    if overview:

                        print(f"Obtener {movie_id}")

                        id = data.get('id')
                        title = data.get('title')
                        backdrop_path = data.get('backdrop_path')
                        poster_path = data.get('poster_path')
                        budget = data.get('budget')
                        original_language = data.get('original_language')
                        original_title = data.get('original_title')
                        popularity = data.get('popularity')
                        release_date = data.get('release_date')
                        revenue = data.get('revenue')
                        runtime = data.get('runtime')
                        tagline = data.get('tagline')
                        vote_average = data.get('vote_average')
                        vote_count = data.get('vote_count')

                        t_pelicula = (id,title,backdrop_path,poster_path,budget,original_language,original_title,popularity,release_date,revenue,runtime,tagline,vote_average,vote_count)
                        insertar_datos_film(conn, t_pelicula)
                        print("Pelicula OK")
                        
                        t_descrip = (id, overview)
                        insertar_datos_sinopsis(conn, t_descrip)
                        print("Sinposis OK")

                        genres = data.get('genres')

                        if genres:
                            for genres_id in genres:
                                idgenres = genres_id.get('id')
                                desgenres = genres_id.get('name')
                                t_generos = (id, idgenres,desgenres)
                                insertar_datos_generos(conn, t_generos)
                                print("Generos OK")

                        credits = data.get('credits')
                        if credits:
                            cast = credits.get('cast')
                            for cast_id in cast:
                                idcast = cast_id.get('cast_id')
                                name = cast_id.get('name')
                                original_name = cast_id.get('original_name')
                                castpopularity = cast_id.get('popularity')
                                profile_path = cast_id.get('profile_path')
                                character = cast_id.get('character')
                                t_cast = (id,idcast,name,original_name,castpopularity,profile_path,character)
                                insertar_datos_cast(conn, t_cast)
                                print("Cast OK")

                        production_companies = data.get('production_companies')
                        if production_companies:
                            for compa_id in production_companies:
                                idcompa = compa_id.get('id')
                                logo_path = compa_id.get('logo_path')
                                namecompa = compa_id.get('name')
                                t_compa = (id, idcompa, logo_path, namecompa)
                                insertar_datos_produccion(conn, t_compa)
                                print("Produccion OK")

                        production_countries = data.get('production_countries')
                        if production_countries:
                            for pais_id in production_countries:
                                namepais = pais_id.get('name')
                                t_pais = (id, namepais)
                                insertar_datos_pais(conn, t_pais)
                                print("Pais OK")

    except Error as e:
        print(f"Error al conectar a la base de datos: {e}")

    finally:
        if conn.is_connected():
            conn.close()
            print('Conexión a la base de datos cerrada')

    print("Fin...")

main()
