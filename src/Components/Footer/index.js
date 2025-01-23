import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <div className="row mt-5 linkWrapper">
                    <div className="col">
                        <h5>Food Products</h5>
                       <ul>
                       <li><Link to="#">Large Cardamom</Link></li>
                       <li><Link to="#">Ginger</Link></li>
                       <li><Link to="#">Tea/Coffee</Link></li>
                       <li><Link to="#">Vegetable and Vegetable Seeds
                       </Link></li>
                       <li><Link to="#">Fruit and Juices
                       </Link></li>
                       <li><Link to="#">Honey</Link></li>
                       <li><Link to="#">Lentils</Link></li>
                       <li><Link to="#">Instant Noodles</Link></li>
                       <li><Link to="#">Himalayan Dog Chew (Chhurpi)
                       </Link></li>
                       </ul>
                    </div>
                    <div className="col">
                        <h5>Textiles & Garments
                        </h5>
                       <ul>
                       <li><Link to="#">Woolen Shawls</Link></li>
                       <li><Link to="#">Handmade Rugs</Link></li>
                       <li><Link to="#">Traditional Dresses</Link></li>
                       <li><Link to="#">Scarves</Link></li>
                       <li><Link to="#">Embroidered Fabrics</Link></li>
                       
                       </ul>
                    </div>
                    <div className="col">
                        <h5>Handicrafts/Decorative Items
                        </h5>
                       <ul>
                       <li><Link to="#">Wooden Carvings</Link></li>
                       <li><Link to="#">Metal Statues</Link></li>
                       <li><Link to="#">Handmade Jewelry</Link></li>
                       <li><Link to="#">Decorative Lamps</Link></li>
                       <li><Link to="#">Thangka Paintings</Link></li>
                       </ul>
                    </div>
                    <div className="col">
                        <h5>Fashion & Accessories
                        </h5>
                       <ul>
                       <li><Link to="#">Large Cardamom</Link></li>
                       <li><Link to="#">Ginger</Link></li>
                       <li><Link to="#">Tea</Link></li>
                       <li><Link to="#">Coffee</Link></li>
                       <li><Link to="#">Vegetable and Vegetable Seeds
                       </Link></li>
                       <li><Link to="#">Fruit and Juices
                       </Link></li>
                       <li><Link to="#">Honey</Link></li>
                       <li><Link to="#">Lentils</Link></li>
                       <li><Link to="#">Instant Noodles</Link></li>
                       <li><Link to="#">Himalayan Dog Chew (Chhurpi)
                       </Link></li>
                       </ul>
                    </div>
                    <div className="col">
                        <h5>Industrial & Utility Products
                        </h5>
                       <ul>
                       <li><Link to="#">Large Cardamom</Link></li>
                       <li><Link to="#">Ginger</Link></li>
                       <li><Link to="#">Tea</Link></li>
                       <li><Link to="#">Coffee</Link></li>
                       <li><Link to="#">Vegetable and Vegetable Seeds
                       </Link></li>
                       <li><Link to="#">Fruit and Juices
                       </Link></li>
                       <li><Link to="#">Honey</Link></li>
                       <li><Link to="#">Lentils</Link></li>
                       <li><Link to="#">Instant Noodles</Link></li>
                       <li><Link to="#">Himalayan Dog Chew (Chhurpi)
                       </Link></li>
                       </ul>
                    </div>
                </div>
                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All rights reserved.</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="https://www.facebook.com/Nonabazzarnepal"><FaFacebookF/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="https://www.instagram.com/nona_bazzar/"><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )

}


export default Footer;