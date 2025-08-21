import React from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
const [name, setname] = React.useState("");
const [mobile, setmobile] = React.useState("");
const [email, setemail] = React.useState("");
const [password, setpassword] = React.useState("");
const [error, seterror] = React.useState({});

const dovalid = () => {
    var errors = {}
    var isvalid = true
    if(name == ""){
        isvalid = false
        errors.name = "Enter the name"
    }
}
    return(
        <>
        Name: <input type="text" value = {name} onChange={(e) => setname(e.target.value)}/>
        <br/>
        <br/>
        Mobile: <input type="text" onChange={(e) => setmobile(e.target.value)}/>
        <br/>
        <br/>
        Email: <input type="text" placeholder="example@gmail.com" onChange={(e) => setemail(e.target.value)}/>
        <br/>
        <br/>
        Password: <input type="password" onChange={(e) => setpassword(e.target.value)}/>
        <br/>
        <br/>
        <button value = "Submit" onClick={() =>{
            alert("Registration Succesfull!!")
            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("mobile",mobile)
            }
        }>Register</button>
        </>
    )
}

export default Signup;