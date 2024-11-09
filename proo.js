async function loadProjects() {
  const response = await fetch('projects.json'); // Charge le JSON local
  const projects = await response.json();

  const projectList = document.getElementById('project-list');
  projects.forEach(project => {
    const projectName = project[0];
    const projectUrl = project[1];

    const projectElement = document.createElement('li');
    projectElement.classList.add('project-item'); // Ajout d'une classe pour le style
    projectElement.innerHTML = `<a href="${projectUrl}" target="_blank">${projectName}</a>`;
    projectList.appendChild(projectElement);
  });

  // Émet un événement une fois les projets ajoutés au DOM
  document.dispatchEvent(new Event('projectsLoaded'));
}

loadProjects();