function EventDemo(){
    const d = () =>{
        alert("Fuck You!!!")
    }

    const val = (event) =>{
        console.log(event.target.value)
    }
    return(
        <>
            <input type="button" value={"ClickMe"} onClick={d}/><br/>
            
            <input type="button" value={"ClickMe-part2"} onClick={()=>{alert("Fuck You Part 2")}}/>
            <br/>
            <input type='text' placeholder="Type in me Part 1" onChange={val}/>
        </>
    )
}
export default EventDemo;