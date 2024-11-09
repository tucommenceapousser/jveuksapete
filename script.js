// Liste des couleurs à alterner
const colors = ['#FF4500', '#00FFFF', '#FFD700', '#FF00FF', '#00FF00', '#FF1493', '#1E90FF'];
let colorIndex = 0;

// Effet pour changer la couleur du texte à chaque clic, en alternant les couleurs
document.querySelectorAll('.poem p').forEach(line => {
    line.addEventListener('click', () => {
        // Appliquer la couleur suivante dans le tableau
        line.style.color = colors[colorIndex];

        // Incrémenter l'index des couleurs, revenir à 0 si on atteint la fin du tableau
        colorIndex = (colorIndex + 1) % colors.length;
    });
});