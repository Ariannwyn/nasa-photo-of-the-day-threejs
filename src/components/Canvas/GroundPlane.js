import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const GroundPlane = (props) =>{
    const mesh = useRef()
    return (
        <mesh>
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -4, 0]}>
        <planeBufferGeometry attach="geometry" args={[20, 10]} />
        <meshStandardMaterial attach="material" color="gray" />
        </mesh>
        <mesh receiveShadow rotation={[-5, 0, 0]} position={[0, 5.5, 0]}>
        <planeBufferGeometry attach="geometry" args={[20, 10]} />
        <meshStandardMaterial attach="material" color="gray" />
        </mesh>
        </mesh>
    );
}

export default GroundPlane;