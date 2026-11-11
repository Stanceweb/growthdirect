import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🔥 fade up animation
export const fadeUp = (element) => {
  if (!element) return;

  gsap.from(element, {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
};

// 🔥 left animation
export const slideLeft = (element) => {
  if (!element) return;

  gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
};

// 🔥 circular progress + count (FINAL FIX)
export const circularProgressWithCount = (
  circle,
  textEl,
  percentage = 95,
  triggerEl
) => {
  if (!circle || !textEl || !triggerEl) return;

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  const startOffset = circumference;
  const endOffset = circumference * (1 - percentage / 100);

  // reset state (IMPORTANT)
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = startOffset;
  textEl.innerText = "0%";

  let obj = { val: 0 };

  // ❌ timeline hata diya
  // ✅ direct ScrollTrigger use kar

  ScrollTrigger.create({
    trigger: triggerEl,
    start: "top 75%",
    once: true,

    onEnter: () => {
      // 🔥 circle animation
      gsap.to(circle, {
        strokeDashoffset: endOffset,
        duration: 2,
        ease: "power2.out",
      });

      // 🔥 number animation
      gsap.to(obj, {
        val: percentage,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          textEl.innerText = Math.round(obj.val) + "%";
        },
      });
    },
  });
};