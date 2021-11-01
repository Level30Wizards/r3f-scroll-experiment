export const Loader = ({ progress }) => {
    return (
        <div
            id="loader"
            className={Math.ceil(progress) >= 100 ? 'finished' : ''}
        >
            <div className="background" id="one">
                <div className="info">
                    <h1>The Adventurer</h1>
                    <h2>
                        A short story by: <br />
                        Level30Wizards
                    </h2>
                </div>
                <div id="loaderWrapper">
                    <div
                        id="progress"
                        style={{ transform: `translateX(${progress}%)` }}
                    />
                </div>
            </div>
            <div className="background" id="two">
                <div className="info">
                    <h1>The Adventurer</h1>
                    <h2>
                        A short story by: <br />
                        Level30Wizards
                    </h2>
                </div>
                <div id="loaderWrapper">
                    <div
                        id="progress"
                        style={{ transform: `translateX(${progress}%)` }}
                    />
                </div>
            </div>
        </div>
    );
};
