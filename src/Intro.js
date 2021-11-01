export const Intro = ({ showIntro }) => {
    return (
        <div id="intro" className={showIntro ? 'visible' : ''}>
            <div>
                Scroll to play the story
                <svg width="300" height="300" viewBox="0 0 300 300">
                    <rect id="BT933373f8-7a3e-41c9-8b18-4d309b886398"></rect>
                    <circle id="BT3d244ad9-c41f-4803-9aa2-6260cdae9462"></circle>
                </svg>
            </div>
            <div>
                Move your to experience the 3d
                <svg width="300" height="300" viewBox="0 0 300 300">
                    <rect id="BT933373f8-7a3e-41c9-8b18-4d309b886397"></rect>
                    <circle id="BT3d244ad9-c41f-4803-9aa2-6260cdae9461"></circle>
                </svg>
            </div>
        </div>
    );
};
