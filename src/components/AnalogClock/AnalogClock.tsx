import "./AnalogClock.css"

export function AnalogClock(props : {time : string[], tZn : string}) { 
        
    const secArr = props.time[2].split(" ");
    const secRatio = +secArr[0] / 60;
    const minRatio = (secRatio + +props.time[1]) / 60;
    const hourRatio = (minRatio + +props.time[0]) / 12;
    
    return (     
        <div className="analog-main">
            <div className="analog">                
                <div className="circle"><i style={{transform:`translate(-50%) rotate(${secRatio * 360}deg)`}}></i></div>
                <div className="circle circle2"><i style={{transform:`translate(-50%) rotate(${minRatio * 360}deg)`}}></i></div>
                <div className="circle circle3"><i style={{transform:`translate(-50%) rotate(${hourRatio * 360}deg)`}}></i></div>
                
                <span className="number number1"><b>1</b></span>
                <span className="number number2"><b>2</b></span>
                <span className="number number3"><b>3</b></span>
                <span className="number number4"><b>4</b></span>
                <span className="number number5"><b>5</b></span>
                <span className="number number6"><b>6</b></span>
                <span className="number number7"><b>7</b></span>
                <span className="number number8"><b>8</b></span>
                <span className="number number9"><b>9</b></span>
                <span className="number number10"><b>10</b></span>
                <span className="number number11"><b>11</b></span>
                <span className="number number12"><b>12</b></span>
            </div>
            <div>
                <b>
                    {props.tZn}
                </b>
            </div>
        </div>
                
    )
}