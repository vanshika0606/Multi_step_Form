import React from 'react'
import StepTwo_Form from './StepTwo_Form'
import Input from './Input'

const Step3 = () => {
  return (
    <div className='border border-2 border-slate-300 rounded-md mt-6  py-6 px-4 md:mr-12'>

        <StepTwo_Form formName="Signing Location"/>

        <div className='md:grid grid-cols-2'>
            <div className="col-span-2 ">

            <Input field="Signing Location" placeholder="Enter Signing Location" type="text" /> 
            </div>

            <Input field="Date" placeholder="Enter Date" type="date" /> 


            <Input field="Time" placeholder="Enter Time" type="time" /> 


        </div>

        <div className='border text-center md:w-1/3 py-3 px-5 rounded-xl font-bold text-lg bg-slate-300 cursor-pointer my-12 mx-auto w-9/12 '>
            <h3>Schedule Appointment</h3>
        </div>
      
    </div>
  )
}

export default Step3
