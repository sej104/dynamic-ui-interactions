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

const selectImage = (e) => {
  const navigationButton = e.target.closest("button");
  if (!navigationButton) return;

  const activeNavigationButton = document.querySelector("#active");
  activeNavigationButton.id = "";

  navigationButton.id = "active";
  const index = navigationButton.dataset.index;

  images.forEach((image) => {
    image.style.right = `${index * 800}px`;
  });
};

const switchSlides = () => {
  setInterval(displayNextImage, 5000);
};

const leftChevron = document.querySelector("#left-chevron");
leftChevron.addEventListener("click", displayPreviousImage);

const rightChevron = document.querySelector("#right-chevron");
rightChevron.addEventListener("click", displayNextImage);

const navigationContainer = document.querySelector(".navigation");
navigationContainer.addEventListener("click", selectImage);

switchSlides();
