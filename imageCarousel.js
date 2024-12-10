const images = document.querySelectorAll(".container div");
const lastImagePositionValue = (images.length - 1) * 800;

const displayPreviousImage = () => {
  images.forEach((image) => {
    const positionValue = parseInt(image.style.right, 10) - 800;

    if (Number.isNaN(positionValue) || positionValue < 0) {
      image.style.right = `${lastImagePositionValue}px`;
    } else {
      image.style.right = `${positionValue}px`;
    }
  });
};

const displayNextImage = () => {
  images.forEach((image) => {
    const positionValue = parseInt(image.style.right, 10) + 800;

    if (Number.isNaN(positionValue)) {
      image.style.right = "800px";
    } else if (positionValue > lastImagePositionValue) {
      image.style.right = "0px";
    } else {
      image.style.right = `${positionValue}px`;
    }
  });
};

const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");

leftButton.addEventListener("click", displayPreviousImage);
rightButton.addEventListener("click", displayNextImage);
