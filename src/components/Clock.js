import { useState } from "react";
import '../Style/Style.css';

const Clock = () =>{
    
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const [CurrentTime, setCurrentTime] = useState(time);
    const [CurrentDate, setCurrentDate] = useState(date);

    const UpdateTime = () =>{
        let time = new Date().toLocaleTimeString();
        let date = new Date().toLocaleDateString();
        setCurrentTime(time);
        setCurrentDate(date);
    }

    setInterval(UpdateTime,1000);

    return(
        <div>
            <h4 className="Clock">{CurrentDate}</h4>
            <h4 className="Clock">{CurrentTime}</h4>
        </div>
        )
    }

    export default Clock;
    