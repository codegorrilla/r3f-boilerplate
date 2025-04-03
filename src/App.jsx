import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';

export default function App() {
	return (
		<Canvas camera={{ position: [3, 3, 3] }}>
			<OrbitControls />
			<mesh>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh>
		</Canvas>
	);
}
