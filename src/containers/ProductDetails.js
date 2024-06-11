import { useParams } from 'react-router-dom';
import React, {useEffect} from 'react'
import axios from 'axios';
import { useDispatch ,useSelector } from 'react-redux';
import { selectProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
  const {id} = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const productData = useSelector(state => state.allProducts.products);
  console.log(productData)
  const fetchdetail = async()=>{
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err)=>{
      console.log(err)
    })
    dispatch(selectProduct(response.data))
  }

   useEffect(()=>{
   if( id && id !=='') fetchdetail();
   },[id])

  return (
    <div>
      <h1>Product Detailing</h1> 
      {/* <h1>{productData}</h1>  */}
    </div>
  )
}

export default ProductDetails
