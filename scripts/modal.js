const openModalButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('is-visible');
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('close') || e.target === modal) {
            modal.classList.remove('is-visible');
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => modal.classList.remove('is-visible'));
    }
});