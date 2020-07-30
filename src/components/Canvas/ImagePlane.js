import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import * as THREE from 'three';

//let imgTexture = "https://images.unsplash.com/photo-1595982488033-a4df8525e412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";


const ImagePlane = (props) =>{
    let imgTexture = props.image;
    const texture = useLoader(THREE.TextureLoader, imgTexture);
    return(
        // <mesh {...props} ref={mesh} scale={[1, 1, 1]}>
        //     <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        //     <meshStandardMaterial attach="material" color={'orange'} />
        // </mesh>
            <mesh receiveShadow position={[0, .5, -3.9]}>
              <planeBufferGeometry attach="geometry" args={[9, 6]} />
              <meshStandardMaterial attach="material" map={texture} />
            </mesh>
    )


}

export default ImagePlane;