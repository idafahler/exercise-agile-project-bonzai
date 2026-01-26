document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("form__button--home-booking");
    const container = document.getElementById("form-section--home-booking");
    // const containerDateIn = document.getElementById("form__date--checkin");
    // const containerDateOut = document.getElementById("form__date--checkout");

    sendBtn.addEventListener("click", () => {
        
        container.style.transition = "opacity 0.4s ease";
        container.style.opacity = "0";
        
        let x = document.getElementById("form__date--checkin").value;
        let y = document.getElementById("form__date--checkout").value;
        
        let text;
        if (x !== "" && y !== "") {
            
            setTimeout(() => {
                const confirmation = document.createElement("main");
                document.getElementById("grabbag").innerHTML = `
        <!------------------------------ROOMS AVAILABLE------------------------------->
        
        <!--WRAPPER / SECTION FOR ROOMS AVAILABLE-->
        <section class="wrapper">

            <!--TITLES-->
            <article class="rooms__titles">
                <h2>6 Rooms Available</h2>
                <h3>Select dates to see availability</h3>
            </article>

            <section class="rooms-section">

            <!--ROOM 1-->
                <article class="room-box">
                    <aside class="room__img-wrapper">
                        <img src="assets/photos/01-day.jpg" alt="EcoSmart Suite" class="room__img">
                        <article class="room__score">
                            <img src="assets/icons/star.png" alt="Star" class="room__score-icon">
                            <p class="room__text">4.9</p>
                        </article>
                    </aside>
 
                    <section class="room__content">
                        <h3>EcoSmart Suite</h3>

                        <aside class="room__price">
                            <h4 class="room__price--dollar">$299</h4>
                            <p class="room__price--text">per night</p>
                        </aside>

                        <article class="room__info">
                            <img src="assets/icons/users-round.svg" alt="People" class="room__icon">
                            <p class="room__text">Up to 2</p>
                            <p class="room__text">45 m2</p>
                        </article>
                        
                        <article class="room__info--features">
                            <article class="room__img-title">
                                <img src="assets/icons/wifi.svg" alt="Wifi" class="room__icon">
                                <p class="room__text--title">Features</p>
                            </article>
                            <article class="room__text--features">
                                <p>King size bed</p>
                                <p>Ocean View</p>
                                <p>Smart climate</p>
                                <p>Premium Toiletries</p>
                            </article>
                        </article>
                        
                        <article class="room__info--ai">
                            <article class="room__img-title">
                                <img src="assets/icons/brain-purple.svg" alt="Brain" class="room__icon">
                                <p class="room__text--title">AI Features</p>
                            </article>
                            <article class="room__text--ai">
                                <p>Voice Control</p>
                                <p>Smart Lighting</p>
                                <p>Digital Concierge</p>
                            </article>
                        </article>

                        <article class="room__info--sustainability">
                            <article class="room__img-title">
                                <img src="assets/icons/leaf.svg" alt="Leaf" class="room__icon">
                                <p class="room__text--title">Sustainability</p>
                            </article>
                            <p class="room__text--sustainability">
                                100% renewable energy, recycled materials
                            </p>
                        </article>

                        <button class="button room__button">Reserve Room</button>
                    </section>
                </article>

                <!--ROOM 2-->
                <article class="room-box">
                    <aside class="room__img-wrapper">
                        <img src="assets/photos/02-day.jpg" alt="GreenTech Deluxe" class="room__img">
                        <article class="room__score">
                            <img src="assets/icons/star.png" alt="Star" class="room__score-icon">
                            <p class="room__text">4.7</p>
                        </article>
                    </aside>
                    <section class="room__content">
                        <h3>GreenTech Deluxe</h3>

                        <aside class="room__price">
                            <h4 class="room__price--dollar">$199</h4>
                            <p class="room__price--text">per night</p>
                        </aside>

                        <article class="room__info">
                            <img src="assets/icons/users-round.svg" alt="People" class="room__icon">
                            <p class="room__text">Up to 2</p>
                            <p class="room__text">35 m2</p>
                        </article>
                        
                        <article class="room__info--features">
                            <article class="room__img-title">
                                <img src="assets/icons/wifi.svg" alt="Wifi" class="room__icon">
                                <p class="room__text--title">Features</p>
                            </article>
                            <article class="room__text--features">
                                <p>Queen size bed</p>
                                <p>City View</p>
                                <p>Smart TV</p>
                                <p>Premium Toiletries</p>
                            </article>
                        </article>
                        
                        <article class="room__info--ai">
                            <article class="room__img-title">
                                <img src="assets/icons/brain-purple.svg" alt="Brain" class="room__icon">
                                <p class="room__text--title">AI Features</p>
                            </article>
                            <article class="room__text--ai">
                                <p>Voice Control</p>
                                <p>Smart Lighting</p>
                                <p>Predictive Climate</p>
                            </article>
                        </article>

                        <article class="room__info--sustainability">
                            <article class="room__img-title">
                                <img src="assets/icons/leaf.svg" alt="Leaf" class="room__icon">
                                <p class="room__text--title">Sustainability</p>
                            </article>
                            <p class="room__text--sustainability">
                                Solar powered, low-flow water systems
                            </p>
                        </article>

                        <button class="button room__button">Reserve Room</button>
                    </section>
                </article>

                <!--ROOM 3-->
                <article class="room-box">
                    <aside class="room__img-wrapper">
                        <img src="assets/photos/04-day.jpg" alt="Sustainable Studio" class="room__img">
                        <article class="room__score">
                            <img src="assets/icons/star.png" alt="Star" class="room__score-icon">
                            <p class="room__text">4.2</p>
                        </article>
                    </aside>
                    <section class="room__content">
                        <h3>Sustainable Studio</h3>

                        <aside class="room__price">
                            <h4 class="room__price--dollar">$149</h4>
                            <p class="room__price--text">per night</p>
                        </aside>

                        <article class="room__info">
                            <img src="assets/icons/users-round.svg" alt="People" class="room__icon">
                            <p class="room__text">Up to 2</p>
                            <p class="room__text">25 m2</p>
                        </article>
                        
                        <article class="room__info--features">
                            <article class="room__img-title">
                                <img src="assets/icons/wifi.svg" alt="Wifi" class="room__icon">
                                <p class="room__text--title">Features</p>
                            </article>
                            <article class="room__text--features">
                                <p>Double bed</p>
                                <p>Garden view</p>
                                <p>Eco-friendly Bath</p>
                            </article>
                        </article>
                        
                        <article class="room__info--ai">
                            <article class="room__img-title">
                                <img src="assets/icons/brain-purple.svg" alt="Brain" class="room__icon">
                                <p class="room__text--title">AI Features</p>
                            </article>
                            <article class="room__text--ai">
                                <p>Smart Lighting</p>
                                <p>Digital Concierge</p>
                            </article>
                        </article>

                        <article class="room__info--sustainability">
                            <article class="room__img-title">
                                <img src="assets/icons/leaf.svg" alt="Leaf" class="room__icon">
                                <p class="room__text--title">Sustainability</p>
                            </article>
                            <p class="room__text--sustainability">
                                Bamboo furniture, organic linens
                            </p>
                        </article>

                        <button class="button room__button">Reserve Room</button>
                    </section>
                </article>

                <!--ROOM 4-->
                <article class="room-box">
                    <aside class="room__img-wrapper">
                        <img src="assets/photos/05-day.jpg" alt="Nature's Haven" class="room__img">
                        <article class="room__score">
                            <img src="assets/icons/star.png" alt="Star" class="room__score-icon">
                            <p class="room__text">4.6</p>
                        </article>
                    </aside>
                    <section class="room__content">
                        <h3>Nature's Haven</h3>

                        <aside class="room__price">
                            <h4 class="room__price--dollar">$229</h4>
                            <p class="room__price--text">per night</p>
                        </aside>

                        <article class="room__info">
                            <img src="assets/icons/users-round.svg" alt="People" class="room__icon">
                            <p class="room__text">Up to 3</p>
                            <p class="room__text">40 m2</p>
                        </article>
                        
                        <article class="room__info--features">
                            <article class="room__img-title">
                                <img src="assets/icons/wifi.svg" alt="Wifi" class="room__icon">
                                <p class="room__text--title">Features</p>
                            </article>
                            <article class="room__text--features">
                                <p>King size bed</p>
                                <p>Forest View</p>
                                <p>Balcony</p>
                                <p>Air Purifier</p>
                            </article>
                        </article>
                        
                        <article class="room__info--ai">
                            <article class="room__img-title">
                                <img src="assets/icons/brain-purple.svg" alt="Brain" class="room__icon">
                                <p class="room__text--title">AI Features</p>
                            </article>
                            <article class="room__text--ai">
                                <p>Voice Control</p>
                                <p>Smart Lighting</p>
                                <p>Wellness Monitoring</p>
                            </article>
                        </article>

                        <article class="room__info--sustainability">
                            <article class="room__img-title">
                                <img src="assets/icons/leaf.svg" alt="Leaf" class="room__icon">
                                <p class="room__text--title">Sustainability</p>
                            </article>
                            <p class="room__text--sustainability">
                                Living plant walls, carbon-negative
                            </p>
                        </article>

                        <button class="button room__button">Reserve Room</button>
                    </section>
                </article>

                <!--ROOM 5-->
                <article class="room-box">
                    <aside class="room__img-wrapper">
                        <img src="assets/photos/07-day.jpg" alt="AI Presidential Suite" class="room__img">
                        <article class="room__score">
                            <img src="assets/icons/star.png" alt="Star" class="room__score-icon">
                            <p class="room__text">5.0</p>
                        </article>
                    </aside>
                    <section class="room__content">
                        <h3>AI Presidential Suite</h3>

                        <aside class="room__price">
                            <h4 class="room__price--dollar">$499</h4>
                            <p class="room__price--text">per night</p>
                        </aside>

                        <article class="room__info">
                            <img src="assets/icons/users-round.svg" alt="People" class="room__icon">
                            <p class="room__text">Up to 4</p>
                            <p class="room__text">80 m2</p>
                        </article>
                        
                        <article class="room__info--features">
                            <article class="room__img-title">
                                <img src="assets/icons/wifi.svg" alt="Wifi" class="room__icon">
                                <p class="room__text--title">Features</p>
                            </article>
                            <article class="room__text--features">
                                <p>2 King size beds</p>
                                <p>Panoramic View</p>
                                <p>Private Terrace</p>
                                <p>Luxury Bath</p>
                            </article>
                        </article>
                        
                        <article class="room__info--ai">
                            <article class="room__img-title">
                                <img src="assets/icons/brain-purple.svg" alt="Brain" class="room__icon">
                                <p class="room__text--title">AI Features</p>
                            </article>
                            <article class="room__text--ai">
                                <p>Full AI Suite</p>
                                <p>Predictive Service</p>
                                <p>Holographic Display</p>
                            </article>
                        </article>

                        <article class="room__info--sustainability">
                            <article class="room__img-title">
                                <img src="assets/icons/leaf.svg" alt="Leaf" class="room__icon">
                                <p class="room__text--title">Sustainability</p>
                            </article>
                            <p class="room__text--sustainability">
                                Net-zero carbon, rainwater harvesting
                            </p>
                        </article>

                        <button class="button room__button">Reserve Room</button>
                    </section>
                </article>


                <!--ROOM 6-->
                <article class="room-box">
                    <aside class="room__img-wrapper">
                        <img src="assets/photos/09-day.jpg" alt="Urban EcoLoft" class="room__img">
                        <article class="room__score">
                            <img src="assets/icons/star.png" alt="Star" class="room__score-icon">
                            <p class="room__text">5.0</p>
                        </article>
                    </aside>
                    <section class="room__content">
                        <h3>Urban EcoLoft</h3>

                        <aside class="room__price">
                            <h4 class="room__price--dollar">$179</h4>
                            <p class="room__price--text">per night</p>
                        </aside>

                        <article class="room__info">
                            <img src="assets/icons/users-round.svg" alt="People" class="room__icon">
                            <p class="room__text">Up to 2</p>
                            <p class="room__text">30 m2</p>
                        </article>
                        
                        <article class="room__info--features">
                            <article class="room__img-title">
                                <img src="assets/icons/wifi.svg" alt="Wifi" class="room__icon">
                                <p class="room__text--title">Features</p>
                            </article>
                            <article class="room__text--features">
                                <p>Queen size bed</p>
                                <p>High Ceiling</p>
                                <p>Natural Light</p>
                            </article>
                        </article>
                        
                        <article class="room__info--ai">
                            <article class="room__img-title">
                                <img src="assets/icons/brain-purple.svg" alt="Brain" class="room__icon">
                                <p class="room__text--title">AI Features</p>
                            </article>
                            <article class="room__text--ai">
                                <p>Smart Lighting</p>
                                <p>Digital Concierge</p>
                            </article>
                        </article>

                        <article class="room__info--sustainability">
                            <article class="room__img-title">
                                <img src="assets/icons/leaf.svg" alt="Leaf" class="room__icon">
                                <p class="room__text--title">Sustainability</p>
                            </article>
                            <p class="room__text--sustainability">
                                Upcycled furniture, zero waste
                            </p>
                        </article>

                        <button class="button room__button">Reserve Room</button>
                    </section>
                </article>
            </section>
        </section>
    </main>`;
                   
                container.style.opacity = "1";
            }, 400);
        } else {
            setTimeout(() => {
                const confirmation = document.createElement("main");
                document.getElementById("grabbag").innerHTML = `<p class="fill-out wrapper"> Must fill out check in and out.</p>`;
            
                container.style.opacity = "1";
            }, 400);
        }
    });
});
