import React, { Suspense } from "react";
import Herotext from "../components/Herotext";
import Parralax from "../components/Parralax";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronout } from "../components/Astronout";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-start md:items-center md:justify-center min-h-screen overflow-hidden c-space">
      <Herotext />
      <Parralax />
      <figure
        className="absolute inset-0 "
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas position={isMobile && [0, 1, 3]}>
          <Suspense fallback={<Loader/>}>

          <Float>
            <Astronout scale={0.23} position={isMobile && [0, -1.5, 0]} />

            <Rig />
          </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
