const particlesConfig = {
    background: {
      color: {
        value: "#0d47a1", // Color de fondo
      },
    },
    fpsLimit: 60, // Límite de FPS
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // Al hacer clic, agrega partículas
        },
        onHover: {
          enable: true,
          mode: "repulse", // Al pasar el mouse, las partículas se repelen
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4, // Cantidad de partículas al hacer clic
        },
        repulse: {
          distance: 200, // Distancia de repulsión al pasar el mouse
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Color de las partículas
      },
      links: {
        color: "#ffffff", // Color de los enlaces entre partículas
        distance: 150, // Distancia entre partículas para enlazarse
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true, // Habilita colisiones entre partículas
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2, // Velocidad de movimiento de las partículas
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800, // Área de densidad de partículas
        },
        value: 80, // Número de partículas
      },
      opacity: {
        value: 0.5, // Opacidad de las partículas
      },
      shape: {
        type: "circle", // Forma de las partículas
      },
      size: {
        value: { min: 1, max: 5 }, // Tamaño de las partículas
      },
    },
    detectRetina: true, // Detección de pantallas retina
  };
  
  export default particlesConfig;
  