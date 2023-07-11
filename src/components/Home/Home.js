import React,{useState,useEffect} from 'react'
import './Home.css'
import { getAllproducts } from '../../ApiService/api'

function Home() {

const [products, setProducts] = useState([])

useEffect(() => {

const fetchProducts =async ()=>{

  const data =await getAllproducts();
setProducts(data)
}
fetchProducts()

 
}, [])




  return (
    <div className='product-grid'> 
{
products.map((product)=>{
  
})
 
}

    <div className='product'>

        <img src="" alt="alter" />
        <h2>sample</h2>
        <p>
            <span className='price'>10</span>
        </p>
        <button>Product details</button>

    </div>
    
    </div>
  )
}

export default Home