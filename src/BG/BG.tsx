import Particles from "react-tsparticles";   // A wrapper for tsparticles, a library used to generate animated particle effects in JavaScript
import { loadSlim } from "tsparticles-slim"; // A lightweight version of tsparticles, optimized to load faster and use fewer resources
import { Engine } from "tsparticles-engine"; // The core engine of tsparticles that manages particle rendering
import "./BG.css"

// Note: Code from Chat-GPT, dont ask me how it works


function BG() {
  // Initializing the Particle Engine
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };


  return (
    <div className="BG">
      {/* Background image */}
      <div className="BG-Image"></div>

      {/* Background Overlay */}
      <div className="BG-Overlay"></div>
    </div>
  );
}

export default BG;
