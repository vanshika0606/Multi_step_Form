import React from 'react'

const CardTwo = () => {
  return (
    <div className='rounded-lg md:w-6/12 border-2 hover:border-black md:ml-4 mt-9 px-5 pb-8'>
        <h2 className='text-lg font-bold text-center pt-5'>Calculate your Costs for RON!</h2>

       <div className='flex mt-12 justify-between'>
        <div>
        <h2 className='text-xl text-slate-700'>No of Extra Signatures</h2>
        <p className='text-slate-500  text-sm'>Please enter zero, if only one signature is required</p>
        </div>
        <input className='border-slate-400 border md:mt-1 w-2/12 float-right  py-1 px-2 h-10 input-arrow-remove ml-8' type="number"/>

       </div>

       <div className='flex mt-8 justify-between'>
        <div>
        <h2 className='text-xl text-slate-700 '>How Many Files will you be uploading in the session</h2>
        
        </div>
        <input className='border-slate-400 border md:mt-1 w-2/12 float-right  py-1 px-2 h-10 input-arrow-remove ' type="number"/>

       </div>

       <div className='flex mt-8 justify-between'>
        <div>
        <h2 className='text-xl text-slate-700 '>Number of Signers</h2>
        
        </div>
        <input className='border-slate-400 border md:mt-1 w-2/12 float-right  py-1 px-2 h-10 input-arrow-remove ' type="number"/>

       </div>

       <div className='flex mt-8 justify-between'>
        <div>
        <h2 className='text-xl text-slate-700'>Do you Need Witness?</h2>
        <p className='text-slate-500  text-sm'>Do Not enter anything if you're bring you own witness</p>
        </div>
        <input className='border-slate-400 border md:mt-1 w-2/12 float-right  py-1 px-2 h-10 input-arrow-remove ml-8' type="number"/>

       </div>

       <h2 className='text-lg font-bold mt-6 text-end'>Your Approximate Quote: $59</h2>
      
    </div>
  )
}

export default CardTwo
