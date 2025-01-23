import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import { useContext, useRef, useState } from 'react';

import QuantityDrop from '../QuantityDrop';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { MyContext } from '../../App';
import ProdZoom from '../ProdZoom';


const ProductModel =(props)=>{

    const context = useContext(MyContext);
 

    return(
        <>
        <Dialog open={context.setisOpenProdModel} className='prodModel' onClose={()=>context.setisOpenProdModel(false)}>
          <Button className="close_" onClick={()=>context.setisOpenProdModel(false)}><IoMdClose/></Button>
          <h4 className='mb-1 font-weight-bold'>Natural Herbal Tea of Nepal</h4>
          <div className='d-flex align-items-center'>
          <div className='d-flex align-items-center mr-4'>
             <span>Brands:</span>
             <span className='ml-2'><b>Lipton</b></span>
          </div>

          <Rating name='ready-only' value={5} readOnly size='small' precision={0.5}/>
           
          </div>
          <hr />
            <div className='row mt-2 prodDeetsModel'>
             <div className='col-md-5'>
                <ProdZoom/>
             </div>
            <div className='col-md-7'>
                <div className='d-flex info align-items-center mb-3'>
                    <span className='oldPrice lg mr-2'>$9.35</span>
                    <span className='netPrice lg text-danger'>$7.56</span>
                </div>

                <span className='badge bg-success'>IN STOCK</span>
                <p className='mt-3'>A refreshing blend of premium green tea leaves, grown in the pristine Himalayan region. Perfect for boosting metabolism and promoting relaxation.</p>

                <div className='d-flex align-items-center'>
                   <QuantityDrop/>               
                <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add to Cart</Button>
            </div>

            <div className='d-flex align-items-center mt-4 actions'>
                <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp; Add to Wishlist</Button>
                <Button className='btn-round btn-sml ml-3' variant='outlined'><MdOutlineCompareArrows/> &nbsp; Compare</Button>
            </div>
            </div>
           </div>

    </Dialog>
        
        </>
    )

}

export default ProductModel;