import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5';


const NavbarSearch = () =>{
   return(
    <div className='navbarSearch ml-3 mr-3'>
      <input type='text' placeholder='Search for Product'/>
      <Button><IoSearch/></Button>
    </div>
   )
}

export default NavbarSearch;