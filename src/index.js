import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, useProgress } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { MyScene } from './MyScene';
import './index.css';
import { Outro } from './Outro';
import { Intro } from './Intro';
import { Loader } from './Loader';

function App() {
    const [showOutro, setShowOutro] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const progress = useProgress((state) => state.progress);

    return (
        <>
            <div id="canvas-container" style={{ height: '100vh' }}>
                {/* {progress < 100 &&  */}
                <Loader progress={progress} />
                {/* } */}
                <Outro showOutro={showOutro} />
                <Intro showIntro={showIntro} />

                <Suspense fallback={null}>
                    <Canvas>
                        <ScrollControls pages={10}>
                            <MyScene
                                setShowOutro={setShowOutro}
                                setShowIntro={setShowIntro}
                            />
                        </ScrollControls>
                    </Canvas>
                </Suspense>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
