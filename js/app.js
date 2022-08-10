const card = document.querySelector('.card'),
      ratings = document.querySelectorAll('.card__rating'),
      form = document.querySelector('.card__form');

function ratingsUi(){
  // click events
  ratings.forEach(rating => rating.addEventListener('click', function() {
    for(i = 0; i < ratings.length; i++){
      ratings[i].className = 'card__rating';
    }

    let itemClass = this.className;
    // console.log(itemClass);
    
    if(itemClass === 'card__rating'){
      this.className = 'card__rating clicked';
    }
  }));
  
  // ratings hover states
  ratings.forEach(rating => rating.addEventListener('mouseover', (e) => {
    const currentIndex = e.target.innerText;
    // console.log(currentIndex);
    // console.log(ratings.length);
    
    if(currentIndex != 1){
      rating.previousElementSibling.classList.add('grey-hover');
    }
    if(currentIndex != ratings.length){
      rating.nextElementSibling.classList.add('grey-hover');
    }
  }));

  ratings.forEach(rating => rating.addEventListener('mouseleave', (e) => {
    const currentIndex = e.target.innerText;

    if(currentIndex != 1){
      rating.previousElementSibling.classList.remove('grey-hover');
    }
    if(currentIndex != ratings.length){
      rating.nextElementSibling.classList.remove('grey-hover');
    }
  }));
}

ratingsUi();

form.addEventListener('submit', thankYou);

const boo = '4';

function thankYou(){
  card.innerHTML = `
    <img src="/images/illustration-thank-you.svg" alt="thank-you" class="card__thankyou--img">
    <div class="card__selected--container">
      <p class="card__selected">You selected ${boo} out of 5</p>
    </div>
    <h1 class="card__header">Thank you!</h1>
    <p class="card__desc">
      We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!
    </p>
  `;

  card.style.textAlign = 'center';
}