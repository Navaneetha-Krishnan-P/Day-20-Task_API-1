
const newAdviceBtn = document.getElementById("new-advice-btn");
newAdviceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "advice-title"
      ).innerText = `Advice - ${data.slip.id}`;
      document.getElementById("advice-text").innerText = data.slip.advice;
      document.body.style.backgroundImage = `url(https://source.unsplash.com/random/1600x900?sig=${data.slip.id})`;
    });
});


document.getElementById("advice-title").innerText = `Advice - 1`;
document.getElementById("advice-text").innerText = "Loading...";
document.body.style.backgroundImage = `url(https://source.unsplash.com/random/1600x900?sig=1)`;


window.onload = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "advice-title"
      ).innerText = `Advice - ${data.slip.id}`;
      document.getElementById("advice-text").innerText = data.slip.advice;
      document.body.style.backgroundImage = `url(https://source.unsplash.com/random/1600x900?sig=${data.slip.id})`;
    });
};
