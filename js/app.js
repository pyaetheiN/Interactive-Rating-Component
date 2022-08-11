const card = document.querySelector('.card'),
      ratings = document.querySelectorAll('.card__rating'),
      form = document.querySelector('.card__form'),
      btn = document.querySelector('.card__btn');

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
      
      saveSelection(this.innerText);
      // console.log(this.innerText);
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

function thankYou(e){
  for(i = 0; i < ratings.length; i++){
    if(ratings[i].classList.contains('clicked')){
      const selectedRating = JSON.parse(localStorage.getItem('selectedRating'));
      card.style.textAlign = 'center';
      card.innerHTML = `
        <img src='../images/illustration-thank-you.svg' alt="thank-you" class="card__thankyou--img">
        <div class="card__selected--container">
          <p class="card__selected">You selected ${selectedRating} out of 5</p>
        </div>
        <h1 class="card__header">Thank you!</h1>
        <p class="card__desc">
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p> `;
    } else{
      e.preventDefault();
    }
  }
}

function saveSelection(rating){
  let selectedRating;

  if(localStorage.getItem('selectedRating') === null){
    selectedRating = [];
  } else{
    selectedRating = JSON.parse(localStorage.getItem('selectedRating'));
  }

  selectedRating.shift(); // removes first item of the array
  selectedRating.push(rating); // adds new item at the end of the array

  localStorage.setItem('selectedRating', JSON.stringify(selectedRating));
}

ratingsUi();

form.addEventListener('submit', thankYou);

// for mobile hover effects
btn.addEventListener('click', function() {
  for(i = 0; i < ratings.length; i++){
    if(ratings[i].classList.contains('clicked')){
      return;
    } else{
      btn.classList.toggle('no-hover');
    }
  }
})
