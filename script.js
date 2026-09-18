const scenes = [...document.querySelectorAll(".scene")];
const progressDots = [...document.querySelectorAll(".progress-dot")];
let currentSceneIndex = 0;

function showScene(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showScene(button.dataset.next));
});

// Reveal each element only when its scene enters the viewport.
// This creates the "part by part" progression requested by the user.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Keep only one scene marked as active, so mobile and desktop share the same visual logic.
const sceneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const index = Number(entry.target.dataset.scene);
      currentSceneIndex = index;

      scenes.forEach((scene) => scene.classList.remove("active"));
      entry.target.classList.add("active");

      progressDots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === currentSceneIndex);
      });
    });
  },
  { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
);

scenes.forEach((scene) => sceneObserver.observe(scene));

// Intro begins already visible.
document.querySelector("#scene-intro")?.querySelectorAll(".reveal").forEach((el) => {
  requestAnimationFrame(() => el.classList.add("visible"));
});

// Safety fallback: make sure the letter card itself cannot remain hidden
// on a mobile browser that delays IntersectionObserver notifications.
const firstLetterCard = document.querySelector("#scene-letter .letter-card");
if (firstLetterCard) {
  setTimeout(() => firstLetterCard.classList.add("visible"), 1200);
}
