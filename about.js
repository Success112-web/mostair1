 let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
      slides.forEach(slide => slide.style.display = "none");
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    document.addEventListener("DOMContentLoaded", () => {
      showSlides();
      console.log("About page ready.");
    });
  
