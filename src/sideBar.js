import Image from "./Image";
import { AiFillCompass } from "react-icons/ai";
import {IoMailOutline} from "react-icons/io5"
import {BsFillTelephoneFill, BsPersonFill} from "react-icons/bs"
import {RiMapPin2Fill} from "react-icons/ri"

export default function Example() {
  return (
    <div className="overflow-hidden bg-black md:w-1/4 w-full py-3 rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none">
        <div className="flex flex-col justify-center">
            
      <div className="flex px-5 items-center justify-start text-yellow-400">
        <AiFillCompass className="text-4xl pr-2"/>
        <h4 className="font-bold text-sm text-md ">
        BeInsurance
        </h4>
      </div>
        <Image />

        <h2 className="text-white m-auto text-2xl mt-3 font-bold">Jacob Jones</h2>
        </div>
      <div>
       
          <div className="flex w-full  md:block text-white pt-5 md:pt-12 text-xs pl-4 justify-center md:justify-none">
            <div className="flex items-center md:mt-3 mr-4 md:mr-0 flex-col md:flex-row">
                <IoMailOutline className="mr-3 text-sm "/>
                Jackson.jn@mail.com
            </div>
            <div className="flex items-center md:mt-3 mr-4 md:mr-0 flex-col md:flex-row">
                <BsFillTelephoneFill className="mr-3 text-sm" />
                (316) 555-0116
            </div>
            <div className="flex items-center md:mt-3 mr-4 md:mr-0 flex-col md:flex-row">
                <RiMapPin2Fill className="mr-3 text-sm" />
                3891 Ranchview Dr.Richardson, California 62639
            </div>
            <div className="flex items-center md:mt-3 mr-4 md:mr-0 flex-col md:flex-row">
                <BsPersonFill className="mr-3 text-sm"/>
                Insurance ID 24792492
            </div>

          </div> 

      </div>
    </div>
  );
}
