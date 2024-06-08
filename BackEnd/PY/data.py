import requests
import csv

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
        #writer.writerow(['ID'])
        for dato in datos:
            writer.writerow(dato)

def main():
    api_key = "2fb2d38addc4c92105c4f9ad0a4efe66"
    archivo_ids = 'CSV/id.csv'
    archivo_generos = 'CSV/generos.csv'
    archivo_cast = 'CSV/cast.csv'
    archivo_pelicula = 'CSV/pelicula.csv'
    archivo_descrip = 'CSV/descrip.csv'
    archivo_compa = 'CSV/compa.csv'
    archivo_pais = 'CSV/pais.csv'

    ids = leer_ids(archivo_ids)
    t_generos = []
    t_cast = []
    t_pelicula = []
    t_descrip = []
    t_compa = []
    t_pais = []

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

                t_pelicula.append([id,title,backdrop_path,poster_path,budget,original_language,original_title,popularity,release_date,revenue,runtime,tagline,vote_average,vote_count])

                
                t_descrip.append([id, overview])

                genres = data.get('genres')

                if genres:
                    for genres_id in genres:
                        idgenres = genres_id.get('id')
                        desgenres = genres_id.get('name')
                        t_generos.append([id, idgenres,desgenres])

                credits = data.get('credits')
                if credits:
                    cast = credits.get('cast')
                    for cast_id in cast:
                        idcast = cast_id.get('id')
                        name = cast_id.get('name')
                        original_name = cast_id.get('original_name')
                        castpopularity = cast_id.get('popularity')
                        profile_path = cast_id.get('profile_path')
                        character = cast_id.get('character')
                        t_cast.append([id,idcast,name,original_name,castpopularity,profile_path,character])

                production_companies = data.get('production_companies')
                if production_companies:
                    for compa_id in production_companies:
                        idcompa = compa_id.get('id')
                        logo_path = compa_id.get('logo_path')
                        namecompa = compa_id.get('name')
                        t_compa.append([id, idcompa, logo_path, namecompa])

                production_countries = data.get('production_countries')
                if production_countries:
                    for pais_id in production_countries:
                        namepais = pais_id.get('name')
                        t_pais.append([id, namepais])

    print("Grabar ficheros CSV")

    guardar_datos_csv(t_generos, archivo_generos)
    print(f"Datos guardados en {archivo_generos}")

    guardar_datos_csv(t_pais, archivo_pais)
    print(f"Datos guardados en {archivo_pais}")

    guardar_datos_csv(t_cast, archivo_cast)
    print(f"Datos guardados en {archivo_cast}")

    guardar_datos_csv(t_compa, archivo_compa)
    print(f"Datos guardados en {archivo_compa}")

    guardar_datos_csv(t_descrip, archivo_descrip)
    print(f"Datos guardados en {archivo_descrip}")

    guardar_datos_csv(t_pelicula, archivo_pelicula)
    print(f"Datos guardados en {archivo_pelicula}")

    print("Fin...")

main()
