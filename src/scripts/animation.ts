"use client"

if (typeof window !== 'undefined') {

    window.onload = function () {
        const cards: HTMLElement[] = Array.from(document.querySelectorAll(".skill-card"));
        const cardsContainer = document.querySelector(".skills-animation") as HTMLElement;

        let x: number, y: number;
        let animation: "running" | "paused" = "running";

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
    };

}
