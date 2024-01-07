// Get references to the elements
var darkBtn = document.getElementById("dark-btn");
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

// Toggle function for button
darkBtn.onclick = () => {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    sun.classList.add("d-none");
    moon.classList.remove("d-none");

  } else {
    localStorage.setItem("theme", "light");
    moon.classList.add("d-none");
    sun.classList.remove("d-none");
  }
};

// Logic for adding/removing classes on load
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
  moon.classList.add("d-none");
  sun.classList.remove("d-none");
}
else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
  sun.classList.add("d-none");
  moon.classList.remove("d-none");
}
else {
  localStorage.setItem("theme", "light");
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
  moon.classList.add("d-none");
  sun.classList.remove("d-none");
}

// Get theme from local storage
localStorage.getItem("theme");