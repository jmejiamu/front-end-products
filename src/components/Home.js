import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import NavBar from "./NavBar/NavBar";
import Pagination from "./Pagination/Pagination";
import restfulapi from "./url/url";


const Home = (props) => {
    const [products, setProducts] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [imgPerPage] = useState(5);

    const getProducts = async () => {
        try {
            const respose = await fetch(restfulapi.localurl + '/products');
            const data = await respose.json();
            setProducts(data)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    // PAGINATION
    // Get the current img 
    const indexOfLastImg = currentPage * imgPerPage;
    const indexOfFirstImg = indexOfLastImg - imgPerPage;
    const currentImg = products.slice(indexOfFirstImg, indexOfLastImg);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const renderData = () => {
        if (products.length === 0) return <p>Loding...</p>
        return (

            currentImg.map((items, index) => {
                return (
                    <div key={index} className="card card-style mt-5 grid-item mb-5" >
                        <img className="card-img-top img-style" src={items.product_img} alt="product-pic" />
                        <div className="card-body">
                            <h5 className="card-title">{items.title}</h5>
                            <p>$ {items.price}</p>
                            <Link to="/detail"><button type="button" className="btn btn-danger btn-block" onClick={() => props.setId(items.item_id)}> Details</button></Link>
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
                <Pagination imgPerPage={imgPerPage} totalImg={products.length} paginate={paginate} />
            </div>
        </>
    );
};

export default Home;