const showContent = (e) => {
  const dropDownMenuItem = e.target.closest(".drop-down-menu");
  if (!dropDownMenuItem) return;

  const activeDropDown = document.querySelector(".active");
  const selectedDropDown = dropDownMenuItem.nextElementSibling;

  if (!activeDropDown) {
    selectedDropDown.classList.add("active");
    selectedDropDown.classList.remove("hidden");
  } else if (activeDropDown === selectedDropDown) {
    activeDropDown.classList.remove("active");
    activeDropDown.classList.add("hidden");
  } else if (activeDropDown !== selectedDropDown) {
    activeDropDown.classList.remove("active");
    activeDropDown.classList.add("hidden");
    selectedDropDown.classList.add("active");
    selectedDropDown.classList.remove("hidden");
  }
};

const menuItems = document.querySelector(".menu-items");
menuItems.addEventListener("click", showContent);
