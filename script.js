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
const likeButton = document.querySelector(".like-btn");

if (likeButton) {

    let liked = false;

    likeButton.addEventListener("click", () => {

        liked = !liked;

        if (liked) {
            likeButton.textContent = "❤️ Liked";
            likeButton.style.background = "#ff3366";
        } else {
            likeButton.textContent = "❤️ Like";
            likeButton.style.background = "#444";
        }

    });

}
