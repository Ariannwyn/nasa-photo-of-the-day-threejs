import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";



const WallPlane = (props) =>{
    const mesh = useRef()
    return(
        // <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
        //     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        //     <meshStandardMaterial attach="material" color={'orange'} />
        // </mesh>
        <mesh>
          <mesh receiveShadow rotation={[0, 5, 0]} position={[8, 0, -4]}>
            <planeBufferGeometry attach="geometry" args={[22.5, 10]} />
            <meshStandardMaterial attach="material" color="gray" />
          </mesh>
          <mesh receiveShadow rotation={[0, -5, 0]} position={[-8, 0, -4]}>
            <planeBufferGeometry attach="geometry" args={[22.5, 10]} />
            <meshStandardMaterial attach="material" color="gray" />
          </mesh>
          <mesh receiveShadow position={[0, 0, -4]}>
            <planeBufferGeometry attach="geometry" args={[22.5, 10]} />
            <meshStandardMaterial attach="material" color="gray" />
          </mesh>
        </mesh>
    )


}

export default WallPlane;