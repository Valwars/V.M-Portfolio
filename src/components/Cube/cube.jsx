import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Cube = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.z += 0.005;
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"#8482E3"} />
    </mesh>
  );
};

export default Cube;
