const authorsText = document.querySelector('.authors-title-text');
const authorsContent = authorsText.textContent;
authorsText.textContent = '';

[...authorsContent].forEach(char => {
  const span = document.createElement('span');
  span.className = 'authors-letter';
  span.textContent = char;
  span.setAttribute('data-letter', char);
  authorsText.appendChild(span);
});

const authorsLetters = document.querySelectorAll('.authors-letter');

gsap.from(authorsLetters, {
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.05,
  ease: "back.out(1.7)"
});

gsap.timeline({ repeat: -1 })
  .to(authorsLetters, {
    rotateX: 360,
    duration: 3,
    stagger: {
      each: 0.1,
      from: "center"
    },
    ease: "power1.inOut"
  });

document.addEventListener('mousemove', (e) => {
  const mouseX = (e.clientX / window.innerWidth - 0.5) * 100;
  const mouseY = (e.clientY / window.innerHeight - 0.5) * 100;

  authorsLetters.forEach((letter, i) => {
    const position = (i / authorsLetters.length) * 2 - 1;
    gsap.to(letter, {
      x: mouseX * position * 0.3,
      y: mouseY * 0.1,
      rotation: mouseX * 0.05,
      duration: 0.6,
      ease: "power2.out"
    });
  });
});