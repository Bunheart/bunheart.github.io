var darkMode = false;

document.addEventListener("headerLoaded", function () {
  const body = document.getElementById("content");
  const button = document.getElementById("themeButton");

  if (button) {
    button.addEventListener("click", function () {
        if (body.classList.contains("darkMode"))
        {
          body.classList = null;
          button.innerHTML = "☾";
        }
        else
        {
          body.classList = "darkMode";
          button.innerHTML = "☀";
        }
        
    });
  }
  else
  {
    console.warn('Dark mode toggle not found.');
  }
});