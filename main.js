document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let triple = [];
  let lastKeyTime = Date.now();
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }
  function playSound(e) {
    const charList = "123";
    const clicked = e.key.toLowerCase();
    if (charList.indexOf(clicked) === -1) return;
    document.getElementById("final").pause();
    document.getElementById("final").currentTime = 0;
    const currentTime = Date.now();
    if (currentTime - lastKeyTime > 1000) {
      triple = [];
    }
    triple.push(clicked);
    lastKeyTime = currentTime;
    const audio = document.querySelector(`audio[data-key="${clicked}"]`);
    const key = document.querySelector(`div[data-key="${clicked}"]`);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    if (triple[0] === "1" && triple[1] === "2" && triple[2] === "3") {
      document.getElementById("final").play();
    } 
  }
  const keys = Array.from(document.querySelectorAll(".key"));
  keys.map((key) => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
});
