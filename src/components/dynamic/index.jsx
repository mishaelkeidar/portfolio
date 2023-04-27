import React, { Suspense } from "react";
import lazy from "react-lazy-named";

const MotionDiv = lazy(() => import("framer-motion"), "motion.div");

export const AnimatedDiv = (props) => (
  <Suspense fallback={<div className={props.className}>{props.children}</div>}>
    <MotionDiv {...props} />
  </Suspense>
);

const MotionSection = lazy(() => import("framer-motion"), "motion.section");

export const AnimatedSection = (props) => (
  <Suspense
    fallback={<section className={props.className}>{props.children}</section>}
  >
    <MotionSection {...props} />
  </Suspense>
);

const MotionP = lazy(() => import("framer-motion"), "motion.p");

export const AnimatedP = (props) => (
  <Suspense fallback={<p className={props.className}>{props.children}</p>}>
    <MotionP {...props} />
  </Suspense>
);

const ThreeFiberCanvas = lazy(() => import("@react-three/fiber"), "Canvas");

export const AnimatedThreeFiberCanvas = (props) => (
  <Suspense
    fallback={<canvas className={props.className}>{props.children}</canvas>}
  >
    <ThreeFiberCanvas {...props} />
  </Suspense>
);
