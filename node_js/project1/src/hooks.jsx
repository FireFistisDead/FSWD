import React from "react";

function Hooks(){

    const [counter, setcounter] = React.useState(0)
    const [ msg, setmsg] = React.useState("")

    const increamentData = () =>{
        if(counter >= 5){
            setmsg("Sorry the value is greater than 5!")
        } else{
            setcounter(counter+1);
            setmsg("");
        }
    }

    const decreamentData = () => {
        if(counter <= 0){
            setmsg("Counter value cannot be less than 0!")
        } else{
            setcounter(counter-1)
            setmsg("");
        }
    }
    return (
        <>
        <h1>Hello welcome to hooks concept</h1>
         <p>Counter Value is {counter}  </p>
         <input type="button" value="+" onClick={increamentData}/>
         <input type="button" value="-" onClick={decreamentData}/>
         <input type="button" value="x" onClick={() => setcounter(0)}/>
        </>
    );
}

export default Hooks;