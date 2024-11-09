document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const svgContainer = document.getElementById('svgContainer');
    svgContainer.innerHTML = ''; // Vider le conteneur avant d'ajouter les nouveaux SVG

    const files = fileInput.files;

    Array.from(files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function(e) {
            const svgItem = document.createElement('div');
            svgItem.classList.add('svg-item');
            svgItem.innerHTML = e.target.result; // Ajouter le contenu SVG
            svgContainer.appendChild(svgItem);
        };

        reader.readAsText(file); // Lire le fichier SVG comme texte
    });
});

// Liste manuelle des fichiers SVG existants
const existingFiles = [
    'meav.svg',
    'meava.svg',
    'cup.svg'
];

const svgList = document.getElementById('svgList');
existingFiles.forEach(file => {
    const listItem = document.createElement('li');
    listItem.textContent = file;
    svgList.appendChild(listItem);
});