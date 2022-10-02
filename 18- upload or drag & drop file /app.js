document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  
  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });
