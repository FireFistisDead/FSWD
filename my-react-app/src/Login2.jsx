import React from "react";

function Login(){
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const log = () => {
    var a = localStorage.getItem("email");
    var b = localStorage.getItem("password");
    if(a == email && b == )
}
    return(
        <>
        <h1>Login</h1>
        Email: <input type="text" onChange={(e) => setEmail(e.target.value)}/>    
        Password: <input type="text" onChange={(e) => setPassword(e.target.value)}/>    
        </>
    )
}