import csv
import requests

def obtener_datos(pagina, api_key):
    url = f"https://api.themoviedb.org/3/discover/movie?api_key={api_key}&language=es-ES&page={pagina}"
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
    archivo_salida = "CSV/id.csv"
    t_id = []
    for i in range(1,51):
        data = obtener_datos(i,api_key)
        if data:
            results = data.get('results')
            for result_id in results:
                id = result_id.get('id')
                t_id.append([id])

    guardar_datos_csv(t_id, archivo_salida)
    print(f"Datos guardados en {archivo_salida}")

main()