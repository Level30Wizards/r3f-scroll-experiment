export const Outro = ({ showOutro, setOrbitControlsVis }) => {
    return (
        <div id="outro" className={showOutro ? 'visible' : ''}>
            <div id="credits">
                <p>Thanks for watching!!</p>
                <p>You can keep scrolling back and forth</p>

                <p>
                    This Amazing 3d Model was made by{' '}
                    <a
                        target="_blank"
                        href="https://sketchfab.com/luyssport"
                        rel="noreferrer"
                    >
                        Luysport
                    </a>
                </p>
                <p>
                    Story and interaction{' '}
                    <a
                        target="_blank"
                        href="https://level30Wizards.com"
                        rel="noreferrer"
                    >
                        Emiel - Level30Wizards
                    </a>
                </p>
            </div>
            <div id="controls">
                <p>Controls : </p>
                <p>
                    use{' '}
                    <button
                        onClick={() => {
                            setOrbitControlsVis(true);
                        }}
                    >
                        O
                    </button>{' '}
                    to enable free-flight (Orbit Controls)
                </p>
                <p>
                    use{' '}
                    <button
                        onClick={() => {
                            setOrbitControlsVis(false);
                        }}
                    >
                        L
                    </button>{' '}
                    to disable free-flight (Orbit Controls)
                </p>
            </div>{' '}
        </div>
    );
};
