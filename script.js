document.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementById("container");
  const modalImage = document.getElementById("modal-image");
  const modal = document.getElementById("modal");

  const images = container.querySelectorAll("img");

  // Adding click event listeners to each image in the container
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
      modalImage.src = images[i].src; // Set the clicked image as the source for the modal image
      modal.classList.remove("no-display"); // Show the modal
    });
  }

  // Adding a click event listener to the modal itself for closing
  modal.addEventListener("click", function (event) {
    // Close the modal only if the clicked target is the modal itself, not the image inside it
    if (event.target === modal) {
      modal.classList.add("no-display");
    }
  });
});
