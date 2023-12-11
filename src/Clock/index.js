import "./style.css";
import { useState, useEffect } from 'react';

const Clock = () => {
    const dateFormat = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    const timeFormat = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <p>
            Dzisiaj jest {date.toLocaleString(undefined, dateFormat)}, {date.toLocaleString(undefined, timeFormat)}
            </p>
        </div>
    );
};

export default Clock;