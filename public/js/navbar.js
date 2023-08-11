
  const toggleBtn = document.getElementById("toggle-nav");
  const section = document.getElementById("nav");
  const body = document.getElementsByTagName("body")[0];

  toggleBtn.addEventListener("click", () => {
    section.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
  });

  const toggleBtnClose = document.getElementById("toggle-nav-close");
  // const section = document.getElementById('nav');

  toggleBtnClose.addEventListener("click", () => {
    section.classList.toggle("hidden");
    body.classList.remove("no-scroll");
  });

  const dropBtn = document.getElementById("drop-btn");
  const dropSection = document.getElementById("drop-section");

  dropBtn.addEventListener("click", () => {
    dropSection.classList.toggle("hidden");
  });
