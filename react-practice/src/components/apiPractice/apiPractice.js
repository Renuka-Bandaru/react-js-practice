import React, { useState } from "react";
import axios from 'axios';
import './apiPractice.css';

function ApiPractice() {
    const user = sessionStorage.getItem("name");
    const userpass = sessionStorage.getItem("access")
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchMoviesAxios = async () => {
        setLoading(true)
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            const movieList = response.data
            console.log(movieList)
            setMovies(movieList)
        } catch (error) {
            console.error("Axios error:", error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
        <div>
            <h1>Hi {user}</h1>
            <h1>Products you may like</h1>
        
        <button onClick = {fetchMoviesAxios}>Click here</button>
        {/* <h1>{movies.map(ele => ele.title )}</h1> */}
        </div>
        <div>
            {movies.map(ele => {
                return(
                    <img className="data" src={ele.image}/>
                )
            })}
        </div>
        </>
    )
};
export default ApiPractice;
