const PASSWORD = "070421";

const lockScreen = document.querySelector("#lockScreen");
const scrapbook = document.querySelector("#scrapbook");
const unlockForm = document.querySelector("#unlockForm");
const passwordInput = document.querySelector("#password");
const lockError = document.querySelector("#lockError");
const music = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
const musicLabel = document.querySelector("#musicLabel");

unlockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordInput.value.trim().toLowerCase() === PASSWORD) {
    lockScreen.classList.add("unlocking");
    window.setTimeout(() => {
      lockScreen.hidden = true;
      scrapbook.classList.remove("hidden");
      scrapbook.setAttribute("aria-hidden", "false");
      musicToggle.classList.remove("hidden");
      document.body.classList.add("is-open");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 650);
  } else {
    lockError.textContent = "Not quite — try another secret word.";
    unlockForm.classList.remove("shake");
    void unlockForm.offsetWidth;
    unlockForm.classList.add("shake");
  }
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.classList.add("playing");
      musicLabel.textContent = "Pause music";
    } catch (_) {
      musicLabel.textContent = "Music unavailable";
    }
  } else {
    music.pause();
    musicToggle.classList.remove("playing");
    musicLabel.textContent = "Play music";
  }
});

passwordInput.addEventListener("input", () => {
  lockError.textContent = "";
});
