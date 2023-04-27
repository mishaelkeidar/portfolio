import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, lazy, Suspense } from "react";

const App = () => {
  const [components, setComponents] = useState(null);

  useEffect(() => {
    const importComponents = async () => {
      const { Navbar, Hero } = await import("./components");
      setComponents({ Navbar, Hero });
    };

    importComponents();
  }, []);

  if (!components) return null;

  const { Navbar, Hero } = components;

  const About = lazy(() => import("./components/About"));
  const Experience = lazy(() => import("./components/Experience"));
  const Tech = lazy(() => import("./components/Tech"));
  const Works = lazy(() => import("./components/Works"));
  const Contact = lazy(() => import("./components/Contact"));
  const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div />}>
          <About />
        </Suspense>
        <Suspense fallback={<div />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<div />}>
          <Works />
        </Suspense>
        <div className="relative z-0">
        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>  
        <Suspense fallback={<div />}>
          <StarsCanvas />
        </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
