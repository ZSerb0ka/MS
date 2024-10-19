const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.textContent = '🌜'; // Hold ikon
    } else {
        icon.textContent = '🌞'; // Nap ikon
    }
});