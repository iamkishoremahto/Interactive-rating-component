let allRatings = document.querySelectorAll('.rate_us ul li');
let submitButton = document.querySelector('.submit_button button');

allRatings.forEach((rate) => {
    rate.addEventListener('click', () => {
        allRatings.forEach((rate2) => {
            rate2.classList.remove('rate_click');
        });
        rate.classList.add('rate_click');
    });
});

submitButton.addEventListener('click', () => {
    let currentRating;
    try{
       currentRating = document.querySelector('.rate_click').textContent;
    }
    catch(e){   
        currentRating = false;
    }
    
    let updateBox = document.querySelector('.rating_component');
    const htmlTemplate = ` <div class="feedback_success_image">
                                <img src="/images/illustration-thank-you.svg" alt="thank you" class="img-fluid success_image">
                            </div>

                            <div class="selected_ratings">
                                <p>You selected <span id="selected_rate">${currentRating}</span> out of 5</p>
                            </div>

                            <div class="thank_you_content">
                                <h3>Thank you!</h3>
                                <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                            </div>`
    if(currentRating){
        updateBox.innerHTML = htmlTemplate;
        updateBox.classList.add('get_rating')
    }
    else{
        alert('Please select a rating ');
    }

    
});