document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("form__button--home-booking");
    const container = document.getElementById("form-section--home-booking");
    const containerDateIn = document.getElementById("form__date--checkin");
    const containerDateOut = document.getElementById("form__date--checkout");

    sendBtn.addEventListener("click", () => {

        if (containerDateIn !== "" || containerDateOut !== "") {
            
            container.style.transition = "opacity 0.4s ease";
            container.style.opacity = "0";
            
            setTimeout(() => {
                const confirmation = document.createElement("main");
                confirmation.innerHTML = ` TEMP `;
                
                container.appendChild(confirmation);
                
                container.style.opacity = "1";
            }, 400);
        };
    });
});
