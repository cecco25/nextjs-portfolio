"use client"

if (typeof window !== 'undefined') {

    window.onload = function () {
        const cards: HTMLElement[] = Array.from(document.querySelectorAll(".skill-card"));
        const cardsContainer = document.querySelector(".skills-animation") as HTMLElement;

        let x: number, y: number;
        let animation: "running" | "paused" = "running";
        const originalSpeed = "25s";
        const fastSpeed = "10s";

        // Toggle animation state on container click
        cardsContainer.addEventListener("click", (e: MouseEvent) => {
            animation = animation === "running" ? "paused" : "running";
            cardsContainer.style.setProperty("animation-play-state", animation);
        });

        // Update card properties on mouse move
        cardsContainer.addEventListener("mousemove", (e: MouseEvent) => {
            for (const card of cards) {

                const rect = card.getBoundingClientRect();
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });

        let isSpeed = false;
        // Aumenta la velocità dell'animazione quando fai double click
        cardsContainer.addEventListener("dblclick", (e: MouseEvent) => {
            if (!isSpeed) {
                isSpeed = true;
                cardsContainer.style.setProperty("animation-duration", fastSpeed);
            } else {
                isSpeed = false;
                cardsContainer.style.setProperty("animation-duration", originalSpeed);
            }
        });
    };

}
