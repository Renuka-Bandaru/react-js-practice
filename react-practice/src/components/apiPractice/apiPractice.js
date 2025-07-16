import React, { useState } from "react";
import axios from 'axios';
import './apiPractice.css';

function ApiPractice() {
    const user = sessionStorage.getItem("name");
    // const userpass = sessionStorage.getItem("access")
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

// fetching products by using fake api axios get method

    const fetchProductsAxios = async () => {
        setLoading(true)
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            const productList = response.data
            console.log(productList)
            console.log(loading)
            setProducts(productList)
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

                <button onClick={fetchProductsAxios}>Click here</button>
                {/* <h1>{movies.map(ele => ele.title )}</h1> */}
            </div>
            <div>
                {products.map(ele => {
                    return (                             // map function to display products
                        <img className="data" src={ele.image} alt="" />
                    )
                })}
            </div>
        </>
    )
};
export default ApiPractice;
