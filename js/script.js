console.log("script.js is connected!");

const bioHeading = document.querySelector("#bio-heading");
console.log(bioHeading);

const factBtn = document.querySelector("#fact-btn");
const funFact = document.querySelector("#fun-fact");

if (factBtn && funFact) {
  factBtn.addEventListener("click", function () {
    funFact.style.display = "block";
  });
}

const FavoriteCarBtn = document.querySelector("#Favorite_Car_Btn");
const FavoriteCar = document.querySelector("#Favorite_Car");

if (FavoriteCarBtn && FavoriteCar) {
  FavoriteCarBtn.addEventListener("click", function () {
    FavoriteCar.style.display = "block";
  });
}

const skillPills = document.querySelectorAll(".skill-pill");

skillPills.forEach(function (pill) {
  pill.addEventListener("click", function () {
    const detail = pill.querySelector(".skill-detail");

    if (detail) {
      detail.style.display = "inline";
    }
  });
});

const darkModeToggle = document.querySelector("#dark-mode-toggle");

if (darkModeToggle) {
  // Load saved setting
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
}

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  observer.observe(section);
});

const typewriterTitles = document.querySelectorAll(".typewriter-title");

typewriterTitles.forEach((title) => {
  const textLength = title.textContent.length;

  title.style.setProperty("--characters", textLength);

  title.style.animation = `
    typing ${textLength * 0.12}s steps(${textLength}, end) forwards,
    blink-caret 0.75s step-end infinite
  `;
});

console.log("If you are reading this ... GET OUTA THE CONSOLE >:(");