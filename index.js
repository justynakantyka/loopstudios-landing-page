  const navbarToggler = document.querySelector(".top-section .navbar-toggler");

  navbarToggler.addEventListener("click", () => {
    if(navbarToggler.getAttribute("aria-expanded")==="true"){
      console.log("OTWARTE");
      document.querySelector(".top-section").style.background = "black";
    } else {
        document.querySelector(".top-section").style.background = "url('./images/mobile/image-hero.jpg') no-repeat center center";
        document.querySelector(".top-section").style.backgroundSize = "cover";
    }
  });
