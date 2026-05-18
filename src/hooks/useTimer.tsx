import { useRef, useState } from "react";

export const useTimer = (maxTime: number) => {
    const [time, setTime] = useState(maxTime);
    const interval = useRef<any>(null);

    const startTimer = () => {
        setTime(maxTime)
        interval.current = setInterval(() => {
            setTime((t) => t - 1)
        }, 1000)
        return () => {
            clearInterval(interval.current)

        }
    }
    const ClearTimer = () => {
        clearInterval(interval.current)
    }
    return {
        time,
        startTimer,
        ClearTimer
    }
}