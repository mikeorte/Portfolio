/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading, .skills-box", {
  origin: "top",
});
ScrollReveal().reveal(".home-img, .services-container, .filter-buttons", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

/*==================== typed js ====================*/
const typed = new Typed(".typing-text", {
  strings: [
    "Programmer",
    "Web Developer",
    "Backend Developer",
    "Software Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*==================== EmailJS Integration ====================*/
document.addEventListener("DOMContentLoaded", function () {
  (function () {
    emailjs.init("-wTVg3isd-303RTR9");
  })();

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "service_fm31r8w";
      const templateID = "template_tooog9r";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          alert("Your message has been sent successfully!");
          document.getElementById("contact-form").reset();
        },
        (err) => {
          alert("Failed to send the message. Please try again later.");
          console.error("Failed to send email:", err);
        }
      );
    });
});

/*==================== Data Filters ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");

  // Display all portfolio boxes initially
  portfolioBoxes.forEach((box) => {
    box.style.display = "block";
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      portfolioBoxes.forEach((box) => {
        if (
          filter === "all" ||
          box.getAttribute("data-tags").includes(filter)
        ) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });
});
