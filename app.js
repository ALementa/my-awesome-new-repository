const btn = document.getElementById("toTop");

btn.addEventListener("click", () => {
  document.window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener(
  "click",
  () => {
    const audio = document.getElementById("bg");
    audio.play();
  },
  { once: true }
);
