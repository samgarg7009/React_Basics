import React from 'react';

//name of component should always start with CAPITAL letter!!!

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => (
    <>
        <svg>
            <defs>
                <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="5%" stopColor="gold" />
                    <stop offset="95%" stopColor="red" />
                </linearGradient>
            </defs>
        </svg>

        <CountdownCircleTimer
            isPlaying
            duration={60}
            initialRemainingTime={15}
            colors="url(#your-unique-id)"
            colorsTime={[7, 5, 2, 0]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    </>

)
export default Timer;