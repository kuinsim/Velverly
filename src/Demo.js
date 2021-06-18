import React, { Suspense, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import Ring from './Ring'

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};


function Demo() {
    return (
    	<>
	    	<Canvas style={{margin: 'auto',height:1000,width:1000}}>
	    		<CameraControls />
	      		<Suspense fallback={null}>
	        		<Ring />
	      		</Suspense>
	      	</Canvas>
		</>
    )
}

export default Demo;