import React, { useState, useRef } from 'react';

function StopWatch() {
    const [time, setTime] = useState(0.0);
    const intervalRef = useRef(null); // To store interval ID

    function handleStart() {
        if (!intervalRef.current) { // Prevent multiple intervals
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 0.1);
            }, 100);
        }
    }

    function handleStop() {
        clearInterval(intervalRef.current);
        intervalRef.current = null; // Reset interval
    }

    function handleReset() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    return (
        <div>
            <h1>{time.toFixed(1)} seconds</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default StopWatch;
