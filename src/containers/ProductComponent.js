import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const ProductComponent = () => {
  const products =  useSelector(state => state.allProducts.products);
  // const first_product=products[0]
 
  return (
    // <>{api_render}</>
    // const  api_render = 
    
    <div className='w-[100vw] border flex justify-center flex-wrap shadow-2xl transition-all'>
    {
     products.map((product,index)=>{
       let { id, title, image, price, category } = product
       return(

        <Link to={`/product/${id}`}>

             <div key={id} className='w-[20vw] border-2 cursor-pointer transition-transform  
             hover:translate-y-1 rounded-md bg-white shadow-4xl m-2 flex flex-col'>
                <div className='p-4'>
                 <img src={image} className='w-[15vw] h-[40vh]'/>
                </div>
               <div className='text-lg pl-8 flex-grow '>
                 <div className='text-xl py-2'>{title}</div>
                 <div>$ {price}</div>
                 <div>{category}</div>
               </div>
             </div>
       </Link>
       )
     })
   }
 </div>
  );
}

export default ProductComponent
        