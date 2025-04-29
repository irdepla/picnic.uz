"use client"
import Image from 'next/image';
import React from 'react';
import NavLogo from "../../../../public/icons/picnicuz-logo.svg"
import SearchLogo from "../../../../public/icons/search-logo.svg"
import CartLogo from "../../../../public/icons/cart-logo.svg"
import BurgerBtn from "../../../../public/icons/burger-btn.svg"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname()
    return (
        <>
        <nav>
            <div className="container flex justify-between items-center py-3 md:py-[15px]">

            <div className='nav__logo'>
                <Image src={NavLogo} alt='Picnic uz Logo' />
            </div>

            <ul className="nav__links hidden md:flex items-center gap-[35px]">
                <li>
                    <Link href={"/"} >
                    <span className={pathname === "/" ? "text-main font-medium" : "text-black  font-normal " }>Bosh sahifa</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/products"} >
                    <span className={pathname === "/products" ? "text-main font-medium" : "text-black font-normal" }>Mahsulotlar</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/contacts"} >
                    <span className={pathname === "/contacts" ? "text-main font-medium" : "text-black font-normal " }>Aloqa</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"} >
                    <span className={pathname === "/blog" ? "text-main font-medium" : "text-black font-normal" }>Blog</span>
                    </Link>
                </li>
            </ul>

            <div className="nav__menu flex items-center justify-between gap-[11.5px]">
                <button>
                    <Image src={SearchLogo} alt='' />
                </button>
                <button>
                    <Image src={CartLogo} alt='' />
                </button>
                <button className='md:hidden'>
                    <Image src={BurgerBtn} alt='' />
                </button>
            </div>

            </div>
        </nav>
        </>
    );
}

export default Navbar;
