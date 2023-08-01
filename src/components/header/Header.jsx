import React from 'react';
import './header.css';
import '../../index.css';
import {AiOutlineSearch} from "react-icons/ai";
import Medicine from "../../assets/Website-logo.png";
import { Link } from 'react-router-dom';
import Card from "./Card";
import User from "./User";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  })

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth"})

  return (
  <>
    <header className='bg-[#fff] shadow-[0_2px_4px_rgb(0_0_0_/_8%)] relative z-[44] p-4'>
        <div className=" h-[8vh] flex">
          <div className="logo">
            <Link to="">
            <img src={Medicine} className='w-[12rem] h-[12rem]' alt="logo" srcset="" />
            </Link>
          </div>
          <div className="text-[15px] w-[600px] px-5 py-0 rounded-md border-[1px] border-solid border-[#212121] flex">
            <AiOutlineSearch className='text-[22px] mr-[15px]' />
            <input className='w-full text-[17px] p-[15px]' type='text' placeholder='search products' />
          </div>
          {/*  */}
          <div className="flex justify-between items-center">
            <Card/>
            <User/>
          </div>
        </div>
    </header>  
  </>
  )
}

export default Header