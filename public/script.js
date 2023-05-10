/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// Load the saved theme preference from localStorage
const savedTheme = localStorage.getItem("theme");
window.onload = () => {
  if (savedTheme === "dark") {
    document.getElementById("inputSwitch").checked = true;
    setTheme("dark");
  }
};

function toggle() {
  const inputSwitch = document.getElementById("inputSwitch");
  if (inputSwitch.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setTheme(theme) {
  const body = document.getElementsByTagName("body")[0];
  let header = document.getElementsByTagName("header")[0];
  if(!header)
    header = document.getElementsByTagName("nav")[0];

  if (theme === "dark") {
    body.dataset.bsTheme = "dark";
    header.classList.replace("bg-teal-200", "bg-sky-900");
    body.classList.replace("text-stone-600", "text-stone-100");
    localStorage.setItem("theme", "dark"); // Save the theme preference to localStorage
  } else {
    body.dataset.bsTheme = "light";
    header.classList.replace("bg-sky-900", "bg-teal-200");
    body.classList.replace("text-stone-100", "text-stone-600");
    localStorage.setItem("theme", "light"); // Save the theme preference to localStorage
  }
}