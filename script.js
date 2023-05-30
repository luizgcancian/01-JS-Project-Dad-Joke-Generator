const btnEl = document.querySelector("#btn");
const apiKey = "YOB1vZc/SooPSO0AM1M25Q==2c3ZBjJCXIepxTJE";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const joke = document.querySelector("#joke");

const options = {
  method: "GET",
  headers: {
    "X-Api-KEY": apiKey,
  },
};

btnEl.addEventListener("click", getJoke);

async function getJoke() {
  try {
    joke.innerText = "Updating...";
    btn.disabled = true;
    btn.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    joke.innerText = data[0].joke;
    btn.disabled = false;
    btn.innerText = "tell me a joke";
  } catch (error) {
    joke.innerText = "An error happened, try again later.";
  }
}
