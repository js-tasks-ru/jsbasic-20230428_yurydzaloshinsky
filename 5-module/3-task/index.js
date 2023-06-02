function initCarousel() {
  const buttonLeft = document.querySelector(".carousel__arrow_left");
  const buttonRight = document.querySelector(".carousel__arrow_right");
  const inner = document.querySelector('.carousel__inner');
  const innerWidth = inner.offsetWidth;
  const sliderLength = document.querySelectorAll('.carousel__slide').length;
  
  let slideCounter = 0;

  currentPosition(slideCounter, buttonRight, buttonLeft, sliderLength);
     
  buttonLeft.addEventListener( "click", () => {
    slideCounter--;
    inner.style.transform = `translateX(-${slideCounter * innerWidth}px)`;
    currentPosition(slideCounter, buttonRight, buttonLeft, sliderLength);
  });
  
  buttonRight.addEventListener( "click", () => {
    slideCounter++;
    inner.style.transform = `translateX(-${slideCounter * innerWidth}px)`;
    currentPosition(slideCounter, buttonRight, buttonLeft, sliderLength);
  });
   
}

function currentPosition (slideCounter, buttonRight, buttonLeft, sliderLength) {
  if (slideCounter === 0) {
    buttonLeft.style.display = 'none';
  } else {
    buttonLeft.style.display = '';
  }
  
  if (slideCounter >= sliderLength -1) {
    buttonRight.style.display = 'none';
  } else {
    buttonRight.style.display = '';
  }
  
}

