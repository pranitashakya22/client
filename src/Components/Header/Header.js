import {Link} from 'react-router-dom';
import Logo from '../../../src/images/NonabazzarLogo.jpg';
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi';
import { BsCart3 } from "react-icons/bs";
import NavbarSearch from './HeaderSearch';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { useContext } from 'react';

const Header =()=>{
    
    const context = useContext(MyContext)

    return(
        <>
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
                    </div>

                    <div className='col-sm-10 d-flex align-items-center part2'>
                      {
                        context.countryList.length!==0 && <CountryDropdown />

                      }
                     <NavbarSearch/>
                    <div className='part3 d-flex align-items-center ml-auto'>

                        {
                            context.isLogin !== true ? <Link to="/signIn"> <Button className='btn-blue btn-round mr-3'>Sign In</Button></Link>:
                            <Button className='userProfile mr-3'><FiUser /></Button> 
                        }

                        <div className='cart ml-auto d-flex align-items-center'>
                            <span className='price'>$3.29</span>
                            <div className='position-relative ml-2'>
                            <Link to = "/cart">
                            <Button className='userProfile'><BsCart3 /></Button>
                            <span className='count d-flex align-items-center justify-content-center'>1</span> </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className='hero'>
                        
                    </div>

                </div>
            </div>
        </header>

        <Navigation/>

        
        </>
    )
}

export default Header;