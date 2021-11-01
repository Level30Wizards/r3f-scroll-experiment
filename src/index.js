import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, useProgress } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { MyScene } from './MyScene';
import './index.css';
import { Outro } from './Outro';
import { Intro } from './Intro';
import { Loader } from './Loader';

function App() {
    const [showOutro, setShowOutro] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [orbitControlsVis, setOrbitControlsVis] = useState(false);

    const [loaderDelayIsDone, setLoaderDelayIsDone] = useState(false);
    const progress = useProgress((state) => state.progress);

    useEffect(() => {
        setTimeout(() => {
            setLoaderDelayIsDone(true);
        }, 3000);
    }, []);

    return (
        <>
            <div id="canvas-container" style={{ height: '100vh' }}>
                <Loader
                    progress={progress}
                    loaderDelayIsDone={loaderDelayIsDone}
                />

                <Outro
                    showOutro={showOutro}
                    setOrbitControlsVis={setOrbitControlsVis}
                />
                <Intro showIntro={showIntro} />

                <Suspense fallback={null}>
                    <Canvas>
                        <ScrollControls pages={10}>
                            <MyScene
                                orbitControlsVis={orbitControlsVis}
                                setOrbitControlsVis={setOrbitControlsVis}
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
