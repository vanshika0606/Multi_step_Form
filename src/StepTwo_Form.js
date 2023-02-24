import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import Input from "./Input";

const StepTwo_Form = (props) => {
  return (
    <div className={props.marginTop?`${props.marginTop}`:''}>
      <div className="flex ">
        <div className="flex text-4xl">
          <BsPersonFill />
          <FiEdit2 className="absolute  mt-6 text-sm ml-6" />
        </div>

        <h2 className="text-xl  ml-4">{props.formName}</h2>
      </div>

      <div className="w-full bg-slate-400 h-px mt-2 mb-3"></div>

    </div>
  );
};

export default StepTwo_Form;
