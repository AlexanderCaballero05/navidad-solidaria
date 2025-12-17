const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = +counter.getAttribute("data-target");
  let current = 0;
  const increment = target / 100;

  const updateCounter = () => {
    if (current < target) {
      current += increment;
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(section => {
  observer.observe(section);
});

