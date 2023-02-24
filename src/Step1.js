import React from 'react'
import Card from './Card'
import CardTwo from './CardTwo'
import {BsFillArrowRightCircleFill} from "react-icons/bs"


const Step1 = (props) => {
    

  return (
    <div>
    <div className={ ` md:flex w-12/12`}>
        <div className='flex md:w-5/12 flex-col mt-4'>

         <Card heading="Notary Signing Agent" para="Suitable for those who have purchased a brand new car"/>
         <Card heading="Remote Online Notary" para="Suitable for those who have already a third party cover"/>
         <Card heading="Mobile General Notary" para="Suitable for those who use the car infrequently"/>
        </div>
        <CardTwo/>

        
        </div>
        
    </div>
  )
}

export default Step1
