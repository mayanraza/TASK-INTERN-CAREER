import React from 'react'
import Forms from '../components/reusable_components/Forms'
import { useParams } from 'react-router-dom';
import mockData from '../data/mockData';

const Checkout = () => {


    const { productId } = useParams();
    const product = mockData.find((item) => item.id === parseInt(productId, 10));



    if (!product) {
        return <div>Loading... Product not found with ID {productId}</div>;
    }


    return (

        <>

            <Forms product={product} />


        </>
    )
}

export default Checkout