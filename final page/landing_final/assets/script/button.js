var btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", function() {
  this.textContent = "Completed!";
})
btn.addEventListener("mouseout", function() {
  this.textContent = "New Request";
})