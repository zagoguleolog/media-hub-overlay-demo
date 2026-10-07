const root = document.documentElement;
const clock = document.querySelector("#clock");
const viewport = document.querySelector("#viewport");
const blurStatus = document.querySelector("#blur-status");
const motionStatus = document.querySelector("#motion-status");

const hasBlur = CSS.supports("backdrop-filter", "blur(1px)")
  || CSS.supports("-webkit-backdrop-filter", "blur(1px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const params = new URLSearchParams(window.location.search);
const motionEnabled = params.get("motion") !== "0" && !reducedMotion;

function updateClock() {
  clock.textContent = new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function updateViewport() {
  viewport.textContent = `${window.innerWidth}×${window.innerHeight}`;
}

blurStatus.textContent = hasBlur ? "supported" : "fallback";
motionStatus.textContent = motionEnabled ? "on" : "off";
root.classList.toggle("no-blur", !hasBlur);
root.classList.toggle("no-motion", !motionEnabled);

updateClock();
updateViewport();
window.setInterval(updateClock, 1000);
window.addEventListener("resize", updateViewport, { passive: true });
