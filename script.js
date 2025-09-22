document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const description = card.getAttribute('data-description');
        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = description;

        // Ajouter l'élément de description à chaque carte
        card.appendChild(descriptionElement);
    });
});
