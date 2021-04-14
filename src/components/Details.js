import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';

const Details = (props) => {
    const [aproduct, setAProduct] = useState([]);

    const getASingleProject = async () => {
        try {
            const response = await fetch(`http://localhost:3001/aproduct/${props.id}`)
            const data = await response.json();
            setAProduct(data);
        } catch (error) {
            console.error(error.message);
        }

    }

    const updateLikes = async () => {
        try {

            const response = await fetch(`http://localhost:3001/updatelikes/${props.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            })

            const responseData = await response.json();


        } catch (error) {
            console.log(error.message);

        }
        getASingleProject()
    }


    useEffect(() => {
        getASingleProject();
    }, []);

    // Render Single Data
    const renderData = () => {
        return (
            aproduct.map((items, index) => {
                return (
                    <div key={index} className="card card-style mt-5 grid-item mb-5" >
                        <img className="card-img-top img-style" src={items.product_img} alt="product-pic" />
                        <div className="card-body">
                            <h5 className="card-title">{items.title}</h5>
                            <p className="card-text">{items.description_item}</p>
                            <p>$ {items.price}</p>
                            <button type="button" class="btn btn-danger" onClick={() => updateLikes()}>Likes {items.likes} </button>
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

export default Details;