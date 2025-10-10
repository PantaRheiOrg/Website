import { useGLTF } from '@react-three/drei'

const url = `${process.env.PUBLIC_URL}/models/beer.glb`;
export default function Model(props) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
}
useGLTF.preload(url) 
