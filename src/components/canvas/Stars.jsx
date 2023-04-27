import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AnimatedThreeFiberCanvas } from "../dynamic"
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame(({ clock }) => {
    ref.current.rotation.x = Math.sin(clock.elapsedTime / 10);
    ref.current.rotation.y = Math.sin(clock.elapsedTime / 15);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <AnimatedThreeFiberCanvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </AnimatedThreeFiberCanvas>
    </div>
  );
};

export default StarsCanvas;
