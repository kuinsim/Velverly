import React, { Suspense, useRef } from 'react';
//import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Canvas, useLoader } from '@react-three/fiber'
//import Ring from './Ring'

function ArWing() {
	const group = useRef()
  const { nodes } = useLoader('/ring.gltf')
  return (
    <group ref={group}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
      <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
      <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
      <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
      <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
      <mesh
        geometry={nodes.Diamond_Round.geometry}
        material={nodes.Diamond_Round.material}
        position={[0, 0, 0.01]}
        scale={[0.5, 0.5, 0.5]}
      />
    </group>
  )
}

function Demo() {
    return (
    	<>
	    	<Canvas>
	      		<Suspense fallback={null}>
	        		<ArWing />
	      		</Suspense>
	      	</Canvas>
	     </>
    )
}

export default Demo;