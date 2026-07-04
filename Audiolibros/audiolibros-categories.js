document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // --- 1. Initial Reveal Timeline ---
  const tl = gsap.timeline();

  // Set up SVG lines for drawing animation
  const paths = document.querySelectorAll(".line-path");
  paths.forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  });

  tl.from(".gsap-fade", { opacity: 0, duration: 1, ease: "power2.out" })
    .from(
      ".gsap-scale",
      { scale: 0, opacity: 0, duration: 1.2, ease: "back.out(1.2)" },
      "-=0.8"
    )
    .from(
      ".gsap-pop",
      {
        scale: 0,
        rotation: -30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(2)"
      },
      "-=0.6"
    )
    .to(
      ".line-path",
      {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: { amount: 0.5, from: "center" }
      },
      "-=0.4"
    )
    .from(
      ".icon-node",
      {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)"
      },
      "-=1.2"
    )
    .from(
      ".gsap-slide-up",
      { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
      "-=0.8"
    );

  // --- 2. Continuous Organic Floating ---
  gsap.utils.toArray(".float-anim").forEach((node, i) => {
    gsap.to(node, {
      y: "-=8",
      rotation: "2",
      duration: 2.5 + i * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.1
    });
  });
  gsap.utils.toArray(".float-anim-alt").forEach((node, i) => {
    gsap.to(node, {
      y: "+=8",
      rotation: "-2",
      duration: 2.8 + i * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.15
    });
  });
  gsap.to(".float-slow", {
    y: "-=5",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // --- 3. Interactive Hover Effect on Nodes ---
  const nodes = document.querySelectorAll(".icon-node");
  nodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      gsap.to(node, {
        scale: 1.15,
        duration: 0.3,
        ease: "back.out(2)",
        overwrite: "auto"
      });
    });
    node.addEventListener("mouseleave", () => {
      gsap.to(node, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });

  // --- 5. Click to navigate to each era's titulos page ---
  const eraPages = {
    "ERA I": "titulos/era-1-slug.html",
    "ERA II": "titulos/era-2-slug.html",
    "ERA III": "titulos/era-3-slug.html",
    "ERA IV": "titulos/era-4-slug.html"
  };

  nodes.forEach((node) => {
    node.style.cursor = "pointer";
    node.addEventListener("click", () => {
      const era = node.getAttribute("data-era");
      const page = eraPages[era];
      if (page) {
        window.location.href = page;
      }
    });
  });

  // --- 4. Scroll Parallax (Subtle) ---
  gsap.to(".graphic-container", {
    y: 50,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  });
});