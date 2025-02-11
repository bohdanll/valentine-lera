// Список поздравлений
const messages = [
    "Сорри что не цветы, нынче DHL ахуели) ☀️",
    "Лерусь будь собой ты крутая ❤️",
    "Ты мне очень важна 🌸",
    "С праздником короче, воот 🎉",
];

document.getElementById("newMessage").addEventListener("click", function() {
    const messageElement = document.querySelector(".message");
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
});

// Анимация сердечек
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

// Музыка
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicButton.textContent = "⏸ Остановить музыку";
    } else {
        music.pause();
        musicButton.textContent = "🎵 Включить музыку";
    }
});
