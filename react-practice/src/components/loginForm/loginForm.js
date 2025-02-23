import './loginForm.css';
import React, {useState} from 'react';
function LoginForm() {
    const [username , setUsername] = useState("")
    const [pass, setPassword] = useState("")
    function getUsername(event){
        setUsername(event.target.value)
    }
    function getPassword(event){
        setPassword(event.target.value)
    }
    function getUserDetails(event){
        console.log(username,pass)
    }
    return (
        
        <>
        
            <div className="form-card">

                <h1 className="text-center p-3">Login here</h1>
                <div className="text-center p-3 ">

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label p-3">Username</label>
                        <input type="text" id="formGroupExampleInput" onChange = {getUsername} placeholder="Enter username" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2"  class="form-label p-3">Password</label>
                        <input type="password" id="formGroupExampleInput2" onChange = {getPassword} placeholder="Enter password" />
                    </div>
                    <div>
                        <button onClick = {getUserDetails}>Login</button>
                    </div>
                </div>
            </div>
                <h1>{username}</h1>
                <h1>{pass}</h1>
        </>
    )
}
export default LoginForm;