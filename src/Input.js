import React from 'react'

const Input = (props) => {
  return (
    <div>
       <h2 className='text-slate-600'>{props.field}</h2>
            <input type={props.type} placeholder={props.placeholder}  className="border border-slate-400 rounded-md p-1 px-2 mt-2 mb-5 w-9/12 "/>
    </div>
  )
}

export default Input
