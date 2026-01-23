document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("form__button--home-booking");
    const container = document.getElementById("form-section--home-booking");
    // const containerDateIn = document.getElementById("form__date--checkin");
    // const containerDateOut = document.getElementById("form__date--checkout");

    sendBtn.addEventListener("click", () => {
        
        container.style.transition = "opacity 0.4s ease";
        container.style.opacity = "0";
        
        let x = document.getElementById("form__date--checkin").value;
        
        let text;
        if (x !== "") {
            alert("Input not valid");
            // document.getElementById("demo").innerHTML = text;
            
            setTimeout(() => {
                const confirmation = document.createElement("main");
                confirmation.innerHTML = ` TEMPin `;
                alert("WE balling");
                
                // container.appendChild(confirmation);
                
                container.style.opacity = "1";
            }, 400);
        } else {
            alert("Input OK");
            container.style.opacity = "1";
        }
    });
});
