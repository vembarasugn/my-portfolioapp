import Particles from "react-tsparticles";

function Particle(){
    return(
  <Particles
      id="tsparticles"
      options={{
        
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 0.1,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "rgb(1, 1, 22)",
          },
          links: {
            color: "rgb(1, 1, 22)",
            distance: 120,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "edge",
          },
          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
    
    )
}

export default Particle;