// the background image changer functionality
let currentIndex = 0; // Keeps track of the current image index
const images = [
  'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/160/224/original/7.png?1741941721")',
  'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/160/223/original/1.png?1741941456")',
  'url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/160/225/original/6.jpg?1741941754")',
];
function changeBackground() {
  // Set the background image to the current index
  document.querySelector(".main-section").style.backgroundImage =
    images[currentIndex];

  // Increment the index, and reset it back to 0 if it exceeds the array length
  currentIndex = (currentIndex + 1) % images.length;
}
// Change the background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);
changeBackground();

// the navbar menu
document.addEventListener("DOMContentLoaded", function () {
  // Get the hamburger menu and the navigation links
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    // Toggle the 'active' class to show or hide the navigation links
    navLinks.classList.toggle("active");
  });
});

const slides = document.querySelectorAll(".slide");

const slider = document.querySelector(".slider");

let currentIndex2 = 2; // Start with the third image as the main one

let autoPlayInterval; // Variable to store auto-play interval

function updateSlider() {
  // Shift the slider so that the currentIndex2 image is centered

  const offset = -((currentIndex2 - 1) * (100 / 3)); // Moves slider left

  slider.style.transform = `translateX(${offset}%)`;

  // Adjust styles for all images

  slides.forEach((slide, index) => {
    slide.classList.remove("active");

    slide.style.width = "30%";

    slide.style.opacity = "0.7";

    slide.style.transform = "scale(1)";
  });

  // Apply active class to the centered image

  slides[currentIndex2].classList.add("active");

  slides[currentIndex2].style.width = "40%";

  slides[currentIndex2].style.opacity = "1";

  slides[currentIndex2].style.transform = "scale(1.2)";
}

// Function to move to the next image

function nextSlide() {
  currentIndex2 = (currentIndex2 + 1) % slides.length; // Loop back to the start

  updateSlider();
}

// Start Auto-Play

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000); // Change every 3 seconds
}

// Stop Auto-Play when clicking an image

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    if (index !== currentIndex2) {
      currentIndex2 = index;

      updateSlider();

      clearInterval(autoPlayInterval); // Stop auto-play
    }
  });
});

// Initialize slider and auto-play

updateSlider();
startAutoPlay();
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000, // Slides will change every 3 seconds
    disableOnInteraction: false, // Keeps autoplay running even after user interaction
  },
  speed: 1000, // Smooth transition speed (1 second)
  loop: true, // Enables infinite scrolling
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allows pagination dots to be clickable
  },
});
function booknow() {
  alert(
    "This is a demo project! If like it I can create a real one like this for you."
  );
}


document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    // Create parameters for EmailJS
    let params = {
      name: name,
      email: email,
      message: message,
      to_email: "marwamohmand13@gmail.com", // Replace with your client's email
    };

    // Send email using EmailJS
    emailjs.send("service_ur9b2io", "template_a38sj5v", params).then(
      function (response) {
        console.log("Email sent to client:", response);
        alert("Thank you for your message! We will get back to you soon.");
      },
      function (error) {
        console.error("Failed to send email:", error);
        alert("Something went wrong. Please try again.");
      }
    );

    // Optionally, you can send an auto-response to the person who filled out the form
    let senderParams = {
      name: name,
      email: email,
      message: message,
      to_email: email, // Send auto-response to the form submitter
      subject: "Thank you for contacting us!",
      message_body:
        "Hi " +
        name +
        ",\n\nThank you for reaching out! We have received your message and will get back to you soon.",
    };

    emailjs.send("service_ur9b2io", "template_zvatfcg", senderParams).then(
      function (response) {
        console.log("Auto-response email sent:", response);
      },
      function (error) {
        console.error("Failed to send auto-response:", error);
      }
    );
  });
