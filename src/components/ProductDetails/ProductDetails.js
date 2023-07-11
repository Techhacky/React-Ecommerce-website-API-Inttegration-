import React,{useEffect, useState} from 'react'
import { getproductId } from '../../ApiService/api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './ProductDetails.css'

function ProductDetails() {



 const {id}= useParams();
 const [productDetails, setProductDetails] =useState({})

useEffect(() => {
    const fetchProductdetails=async()=>{
        const data= await getproductId(id)
        setProductDetails(data)
    }
fetchProductdetails()
}, [id])

  return (
    <div className='product-details-container'>
    <img className='product-image' src={ProductDetails.image} alt="image" />

    <div className='product-info'>
        <h2 className='product-title'>{ProductDetails.title}</h2>
        <p className='product-discription'>{ProductDetails.description}</p>
        <p className='product-price'>{ProductDetails.price}</p>
        <button className='buy-now-button'>Buy Now</button>

        <Link to='/'>
        <button className='go-back-home-button'>Go Back</button>

        </Link>
        

    </div>



    </div>
  )
}

export default ProductDetails