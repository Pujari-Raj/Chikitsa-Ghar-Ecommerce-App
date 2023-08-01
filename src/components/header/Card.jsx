import React,{useState} from 'react';
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Card = () => {

  const [cardOpen, setcardOpen] = useState(false);
  const closeCard = () => {
    setcardOpen(true);
  }
  return (
    <>
    <div className='relative cursor-pointer'>
      <BiShoppingBag className='text-[30px]' />
      <span className='text-center absolute w-[17px] h-[17px] p-[1px] bg-black text-white text-[10px] rounded-[50%] -right-2 -top-2'>2</span>
    </div>
    </>
  )
}

export default Card