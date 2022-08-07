const ratings = document.querySelectorAll('.card__rating');

// ratings hover states
ratings.forEach(rating => rating.addEventListener('mouseover', (e) => {
  const currentIndex = e.target.innerText;
  // console.log(currentIndex);
  
  if(currentIndex != 1){
    rating.previousElementSibling.classList.add('grey-hover');
  }
  if(currentIndex != 5){
    rating.nextElementSibling.classList.add('grey-hover');
  }
}));

ratings.forEach(rating => rating.addEventListener('mouseleave', (e) => {
  const currentIndex = e.target.innerText;

  if(currentIndex != 1){
    rating.previousElementSibling.classList.remove('grey-hover');
  }
  if(currentIndex != 5){
    rating.nextElementSibling.classList.remove('grey-hover');
  }
}));

// click events
ratings.forEach(rating => rating.addEventListener('click', function() {
  for(i = 0; i < ratings.length; i++){
    ratings[i].className = 'card__rating default';
  }

  let itemClass = this.className;
  // console.log(itemClass);
  
  if(itemClass === 'card__rating default'){
    this.className = 'card__rating clicked';
  }
}));