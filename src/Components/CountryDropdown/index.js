import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from 'react-icons/io5';
import { IoMdClose } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown =()=>{
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);

  const [countryList, setCountryList] =useState([]);
  const context = useContext(MyContext);

  const selectCountry=(index, country)=>{
    setselectedTab(index);
    setisOpenModal(false);
    context.setselectedCountry(country);
  }

  useEffect(()=>{
    setCountryList(context.countryList);
  },[])

  const filterList=(e)=>{
    const keyword = e.target.value.toLowerCase();

    if(keyword!==""){
      const list = countryList.filter((item)=>{
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    }else{
      setCountryList(context.countryList);
    }

  }
 return(
    <>
    <Button className='countryDropdown' onClick={()=>setisOpenModal(true)}>
     <div className='info d-flex flex-column'>
     <span className="label">Your Location</span>
     <span className="countryName">{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...':context.selectedCountry: 'Select Location'}</span>
     </div>
     <span className="ml-auto"><FaAngleDown/></span>
   </Button>

   <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationPop" TransitionComponent={Transition}>
       <h4 className="mb-0">Choose Your Delivery Location</h4>
       <p>Provide your address to see the offers available in your area.</p>
       <Button className="close_" onClick={()=>setisOpenModal(false)}><IoMdClose/></Button>
       
       <div className='navbarSearch w-100'>
         <input type='text' placeholder='Search your Area' onChange={filterList}/>
         <Button><IoSearch/></Button>
       </div>

       <ul className="countryList mt-3">
        {
          countryList?.length!==0 && countryList?.map((item, index)=>{
            return(
              <li key={index}><Button onClick={() => selectCountry(index, item.country)} className={`${selectedTab === index ? 'active' : ''}`}
              >{item.country}</Button></li>
            )
          })
        }         
       </ul>  
    </Dialog>
    </>
 )
}

export default CountryDropdown;