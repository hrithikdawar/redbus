let currentIndex = 0;

function moveSlide(direction) {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  
  // Calculate the new index with wrapping
  currentIndex = (currentIndex + direction + totalCards) % totalCards;
  
  // Move the slider to the correct position
  const newTransformValue = -currentIndex * (cards[0].offsetWidth + 30); // Adjust for margin between cards
  document.querySelector('.card-slider').style.transform = `translateX(${newTransformValue}px)`;
}


// + button function 


const button = document.getElementById("fun");
const func = document.querySelector(".func");

button.addEventListener("click", () => {
  func.classList.toggle("show");
  
 
  if (func.classList.contains("show")) {
    button.textContent = "-"; 
  } else {
    button.textContent = "+";
  }
});


