  const navbarToggler = document.querySelector(".top-section .navbar-toggler");

  navbarToggler.addEventListener("click", () => {
    console.log("OTWARTE");
    const img = document.querySelector(".top-section .navbar-dark .navbar-toggler-icon").style.backgroundImage;
    console.log(img);
  });
