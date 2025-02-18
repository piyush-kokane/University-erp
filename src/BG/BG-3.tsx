import Particles from "react-tsparticles";   // A wrapper for tsparticles, a library used to generate animated particle effects in JavaScript
import { loadSlim } from "tsparticles-slim"; // A lightweight version of tsparticles, optimized to load faster and use fewer resources
import { Engine } from "tsparticles-engine"; // The core engine of tsparticles that manages particle rendering
import "./BG-3.css"

// Note: Code from Chat-GPT, dont ask me how it works


function BG() {
  // Initializing the Particle Engine
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };


  return (
    <div className="BG">
      {/* Background */}
      <div className="BG-Image"></div>

      {/* Background Overlay */}
      <div className="BG-Overlay"></div>

      {/* Particles */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 0, // Creates 100 particles
              density: {
                enable: true, // Ensures the particle count adjusts based on screen size
                value_area: 800, // Determines the space where particles are distributed
              },
            },
            color: {
              value: "rgb(200, 200, 200 )",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5, // Lighter opacity for particles
              random: true,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true, // Enables particle movement
              speed: 1.5, // Sets particle speed
              direction: "none", // Particles move randomly
              outModes: {
                default: "bounce", // Particles bounce instead of disappearing when they hit the screen edge
              },
            },
          },

          /*
          // User Interaction with particles (Mouse Events)
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // When the mouse moves near particles, they move away
              },
              onClick: {
                enable: true,
                mode: "push", // Clicking adds more particles
              },
            },
            modes: {
              repulse: {
                distance: 100, // Particles move 100px away from the mouse
                duration: 0.4, // The repulsion effect lasts 0.4 seconds
              },
              push: {
                quantity: 3, // Clicking adds 3 new particles
              },
            },
          },
          */

          detectRetina: true, //Ensures particles look sharp on high-resolution (Retina) screens
        }} />
    </div>
  );
}

export default BG;
