// Import all the canvas components
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./canvas";

// Import all the non-canvas components
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";
import CanvasLoader from "./Loader";

// Export all the components
export {
  // Export the non-canvas components first
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  CanvasLoader,

  // Then export the canvas components
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};
