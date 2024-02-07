window.onload = function () {
    const cards = Array.from(document.querySelectorAll(".skills-card"));
    const cardsContainer = document.querySelector(".skills-cards");

    var x, y;
    var animation = "running";
    cardsContainer.addEventListener("click", (e) => {
        animation = animation === "running" ? "paused" : "running";
        cardsContainer.style.setProperty("animation-play-state", animation);
    });

    cardsContainer.addEventListener("mousemove", (e) => {
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    });
}