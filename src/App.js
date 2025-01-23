import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import Footer from "./Components/Footer";
import ProductModel from "./Components/ProductModel";
import Listing from "./Pages/ListingPage";
import ProdDeets from "./Pages/ProdDeets/proddeets";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Shop from "./Pages/shop";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState('');
  const [isOpenProdModel, setisOpenProdModel] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setisLogin] = useState(false);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries")
  },[]);

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values={
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProdModel,
    setisOpenProdModel,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin
  }
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      {
        isHeaderFooterShow === true && <Header/>
      }
    
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
      <Route path="/cat/:id" exact={true} element={<Listing/>}/>
      <Route exact={true} path="/product/:id" element={<ProdDeets />}/>
      <Route exact={true} path="/cart" element={<Cart />}/>
      <Route exact={true} path="/signIn" element={<SignIn />}/>
      <Route exact={true} path="/signUp" element={<SignUp />}/>
      <Route exact={true} path="/contact" element={<ContactUs />}/>
      <Route exact={true} path="/aboutus" element={<AboutUs />}/>
      <Route exact={true} path="/shop" element={<Shop />}/>
    </Routes>
    {
        isHeaderFooterShow === true && <Footer/>
      }
    
    {
      isOpenProdModel=== true &&  <ProductModel/>
    }     
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export {MyContext}
