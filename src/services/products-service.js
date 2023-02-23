import api from '../utils/api'; 


export const getProductList = () =>{
     return api.get('/products');
}

export const getProductListById = (id) =>{
     return api.get(`/products/${id}`);
}