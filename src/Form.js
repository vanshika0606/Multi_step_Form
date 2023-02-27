import React , {useState, useReducer} from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { STATE_ACTIONS, initailState, reducer } from "./State";
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill} from 'react-icons/bs'
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Form = () => {

    const [state, dispatch] = useReducer(reducer,initailState)

    const NextStep = ()=>{
        console.log(state.step)
        if(state.step!=4){
            dispatch({ type: "INCREASE", payload:1})
        }
    }

    const PreviousStep = ()=>{ 
        dispatch({ type: "DECREASE", payload:1})
    }

  return (
    <div className="pt-4 md:pl-5  w-full md:px-0 px-3">
      <div className="flex items-center text-2xl">
        <IoIosArrowDropleftCircle className="text-xl mb-2 mr-1 text-slate-500" />
        <div>
          <h2>New Appointment Request</h2>
          <p className="text-xs font-bold text-slate-500">
            Same great coverage for less
          </p>
        </div>
      </div>
      <div className="flex mt-12 items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-black mr-5"></div>

        <div className="w-1/6 flex items-center">
          <div className="w-5/6 h-0.5 bg-black"></div>
          <div className="md:text-lg w-6 h-6 md:w-9 md:h-9 bg-black text-white  rounded-full flex text-sm justify-center items-center pb-1 ">
            1
          </div>
        </div>
        <div className="w-1/5 flex items-center">
          <div className={(state.step>=2?`bg-black`:`bg-slate-500`) +` w-10/12 h-0.5`}></div>
          <div className={ (state.step>=2?`bg-black`:`bg-slate-500`) +` md:text-lg w-6 h-6 md:w-9 md:h-9 text-white  rounded-full flex text-sm justify-center items-center pb-1` }  >
            2
          </div>
        </div>
        <div className="w-1/5 flex items-center">
          <div className={(state.step>=3?`bg-black`:`bg-slate-500`)+ ` w-10/12 h-0.5`}></div>
          <div className={(state.step>=3? `bg-black`:`bg-slate-500`)+` md:text-lg w-6 h-6 md:w-9 md:h-9 text-white  rounded-full flex text-sm justify-center items-center pb-1`}>
            3
          </div>
        </div>
        <div className="w-1/3 flex items-center">
          <div className={(state.step>=4? `bg-black` :`bg-slate-500`) +` w-6/12 h-0.5 `}></div>
          <div className={(state.step>=4? `bg-black` : `bg-slate-500`)+ ` md:text-lg w-6 h-6 md:w-9 md:h-9  text-white  rounded-full flex text-sm justify-center items-center pb-1 `}>
            4
          </div>
          <div className={ (state.step>=4? `bg-black` : `bg-slate-500 `)+ ` w-5/12 h-0.5 `}></div>
        </div>
        <div className={( state.step>=4? `bg-black`: `bg-slate-500`)+ ` w-2.5 h-2.5 rounded-full ml-5`}></div>
      </div>
      <div>
        { state.step==1 && <Step1 step={state.step}/>}
        { state.step==2 && <Step2/>}
        { state.step==3 && <Step3/>}
        { state.step==4 && <Step4/>}

<div className={ (state.step==1? 'justify-end':'justify-between ')+ " flex md:mr-14"}>
        { state.step>=2 && <div className='flex mt-5 mb-7 items-center justify-end md:ml-4 cursor-pointer' onClick={PreviousStep}>
        <BsFillArrowLeftCircleFill className='mt-1 mr-2 text-2xl text-yellow-700'/>
            <h2 className='text-lg font-bold'>Previous step</h2>

            

        </div>}
        <div className=' flex mt-5 mb-7 items-center  justify-end cursor-pointer ml-9' onClick={NextStep}>
            <h2 className='text-lg font-bold'>
               {state.step==4 ? 'Confirm' :'Next step'}
                </h2>

            <BsFillArrowRightCircleFill className='mt-1 ml-2 text-2xl text-yellow-700'/>

        </div>
        </div>

      </div>
    </div>
  );
};

export default Form;
