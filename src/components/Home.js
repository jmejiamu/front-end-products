import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import NavBar from "./NavBar/NavBar";


const Home = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const respose = await fetch('http://localhost:3001/products');
            const data = await respose.json();
            setProducts(data)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])



    const renderData = () => {
        if (products.length === 0) return <p>Loding...</p>
        return (

            products.map((items, index) => {
                return (
                    <div key={index} className="card card-style mt-5 grid-item mb-5" >
                        <img className="card-img-top img-style" src={items.product_img} alt="product-pic" />
                        <div className="card-body">
                            <h5 className="card-title">{items.title}</h5>
                            <p>$ {items.price}</p>
                            <button type="button" className="btn btn-danger" onClick={() => props.setId(items.item_id)}> <Link to="/detail">Details</Link></button>
                        </div>

                    </div>
                )
            })
        )
    }
    return (
        <>
            <NavBar />
            <div className="container">

                <div className="grid-container">
                    {
                        renderData()
                    }
                </div>
            </div>
        </>
    );
};

export default Home;