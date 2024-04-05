document.addEventListener("DOMContentLoaded", function () {
  const shareIcon = document.querySelector(".share-icon img");
  const shareIcons = document.querySelector("#share");

  shareIcon.addEventListener("click", function () {
    shareIcons.classList.toggle("hidden");
  });
});
