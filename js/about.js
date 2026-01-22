document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("send-btn");
    const container = document.querySelector(".contact-us-container");

    sendBtn.addEventListener("click", () => {

        container.style.transition = "opacity 0.4s ease";
        container.style.opacity = "0";

        setTimeout(() => {
            container.innerHTML = "";

            const confirmation = document.createElement("div");
            confirmation.className = "confirmation-message";
            confirmation.innerHTML = `
                <span class="tick">✔</span>
                <div>
                    <h3>Tack för ditt meddelande</h3>
                    <p>Vi återkommer till dig så snart som möjligt.</p>
                </div>
            `;

            container.appendChild(confirmation);

            container.style.opacity = "1";
        }, 400);
    });
});
