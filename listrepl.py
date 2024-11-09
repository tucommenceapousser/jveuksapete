import requests
from bs4 import BeautifulSoup
import json

# URL de votre profil Replit (remplacez par votre nom d'utilisateur)
url = 'https://replit.com/@trkn'

# Faire une requête HTTP
response = requests.get(url)

# Vérifiez si la requête a réussi
if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')

    # Trouver tous les projets
    projets = soup.find_all('li', class_='css-1sn12z5')  # Classe pour les projets

    # Liste pour stocker les résultats
    resultats = []

    for projet in projets:
        # Extraire le nom du projet
        nom_projet = projet.find('span', class_='css-1t25kw8').text  # Nom du projet
        # Extraire le lien vers le projet
        lien_projet = projet.find('a')['href']  # Lien du projet
        # Ajout d'un dictionnaire avec le nom et le lien du projet
        resultats.append({
            'nom': nom_projet,
            'lien': lien_projet
        })

    # Sauvegarder dans un fichier JSON
    with open('projets_replit.json', 'w') as f:
        json.dump(resultats, f, indent=4)  # Utiliser indent pour un formatage lisible

    print("Projets trouvés :", resultats)
else:
    print("Erreur lors de la récupération de la page, code :", response.status_code)