// function slowScrollToTop() {
//   const duration = 1200;
//   const start = window.scrollY;
//   const startTime = performance.now();
//   function scroll(curentTime) {
//     const elapsed = curentTime - startTime;
//     const progress = Math.min(elapsed / duration, 1);
//     window.scrollTo(0, start * (1 - progress));
//     if (progress < 1) {
//       requestAnimationFrame(scroll);
//     }
//   }
//   requestAnimationFrame(scroll);
// }
// const btn = document.getElementById("toTop"),
//   onclick = slowScrollToTop;

const btn = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// const audioBG = document.getElementById("bg");

// audioBG.addEventListener(
//   "click",
//   () => {
//     const audio = document.getElementById("bg");
//     audio.play();
//   },
//   { once: true }
// );
