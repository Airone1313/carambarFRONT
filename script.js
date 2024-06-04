document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const getJokeButton = document.getElementById('getJokeButton');

    getJokeButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://your-api-url.com/get-random-joke'); // Remplacez par l'URL réelle de votre API
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            jokeElement.textContent = data.joke;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            jokeElement.textContent = "Oops! Quelque chose s'est mal passé.";
        }
    });
});
