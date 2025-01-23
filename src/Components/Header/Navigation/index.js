import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation =()=>{

    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);

    return(
        <nav>
        <div className="container">
            <div className='row'>
                <div className='col-sm-2 navPart1'>
                    <div className="catWrapper">
                     <Button className='allCat align-items-center' onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
                        <span className='menuIcon mr-2'><IoIosMenu/></span>
                        <span className='text'>All Categories</span>
                        <span className='arrowDown ml-2'><FaAngleDown/></span>
                     </Button>

                <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open': ''}`}>
                         <ul>
                            <li><Link to="/"><Button>Food</Button></Link></li>
                            <li><Link to="/"><Button>Jewelleries</Button></Link></li>
                            <li><Link to="/"><Button>Decoratives</Button></Link></li>
                            <li><Link to="/"><Button>Handmade Products</Button></Link></li>
                            <li><Link to="/"><Button>Carpets</Button></Link></li>
                            <li><Link to="/"><Button>Woolen Products</Button></Link></li>
                         </ul>
                     </div>
                   </div>
                   </div>
                 <div className='col-am-10 navPart2 d-flex align-items-center'>
                    <ul className='list list-inline ml-auto'>
                    <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                    <li className='list-inline-item'><Link to="/cat/:id"><Button>Shop</Button></Link></li>
                    <li className='list-inline-item'><Link to="/aboutus"><Button>About Us</Button></Link></li>
                    <li className='list-inline-item'><Link to="/contact"><Button>Contact Us</Button></Link></li>
                    </ul>
                 </div>                
              </div>
            </div>
    </nav>
    )
}

export default Navigation;