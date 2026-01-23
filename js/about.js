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
                    <h3>Thank you for your message</h3>
                    <p>We will get back to you as soon as possible.</p>
                </div>
            `;

            container.appendChild(confirmation);

            container.style.opacity = "1";
        }, 400);
    });
});
