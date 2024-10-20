const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');
const body = document.body;

// Ellenőrizd, hogy van-e sötét mód beállítás a localStorage-ban
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.textContent = '🌜'; // Hold ikon
} else {
    icon.textContent = '🌞'; // Nap ikon
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // Ha sötét mód aktiválva van, mentsük el a beállítást
        localStorage.setItem('darkMode', 'enabled');
        icon.textContent = '🌜'; // Hold ikon
    } else {
        // Ha sötét mód kikapcsolva, töröljük a beállítást
        localStorage.setItem('darkMode', 'disabled');
        icon.textContent = '🌞'; // Nap ikon
    }
});
