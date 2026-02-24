import { useState, useEffect, useRef } from "react";
import useSound from 'use-sound';
import alarmSound from '../assets/alarm-buzzer.wav';

function formatTime(ms){
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;

}

function timesUp(){
    alert("Time's up!");

}



function Timer(){

    // time setup
    const startTimeStamp = Date.now();
    const durationMs = 5 * 60 * 1000; // countdown time in milliseconds (5 minutes = 300 secounds = 30000 milliseconds)
    const endTimeStamp = startTimeStamp + durationMs;
    let targetTimeStamp = endTimeStamp - startTimeStamp;

    // Hooks
    let [time , setTime] = useState(targetTimeStamp);
    const [isRunning, setRunning] = useState(false);
    const [play] = useSound(alarmSound);
    let id = useRef(null);

    // managing timer effect with useEffect hook
    useEffect(() => {
        
        // statement to start the timer and update time every second until it reaches 0
        if(isRunning && time > 0){
            id.current = setInterval(() => {
                // update time every 1000ms = 1 second
                setTime(time => time - 1000);
            }, 1000);
        }else if(time === 0){
            clearInterval(id.current);
            timesUp();
            play();
        }

        return () => {
            clearInterval(id.current);
            
        };

    }, [isRunning, time]);


    return(
        <div>
            <h1>{formatTime(time)}</h1>
            <button onClick={() => setRunning(!isRunning)}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={() => { setTime(targetTimeStamp);}}>Reset</button>
            <button onClick={() => setTime(time + 60000)}>+</button>
            <button onClick={() => setTime(time - 60000)}>-</button>
        </div>
    )


}

export default Timer