import axios from "axios";

const BASE_URL= 'https://fakestoreapi.com'

export const getAllproducts = async()=>{

const response= await axios.get(`${BASE_URL}/products`)

return response.data;

}

export const getproductId = async()=>{

    const response= await axios.get(`${BASE_URL}/products/${id}`)
    
    return response.data;
}

export const getproductImage = async()=>{

    const response= await axios.get(`${BASE_URL}/products/${id}/image`)
    
    return response.data;
}

