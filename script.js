document.addEventListener("DOMContentLoaded", () => {
  console.log("Monsta Live is running!");

  const button = document.querySelector(".button");

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Welcome to Monsta Live! More features are coming soon.");
    });
  }
});
