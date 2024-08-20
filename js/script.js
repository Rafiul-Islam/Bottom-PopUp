(() =>
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("kanivatonga-donation-popup-status") !== "hide") {
      const popup = document.querySelector(".popup");
      popup.classList.remove("hide");
      const roundButton = document.querySelector(".round-button");
      roundButton.addEventListener("click", () => {
        popup.classList.toggle("expanded");
        popup.classList.toggle("collapsed");
      });

      const popupCloseButton = document.querySelector(".close-popup-icon");
      popupCloseButton.addEventListener("click", () => {
        popup.remove();
        localStorage.setItem("kanivatonga-donation-popup-status", "hide");
      });
    }
  }))();
