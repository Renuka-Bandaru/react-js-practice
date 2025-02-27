import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import axios from 'axios';
import React, { useState } from 'react';
function LoginForm() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [username, setUsername] = useState("")
    const [pass, setPassword] = useState("")
    function getUsername(event) {
        setUsername(event.target.value)
    }
    function getPassword(event) {
        setPassword(event.target.value)
    }
    // function getUserDetails(event){
    // if(username==="renuka" && pass === "12345" ){
    //     navigate("/apiPractice")
    // }else{
    //     alert("username is not found")
    // }

    // }

    async function getUserCredientials() {
        // const userAuth = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        //     email: "john@mail.com",
        //     password: "changeme"

        // });
        // console.log(userAuth.data)
        // const userAuth = await axios.get("https://fakestoreapi.com/products/")

        // const result = userAuth.data;
        // console.log(result)
        // setData(userAuth)

        const createUser = await axios.post("https://api.escuelajs.co/api/v1/users/", {
            name: "pramod",
            email: username,
            password: pass,
            avatar: "https://picsum.photos/800",
        })
            console.log(createUser.data)
        // sessionStorage.setItem("name", "john")
        // sessionStorage.setItem("access", userAuth.data.access_token)
        // navigate("/apiPractice")
        sessionStorage.setItem("name",createUser.data.email)
        sessionStorage.setItem("password",createUser.data.password)

    }

   async function userLogin(){
        const newUser = sessionStorage.getItem("name");
        const newPass = sessionStorage.getItem("password")

        const getUser = await axios.post("https://api.escuelajs.co/api/v1/auth/login",{
            email: newUser,
            password: newPass
        })
        console.log(newUser,newPass,getUser)

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
                        <button onClick={getUserCredientials}>register</button>
                        <button onClick={userLogin}>login</button>
                    </div>
                </div>
            </div>
            <h1>{username}</h1>
            <h1>{pass}</h1>

            {/* <div>
                {data.map(ele => {
                    return(
                        <img className='product-image' src={ele.image}/>
                    )
                })}
            </div> */}
        </>
    )
}
export default LoginForm;