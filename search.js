document.addEventListener('projectsLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const projects = document.querySelectorAll('#project-list .project-item'); // Sélectionne les .project-item div

    searchForm.onsubmit = function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        const searchTerm = searchInput.value.toLowerCase().trim();
        console.log("Searching for:", searchTerm);

        if (searchTerm) {
            let found = false;
            projects.forEach(project => {
                const projectName = project.textContent.toLowerCase();
                if (projectName.includes(searchTerm)) {
                    project.style.display = 'block'; // Montre le projet s'il correspond
                    found = true;
                } else {
                    project.style.display = 'none'; // Cache le projet s'il ne correspond pas
                }
            });

            if (!found) {
                console.log("No projects found with the term:", searchTerm);
            }
        } else {
            // Si la recherche est vide, afficher tous les projets
            projects.forEach(project => {
                project.style.display = 'block';
            });
            console.log("Showing all projects because search term is empty.");
        }
    };

    console.log("Projects loaded and search initialized.");
});