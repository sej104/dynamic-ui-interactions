const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
const images = document.querySelectorAll(".container div");

leftButton.addEventListener("click", () => {
  images.forEach((image) => {
    const amount = parseInt(image.style.right, 10) - 800;

    if (isNaN(amount) || amount < 0) {
      image.style.right = "3200px";
    } else {
      image.style.right = `${amount}px`;
    }
  });
});

rightButton.addEventListener("click", () => {
  images.forEach((image) => {
    const amount = parseInt(image.style.right, 10) + 800;

    if (!amount) {
      image.style.right = "800px";
    } else if (amount === 4000) {
      image.style.right = "0px";
    } else {
      image.style.right = `${amount}px`;
    }
  });
});
