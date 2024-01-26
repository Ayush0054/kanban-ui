/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card } from "./ui/card";
import plusIcon from "@/assets/icons/plus.svg";
import messageIcon from "@/assets/icons/message.svg";
import heartIcon from "@/assets/icons/heart.svg";
import attachIcon from "@/assets/icons/attach.svg";

import user from "@/assets/user/user.png";
import { Badge } from "./ui/badge";

function Cards({ props }: { props: any }) {
  return (
    <Card className="w-[362px] p-5 bg-[#F4F4F4] my-[10px] mx-[10px] md:mx-[30px] ">
      <img src={props.image} alt="" />
      <div className=" flex gap-1 my-4">
        <Badge className=" w-[60px] h-[8px] bg-amber-700"></Badge>
        <Badge className=" w-[60px] h-[8px] bg-amber-500"></Badge>
        <Badge className=" w-[60px] h-[8px] bg-amber-300"></Badge>
      </div>
      <h1 className=" leading-normal    ">{props.title}</h1>
      <h1 className=" text-gray-400 text-sm   leading-normal  ">{props.des}</h1>
      <div className=" flex items-center justify-between my-3 ">
        <div className="flex items-center justify-center ml-3">
          <div className="relative flex   ">
            <img
              src={user}
              alt="Profile 1"
              className=" h-[30px] w-[30px] rounded-full border-2  border-white -ml-4"
            />
            <img
              src={user}
              alt="Profile 2"
              className=" h-[30px] w-[30px] rounded-full border-2 border-white -ml-4 "
            />
            <img
              src={user}
              alt="Profile 2"
              className=" h-[30px] w-[30px] rounded-full border-2 border-white -ml-4 "
            />
            <img
              src={user}
              alt="Profile 2"
              className=" h-[30px] w-[30px] rounded-full border-2 border-white -ml-4"
            />
            <img src={plusIcon} alt="" className=" h-[30px] w-[30px] -ml-4 " />
          </div>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <div className=" flex items-center ">
            <h1 className=" text-gray-400">{props.likes}</h1>
            <img src={messageIcon} alt="" />
          </div>
          <div className=" flex items-center ">
            <h1 className=" text-gray-400">{props.messages}</h1>
            <img src={heartIcon} alt="" />
          </div>
          <div className=" flex items-center ">
            <h1 className=" text-gray-400">{props.attach}</h1>
            <img src={attachIcon} alt="" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Cards;
