import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const BG: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <div style={{ position: "relative", zIndex: -1 }}>
      {/* Particles background */}
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: "#1c1c1c", // Lighter dark color
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.4, // Lighter opacity for particles
              random: true,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 3,
              },
            },
          },
          detectRetina: true,
        }}
      />
      
      {/* Other content (Navbar, etc.) */}
      {/* Your navigation and other components will go here */}
    </div>
  );
};

export default BG;
