//Dynamic Clock
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = `Time: ${now.toLocaleTimeString()}`;
}
setInterval(updateClock, 1000);
updateClock();

// Dark/Light Mode
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("modeToggle");
  btn.textContent = document.body.classList.contains("dark-mode")
    ? "☀ Light Mode"
    : "🌙 Dark Mode";
});

// Search Filter
function filterFeatures() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const items = document.querySelectorAll("#featureList li");

  items.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(input)
      ? "block"
      : "none";
  });
}
document.getElementById("searchBox").addEventListener("keyup", filterFeatures);

// Sorting 
function sortFeatures(order = "asc") {
  const list = document.getElementById("featureList");
  const itemsArray = Array.from(list.querySelectorAll("li"));

  itemsArray.sort((a, b) => {
    const textA = a.textContent.toLowerCase();
    const textB = b.textContent.toLowerCase();
    return order === "asc"
      ? textA.localeCompare(textB)
      : textB.localeCompare(textA);
  });

  itemsArray.forEach((item) => list.appendChild(item));
}

document
  .getElementById("sortAsc")
  .addEventListener("click", () => sortFeatures("asc"));
document
  .getElementById("sortDesc")
  .addEventListener("click", () => sortFeatures("desc"));

// Image Slider
let currentSlide = 0;
const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];

function showSlide(index) {
  const slideImg = document.getElementById("slide");
  if (index < 0) currentSlide = images.length - 1;
  else if (index >= images.length) currentSlide = 0;
  else currentSlide = index;
  slideImg.src = images[currentSlide];
}

function next() {
  showSlide(currentSlide + 1);
}
function prev() {
  showSlide(currentSlide - 1);
}

// Navigation Menu Toggle
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("hidden");
});

// Search Filter for Features 
document.getElementById("searchBox").addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();
  const items = document.querySelectorAll("#featureList li");
  items.forEach((li) => {
    li.style.display = li.textContent.toLowerCase().includes(filter)
      ? "block"
      : "none";
  });
});

// Tabs
function showTab(tabId) {
  document
    .querySelectorAll(".tabContent")
    .forEach((tab) => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

// Price Calculation 
document.getElementById("qty").addEventListener("input", function () {
  const qty = parseInt(this.value) || 1;
  const pricePerItem = 4999;
  document.getElementById("totalPrice").textContent = qty * pricePerItem;
});

// Live Form Validation
document.getElementById("email").addEventListener("input", function () {
  const feedback = document.getElementById("emailFeedback");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  feedback.textContent = emailPattern.test(this.value) ? "" : "Invalid Email!";
});

document.getElementById("password").addEventListener("input", function () {
  const feedback = document.getElementById("passwordFeedback");
  feedback.textContent =
    this.value.length >= 6 ? "" : "Password must be at least 6 characters!";
});

// Form Submission
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    !document.getElementById("emailFeedback").textContent &&
    !document.getElementById("passwordFeedback").textContent
  ) {
    alert("Order placed successfully!");
  } else {
    alert("Fix errors before submitting!");
  }
});

// Add Review 
function addReview() {
  const reviewText = document.getElementById("reviewText").value.trim();
  if (reviewText === "") {
    alert("Please enter a review.");
    return;
  }
  const reviewDiv = document.createElement("div");
  reviewDiv.textContent = reviewText;
  document.getElementById("reviewList").appendChild(reviewDiv);
  document.getElementById("reviewText").value = "";
}

document.getElementById("searchBox").addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();
  const items = document.querySelectorAll("#featureList li");
  items.forEach((li) => {
    li.style.display = li.textContent.toLowerCase().includes(filter)
      ? "block"
      : "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const featureList = document.getElementById("featureList");
  const features = featureList.getElementsByTagName("li");

  searchBox.addEventListener("keyup", function () {
    const filter = searchBox.value.toLowerCase();

    for (let i = 0; i < features.length; i++) {
      const text = features[i].textContent.toLowerCase();
      if (text.includes(filter)) {
        features[i].style.display = "";
      } else {
        features[i].style.display = "none";
      }
    }
  });
});
