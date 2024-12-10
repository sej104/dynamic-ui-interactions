const toggleClassLists = (dropDown) => {
  dropDown.classList.toggle("active");
  dropDown.classList.toggle("hidden");
};

const toggleDropDown = (e) => {
  const dropDownMenuItem = e.target.closest(".drop-down-menu");
  if (!dropDownMenuItem) return;

  const activeDropDown = document.querySelector(".active");
  const selectedDropDown = dropDownMenuItem.nextElementSibling;

  if (!activeDropDown) {
    toggleClassLists(selectedDropDown);
  }

  if (activeDropDown === selectedDropDown) {
    toggleClassLists(activeDropDown);
  }

  if (activeDropDown !== selectedDropDown) {
    toggleClassLists(activeDropDown);
    toggleClassLists(selectedDropDown);
  }
};

const menuItems = document.querySelector(".menu-items");
menuItems.addEventListener("click", toggleDropDown);
