document.addEventListener("DOMContentLoaded", () => {
    // Hämta knappen och formuläret
    const sendBtn = document.getElementById("send-btn");
    const form = document.querySelector(".förälder-formulär");
    const container = document.querySelector(".contact-us-container");

    sendBtn.addEventListener("click", () => {
        // 1. Fade out formuläret
        form.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        form.style.opacity = "0";
        form.style.transform = "translateY(-10px)";

        // 2. Efter fade-animationen
        setTimeout(() => {
            // Dölj formuläret helt men behåll det i DOM
            form.style.display = "none";

            // Skapa tack-meddelande
            const confirmation = document.createElement("div");
            confirmation.classList.add("confirmation-message");
            confirmation.innerHTML = `
                <span class="tick">✔</span>
                <div>
                    <strong>Tack för ditt meddelande</strong><br>
                    Vi återkommer till dig så snart som möjligt.
                </div>
            `;

            // Lägg tack-meddelandet precis i containern
            container.appendChild(confirmation);

        }, 500); // matchar fade-out
    });
});
