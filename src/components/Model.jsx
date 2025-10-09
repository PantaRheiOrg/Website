import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { scene } = useGLTF('/models/beer.glb') 
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/beer.glb')
