import React, {useRef} from 'react'
import {BiRightArrowAlt} from "react-icons/bi"
import {AiFillStar} from "react-icons/ai"

const Card = (props) => {
    const heading= useRef('');

    


  return (
    <div className='rounded-lg md:w-12/12 border-2 hover:border-black p-3 px-4 mt-5' >

      {heading.current.innerText=="Remote Online Notary" && <h3 className='float-right text-xs font-bold flex items-center'>
        <AiFillStar className='mr-1'/>
        Popular
        </h3>}
     
     <h1 className='pt-1 pl-2 text-2xl '  ref={heading}>{props.heading}</h1>
     
     <input className='border border-slate-400 md:mt-1 w-2/12 float-right  py-1 px-2 input-arrow-remove' type="number"/>
     <p className='text-xs font-bold w-8/12 text-slate-400 mt-2'>{props.para}</p>
    

     
    <p className='text-xs font-bold text-slate-400 float-right'>per year</p>


  <div className='text-xs font-bold flex items-center mt-3'>
    View details 

    <BiRightArrowAlt className='ml-1 mt-0.5'/>
  </div>
     
      
    </div>
  )
}

export default Card
