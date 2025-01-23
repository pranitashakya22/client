import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';

const Sidebar = ()=>{

    const [value, setValue] = useState([100,60000]);
    const [value2, setValue2] = useState(0);

    return(
        <>
        <div className="sidebar">
            <div className='sticky'>
            <div className="filterBox">
                <h6>Product Categories</h6>

                <div className='scroll'> 
                    <ul>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Food" />
                        </li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Vegetables" />
                        </li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Carpets" />
                        </li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Jewelleries" />
                        </li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Decorative Items" />
                        </li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Handmade Products" />
                        </li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Fruits and Juices" />
                        </li>
                        <li><FormControlLabel className='w-100' control={<Checkbox />} label="Textiles & Garments" />
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className="filterBox">
            <h6>Filter by price</h6>

            <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5}/>

            <div className='d-felx pt-2 pb-2 priceRange'>
                <span>From: <strong className='text-dark'>Rs: {value[0]}</strong></span>
                <span>From: <strong className='text-dark'>Rs: {value[1]}</strong></span>
            </div>

            </div>


            <div className="filterBox">
            <h6>Product Status</h6>
            <div className="scroll">
                <ul>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="In Stock"/>
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="On Sale"/>                        
                    </li>
                </ul>
            </div>
            </div>

            <div className="filterBox">
            <h6>Brands</h6>
            <div className="scroll">
                <ul>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Brand A"/>
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Brand B"/>                        
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Brand A"/>
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Brand B"/>                        
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Brand A"/>
                    </li>
                    <li>
                        <FormControlLabel className='w-100' control={<Checkbox/>} label="Brand B"/>                        
                    </li>
                </ul>
            </div>
            </div>
            </div>
        </div>
        
        </>

    )
}

export default Sidebar;