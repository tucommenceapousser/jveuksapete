import requests
import json

def get_github_projects(username, token=None):
    projects = []
    page = 1

    while True:
        url = f"https://api.github.com/users/{username}/repos?page={page}&per_page=100"  # Récupère jusqu'à 100 projets par page
        headers = {"Authorization": f"token {token}"} if token else {}
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            repos = response.json()
            if not repos:  # Si aucun dépôt n'est retourné, on a atteint la fin
                break
            # Récupérer le nom, l'URL et la description de chaque projet
            projects.extend([(repo["name"], repo["html_url"], repo.get("description", "Pas de description disponible.")) for repo in repos])
            page += 1  # Passer à la page suivante
        else:
            print("Erreur :", response.status_code)
            break

    return projects

# Utilisation
username = "tucommenceapousser"  # Remplacez avec votre nom d'utilisateur GitHub
token = ""  # Utilisez un token si vous en avez un
projects = get_github_projects(username, token)

# Enregistrement des résultats dans un fichier JSON
with open('projects.json', 'w') as json_file:
    json.dump(projects, json_file)

# Enregistrement des résultats dans un fichier TXT
with open('projects.txt', 'w') as txt_file:
    for name, url, description in projects:
        txt_file.write(f"{name}: {url} - Description: {description}\n")

print(f"Total de projets récupérés : {len(projects)}")