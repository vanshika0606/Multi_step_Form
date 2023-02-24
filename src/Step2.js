import React from 'react'
import StepTwo_Form from './StepTwo_Form'
import Input from './Input'

const Step2 = () => {
  return (
    <div className='border border-2 border-slate-300 rounded-md mt-6  py-6 px-4 md:mr-12'>
        <StepTwo_Form formName="Signer Details"/>
        <div className="sm:grid grid-cols-2 ">
        <Input field="Full Name" placeholder="Enter Full Name" type="text"/>
        <Input field="Phone Number" placeholder="Enter Phone Number" type="tel"/>
        <Input field="Email" placeholder="you@example.com" type="email"/>
        </div>

        <StepTwo_Form formName="Title Company Details" marginTop="mt-8"/>
        <div className="sm:grid grid-cols-2 ">
        <Input field="Company Name" placeholder="Enter Company Name" type="text"/>
        <Input field="Agent Name" placeholder="Enter Agent Name" type="text"/>
        <Input field="Email" placeholder="you@example.com" type="email"/>
        <Input field="Phone Number" placeholder="Enter Phone Number" type="tel"/>
        
      </div>

      <StepTwo_Form formName="Order Info"  marginTop="mt-8"/>
        <div className="sm:grid grid-cols-2 ">
        <Input field="Escrow # / Loan No" placeholder="Enter Escrow # / Loan No " type="number"/>
        <Input field="Property Address" placeholder="Enter Property Address" type="tel"/>
        
        
      </div>


    </div>
  )
}

export default Step2
