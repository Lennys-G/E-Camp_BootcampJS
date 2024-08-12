import { projects } from './DB/proyectos.js';
const d = document;

const navBar = d.getElementById('navBar');
const btnMenu = d.getElementById('btnMenu');
const projectSection = d.getElementById('projectSection');

btnMenu.addEventListener('click', function () {
	navBar.classList.toggle('is-active');
});

const projectContainer = d.createElement('div');
projectContainer.className = 'card-container card-project_container';

projects.forEach((project) => {
	const card = d.createElement('div');
	card.className = 'card card-project';
	card.innerHTML = `
    <h3>${project.name}</h3>
    <img src="${project.img}" class="card-img" alt="Presentación Proyecto">
  `;

	projectContainer.appendChild(card);
});

projectSection.appendChild(projectContainer);
