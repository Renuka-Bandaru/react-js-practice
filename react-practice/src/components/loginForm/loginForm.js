import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import axios from 'axios';
import React, { useState } from 'react';
function LoginForm() {
    const navigate = useNavigate();
    // const [data, setData] = useState([]);
    const [username, setUsername] = useState("")
    const [pass, setPassword] = useState("")

    function getUsername(event) {
        setUsername(event.target.value)     // state created for username and password
    }
    function getPassword(event) {
        setPassword(event.target.value)
    }
    // function getUserDetails(event){
    // if(username==="renuka" && pass === "12345" ){        // by giving hard code data i have practiced navigation
    //     navigate("/apiPractice")
    // }else{
    //     alert("username is not found")
    // }

    // }

    async function registerUser() {

        // checking how Authentication is working by using fake api


        // const userAuth = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        //     email: "john@mail.com",  
        //     password: "changeme"

        // });
        // console.log(userAuth.data)
        // const userAuth = await axios.get("https://fakestoreapi.com/products/")

        // const result = userAuth.data;
        // console.log(result)              
        // setData(userAuth)
        // sessionStorage.setItem("name", "john")
        // sessionStorage.setItem("access", userAuth.data.access_token)
        // navigate("/apiPractice")



        const createUser = await axios.post("https://api.escuelajs.co/api/v1/users/", {
            name: "user",
            email: username,                     //creating a new user by using fake api post method
            password: pass,
            avatar: "https://picsum.photos/800",
        })
        console.log(createUser.data)

        sessionStorage.setItem("name", createUser.data.email)   // name, password stored in sessionstorage
        sessionStorage.setItem("password", createUser.data.password)

    }

    async function userLogin() {   
        const newUser = username;
        const newPass = pass;

        const getUser = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
            email: newUser,
            password: newPass
        })
        console.log(newUser, newPass)
        const token = getUser.data.access_token
        console.log(getUser.data.access_token)

// checking the user is registered user or not by using access_token

        const validUser = await axios.get("https://api.escuelajs.co/api/v1/auth/profile",
            { headers: { Authorization: `Bearer ${token}` } });

        console.log(validUser)
        console.log(validUser.config.headers.Authorization)
        sessionStorage.setItem("token", validUser.config.headers.Authorization)
        if (sessionStorage.getItem("token")) {
            navigate("/apiPractice");
        }
        else {
            alert("your are not valid user")
        }

    }

    return (

        <>

            <div className="form-card">

                <h1 className="text-center p-3">Login here</h1>
                <div className="text-center p-3 ">

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label p-3">Username</label>
                        <input type="text" id="formGroupExampleInput" onChange={getUsername} placeholder="Enter username" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label p-3">Password</label>
                        <input type="password" id="formGroupExampleInput2" onChange={getPassword} placeholder="Enter password" />
                    </div>
                    <div>
                        <button className='m-3' onClick={registerUser}>Register</button>
                        <button onClick={userLogin}>Login</button>
                    </div>
                </div>
            </div>
            <h1>{username}</h1>
            <h1>{pass}</h1>

        </>
    )
}
export default LoginForm;