particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#5a5a5a" }, // Cor das partículas
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#5a5a5a", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
      events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: false, mode: "push" } },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: false
  });