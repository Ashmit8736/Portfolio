const projects = [
  {
    title: "Portfolio Website",
    category: "web",
    image: "images/portfolio.jpg",
    description: "A responsive portfolio website built using HTML, CSS, and JavaScript."
  },
  {
    title: "E-commerce Landing Page",
    category: "web",
    image: "images/amazon.jpg",
    description: "Modern e-commerce landing page with product sections and call-to-action."
  },
  {
    title: "Enterprise Web App",
    category: "Major Projects",
    image: "images/enterprise.jpg",
    description: "Enterprise web app built with MERN stack for scalable solutions."
  },
  {
    title: "Calculator",
    category: "web",
    image: "images/calculator.jpg",
    description: "Functional calculator app using pure JavaScript and responsive layout."
  },
  {
    title: "Color-picker App",
    category: "Major Projects",
    image: "images/colorpicker.jpeg",
    description: "Color picker app: select, preview, copy colors with HTML, CSS, JavaScript., JavaScript."
  },
  {
    title: "Weather App UI",
    category: "Major Projects",
    image: "images/weatherr.jpeg",
    description: "Weather web app: responsive design, real-time forecasts for all devices."
  }
];


const gallery = document.getElementById('project-gallery');
const filterButtons = document.querySelectorAll('.filters button');

function displayProjects(category) {
  gallery.innerHTML = '';
  const filtered = category === 'all' ? projects : projects.filter(p => p.category === category);
  filtered.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    gallery.appendChild(div);
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    displayProjects(button.dataset.category);
  });
});

window.onload = () => displayProjects('all');
