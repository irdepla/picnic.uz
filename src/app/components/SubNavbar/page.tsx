"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CrossIcon from "../../../../public/icons/cross-icon.svg"



const SubNavbar = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <>
        {
            toggle && (
        <div className="flex container justify-between items-center gap-[73px] py-3 bg-main">
          <p className="text-white flex m-auto md:text-center">
          Sign up and get 20% off to your first order.
          <Link className="hidden sm:block underline" href={"#"} >
          Sign Up Now
          </Link>
          </p>
          <button
           onClick={() => {
            setToggle(false)
          }}>
          <Image src={CrossIcon} alt="" />
          </button>
        </div>
            )
}
        </>
    );
}

export default SubNavbar;
