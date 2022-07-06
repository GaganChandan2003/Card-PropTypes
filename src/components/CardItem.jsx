import React from 'react'
import { forwardRef } from 'react';

const CardItem = forwardRef(({changeHandler,onBackSpace},ref) => {
    const handleKey=(e)=>
    {
        if(e.keyCode===8)
        {
            onBackSpace(e);
        }
        else{
            changeHandler(e);
        }
    }
  return (
    <div>
        <input 
            ref={ref}
            maxLength={4}
            onChange={changeHandler}
            onKeyUp={handleKey}
    /></div>
  )
})

export default CardItem