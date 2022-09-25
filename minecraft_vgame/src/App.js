import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      {/* <div> outside Div</div> */}
      <Canvas>
        <Sky />
      </Canvas>
    </>
  );
}

export default App;
