console.log("BRIOSAM Portfolio successfully loaded!");

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        console.log("Selected skill:", card.textContent);
    });
});