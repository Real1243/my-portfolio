
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '10px';
darkModeToggle.style.right = '10px';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background: #1a1a1a;
        color: white;
    }
    .dark-mode header {
        background: #000;
    }
    .dark-mode .project-card {
        border-color: #444;
        background: #2a2a2a;
    }
`;
document.head.appendChild(style);
