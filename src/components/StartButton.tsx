import React from 'react';

interface StartButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    shouldShow: boolean;
}

const StartButton: React.FC<StartButtonProps> = ({onClick, shouldShow}) => {
    if (!shouldShow) {
        return null;
    }

    return (
        <button onClick={onClick} className={'bg-slab-blue text-white font-bold py-2 px-4 rounded'}>
            Start
        </button>
    );
};

export default StartButton;
