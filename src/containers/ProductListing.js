import React,{useEffect} from 'react';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const ProductListing = () => {
    
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch()
    const fetchProducts = async()=>{
     const response =  await axios
     .get('https://fakestoreapi.com/products')
     .catch((err)=>{
      console.log('Error is' ,err)
     })
     dispatch(setProducts(response.data));
    }

    useEffect(()=>{
      fetchProducts()
    },[])
        if(products.length ===0){
          console.log('Loading...')
        }
        else{
          console.log('PRODUCTS',products) 
        }
  return (
       
    <div>
      <h1>All the Products are Listing Here</h1>
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;
