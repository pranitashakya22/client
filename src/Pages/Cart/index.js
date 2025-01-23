import QuantityDrop from "../../Components/QuantityDrop";
import image from "../../images/teaIcon.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCart } from "react-icons/io5";




const Cart = () =>{
    return(
        <>
        <section className="section cartPage">
            <div className="container">
            <h2 className="hd mb-1">Your Cart</h2>
            <p>There are <b>3</b> products on your cart.</p>
                <div className="row">
                    <div className="col-md-9 pr-5">                  
          
                     <div  className="table-responsive">
                     <table className="table">
                       <thead>
                        <tr>
                            <th width="35%">Product</th>
                            <th width="20%">Unit Price</th>
                            <th width="20%">Quantity</th>
                            <th width="15%">Subtotal</th>
                            <th width="10%">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  width="35%">
                                <Link to ="product/1">
                                <div className="d-flex align-items-center cartItemWrapper">
                                    <div className="imgWrapper">
                                        <img src={image} className="w-100"/>
                                    </div>

                                    <div className="info px-3">
                                        <h6>Nepali Premium Tea</h6>
                                        <p className="text-light">Lipton</p>
                                    </div>
                                </div>
                                </Link>
                            </td>
                            <td width="20%">$4.50</td>
                            <td width="20%"><QuantityDrop/></td>
                            <td width="15%">$4.50</td>
                            <td width="10%"><span className="remove"><IoMdClose/></span></td>
                        </tr>
                        <tr>
                            <td  width="35%">
                                <Link to ="product/1">
                                <div className="d-flex align-items-center cartItemWrapper">
                                    <div className="imgWrapper">
                                        <img src={image} className="w-100"/>
                                    </div>

                                    <div className="info px-3">
                                        <h6>Nepali Premium Tea</h6>
                                        <p className="text-light">Lipton</p>
                                    </div>
                                </div>
                                </Link>
                            </td>
                            <td width="20%">$4.50</td>
                            <td width="20%"><QuantityDrop/></td>
                            <td width="15%">$4.50</td>
                            <td width="10%"><span className="remove"><IoMdClose/></span></td>
                        </tr>
                        <tr>
                            <td  width="35%">
                                <Link to ="product/1">
                                <div className="d-flex align-items-center cartItemWrapper">
                                    <div className="imgWrapper">
                                        <img src={image} className="w-100"/>
                                    </div>

                                    <div className="info px-3">
                                        <h6>Nepali Premium Tea</h6>
                                        <p className="text-light">Lipton</p>
                                    </div>
                                </div>
                                </Link>
                            </td>
                            <td width="20%">$4.50</td>
                            <td width="20%"><QuantityDrop/></td>
                            <td width="15%">$4.50</td>
                            <td width="10%"><span className="remove"><IoMdClose/></span></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

                    </div>
                    <div className="col-md-3">
                        <div className="card border p-3 cardDeets">
                            <h4>Cart Totals</h4>

                            <div className="d-flex align-items-cente mb-3">
                                <span>Subtotal</span>
                                <span className="ml-auto text-red font-weight-bold">$12.22</span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Shipping</span>
                                <span className="ml-auto"><b>Free</b></span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Total</span>
                                <span className="ml-auto text-red font-weight-bold">$12.22</span>
                            </div>
                            <br/>
                            <Button className='btn-blue btn-lg btn-big'><IoCart/>Add to Cart</Button>

                        </div>


                    </div>
                </div>
          
          
          
            </div>
        </section>
        
        </>

    )
}

export default Cart;