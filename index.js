  const navbarToggler = document.querySelector(".top-section .navbar-toggler");

  navbarToggler.addEventListener("click", () => {
    if(navbarToggler.getAttribute("aria-expanded")==="true"){
      console.log("OTWARTE");
      document.querySelector(".top-section").style.background = "black";
      document.querySelector(".top-section h1").style.display = "none";
      document.querySelector(".top-section .navbar-dark .navbar-toggler-icon").style.backgroundImage = "url('./images/icon-close.svg')";
      document.querySelector(".top-section .navbar-dark .navbar-toggler-icon").style.width = "1.125rem";
    } else {
        document.querySelector(".top-section h1").style.display = "block";
        document.querySelector(".top-section").style.background = "url('./images/mobile/image-hero.jpg') no-repeat center center";
        document.querySelector(".top-section").style.backgroundSize = "cover";
        document.querySelector(".top-section .navbar-dark .navbar-toggler-icon").style.backgroundImage = "url('./images/icon-hamburger.svg')";
    }
  });
