## R3F Boilerplate

> Package manager used: Yarn
---

#### Installing Yarn

1. Install Yarn globally, use
   ```bash
   npm i -g yarn
   ```

2. Check Yarn version, use
   ```bash
   yarn --version
   ```

#### Setup of R3F development environment

1. We're using Vite to setup React first, using
   ```bash
   npm create vite@latest
   ```

** name your project , after the project folder is ready, get inside it and type ```bash npm i``` and then type ```bash npm run dev ``` to test the installation.

2. Once React is installed, type the following commands to install R3F and three.js
   ```bash
   yarn add three @types/three @react-three/fiber
   ```
** Ignore the warning of Yarn for the co-existence of package-lock.json file.

3. Inside App.jsx file remove everything except App.css file import instance and add the following liners of code:
   ```js
   import { Canvas } from '@react-three/fiber';
   import { OrbitControls } from '@react-three/drei';

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
    ```

4. As you can see in the above code snippet, a helper library, DREI has been installed. Hence, to install DREI, type the following command in the terminal-
   ```bash
   yarn add @react-three/drei
   ```

*Nice. Our basic R3F boilerplate is now ready with a basic cube shape and you can interact with it using mouse.*

