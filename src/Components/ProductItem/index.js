import Tea from '../../images/Tea.png';
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from 'react-icons/io';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';


const ProductItem = (props) =>{

  const context = useContext(MyContext);

  const viewProductDeets=(id)=>{
    context.setisOpenProdModel(true);
  }
    return(
      <>
        <div className={`productItem ${props.itemView}`}>
                   
                      <div className="imgWrapper">
                      <Link to = "/product/1">
                         <img src={Tea} alt="tea" className="w-100"/></Link>

                         <span className="badge badge-primary">20%</span>
                        
                         <div className="actions">
                          <Button onClick={()=>viewProductDeets(1)}><TfiFullscreen/></Button>
                          <Button><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
                         </div>
                         
                      </div>
                      
                      <div className="info">
                      <h4>Nepali Premium Organic Tea</h4>
                      <span className="text-success d-block">In Stock</span>
                      <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                      <div className="d-flex">
                        <span className="oldPrice">$17.00</span>
                        <span className="netPrice text-danger">$14.00</span>
                      </div>
                      </div>
                    </div>
                                

                    </>

    )
}

export default ProductItem;