// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".falling-image");
  const container = document.querySelector(".falling-images-wrapper");

  setInterval(function() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const column = Math.random() < 0.5 ? "left" : "right";
    const randomOffset = getRandomNumber(10, container.offsetWidth - randomImage.offsetWidth - 60);
    const randomVerticalOffset = getRandomNumber(120, container.offsetHeight - randomImage.offsetHeight - 120);

    randomImage.style[column] = randomOffset + "px";
    randomImage.style.top = randomVerticalOffset + "px";
    randomImage.style.opacity = 1;

    setTimeout(function() {
      randomImage.style.opacity = 0;
    }, 6000); // Fading out after 6 seconds (80% of 8 seconds)
  }, 8000); // Showing a new image every 8 seconds

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
