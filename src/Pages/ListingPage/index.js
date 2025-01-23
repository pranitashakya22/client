import Sidebar from "../../Components/Sidebar/sidebar";
import Button from "@mui/material/Button";
import { IoMenuSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';

const Listing = ()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [prodView, setProdView] = useState('four');
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        
        <>
           <section className="prodListingPage">
            <div className="container">
                <div className="prodListing d-flex">
                    <Sidebar/>

                    <div className="content-right">
                        <div className="showBy mt-3 mb-3 d-flex align-items-center">
                            <div className="d-flex align-items-center btnWrap">
                                <Button className={prodView==='one' && 'act'} onClick={()=>setProdView('one')}><IoMenuSharp/></Button>
                                <Button className={prodView==='three' && 'act'}  onClick={()=>setProdView('three')}><TbGridDots/></Button> 
                                <Button className={prodView==='four' && 'act'}  onClick={()=>setProdView('four')}><TfiLayoutGrid4Alt/></Button> 
                          </div>

                          <div className="ml-auto showByFilter">
                            <Button onClick={handleClick}>Show 10 <FaAngleDown/></Button>
                            <Menu
                               className="w-100 showPerPage"
                               id="basic-menu"
                               anchorEl={anchorEl}
                               open={openDropDown}
                               onClose={handleClose}
                               MenuListProps={{
                                 'aria-labelledby': 'basic-button',
                               }}
                             >
                               <MenuItem onClick={handleClose}>10</MenuItem>
                               <MenuItem onClick={handleClose}>20</MenuItem>
                               <MenuItem onClick={handleClose}>30</MenuItem>
                               <MenuItem onClick={handleClose}>40</MenuItem>
                               <MenuItem onClick={handleClose}>50</MenuItem>
                             </Menu>
                          </div>

                        </div>

                        <div className="prodListing">
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                            <ProductItem itemView={prodView}/>
                        </div>

                        <div className="d-flex mt-5 align-items-center justify-content-center">
                        <Pagination count={10} color="primary" size="large"/>

                        </div>
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default Listing;