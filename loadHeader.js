document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      document.dispatchEvent(new Event('headerLoaded'));
      console.log("header loaded")
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });
});