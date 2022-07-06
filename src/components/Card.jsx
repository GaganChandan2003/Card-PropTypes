import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import {PropTypes} from 'prop-types'
import CardItem from './CardItem'

const Card = ({length,onChange}) => {
    const inputRef=useRef([]);
    const [inputBoxLength]=useState(new Array(length).fill(0));
    const [inputBoxValue, setinputBoxValue] = useState(new Array(length).fill(''));
    
    const handleChange=(e,index)=>
    {
        inputBoxValue[index]=e.target.value;
        setinputBoxValue(inputBoxValue);

        if(e.target.value.length>length)
        {
            inputRef.current[index+1].focus();
        }
        onChange(inputBoxValue.join(""));
    };
    const handleBackSpace=(e,index)=>
    {
        if(index>0&&e.target.value.length<=0)
        {
            inputRef.current[index-1].focus();
        }
        inputBoxValue[index]=e.target.value;
        setinputBoxValue(inputBoxValue);
        onChange(inputBoxValue.join(""))
        
    }


  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:"30px",gap:"20px"}}>
        {
          inputBoxLength.map((item,index)=>
          {
            return(
                <CardItem
                 key={index}
                 onBackSpace={(e)=>handleBackSpace(e,index)}
                 changeHandler={(e)=>handleChange(e,index)}
                 ref={(e)=>
                {
                    inputRef.current[index]=e;
                }}
                />
            )
          })
        }
        
    </div>
  )
}

Card.prototype={
    length:PropTypes.numer,
    onChange:PropTypes.func
}

export default Card