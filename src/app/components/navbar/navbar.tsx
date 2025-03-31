'use client'
import ResponsiveMenu from "../responsive-menu/responsive-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCheckmark } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
    const [open, setopen] = useState(false)

    
    return (
        <div className="overflow-x-hidden">



            {/* navbar */}

            <div>



                <div className="md:h-[45px] md:bg-[#272343] md:flex md:items-center md:justify-around">





                    <div className="md:flex  hidden">
                        <IoIosCheckmark className="md:text-white size-6" />
                        <p className="md:text-white">Free shipping on all orders over $50</p>
                    </div>




                    <div className="md:flex gap-2  hidden">
                        <div className="md:flex">
                            <h2 className="md:text-white">Eng</h2>
                            <RiArrowDropDownLine className="md:text-white size-7" />
                        </div>


                        <h2 className="md:text-white">Faqs</h2>

                        <div className="md:flex gap-1">
                            <Image className="md:text-white md:size-6" src="/images/alert-circle 1 (1).png" alt="logo" width={16} height={16} />
                            <h2 className="md:text-white">Need Help</h2>
                        </div>
                    </div>
                </div>



                <div className="md:h-[84px] md:bg-[#F0F2F3] md:flex md:justify-around  md:items-center  hidden">
                    <div className="md:flex  md:items-center md:gap-2">
                        <Image src="/image/Logo (6).png" alt="logo" width={40} height={40} />
                        <h2 className="md:font-semibold">Comforty</h2>
                    </div>



                    <div className="md:w-[120px] md:rounded-[8px] md:h-[54px] md:bg-white md:flex md:items-center  md:justify-around">
                        <BsCartDash />
                        <h2>Cart</h2>
                        <div className="md:bg-[#007580] md:w-[20px] md:h-[20px] md:rounded-full">
                            <h2 className="md:text-white md:text-center md:text-[13px]">2</h2>
                        </div>

                    </div>


                </div>

                <div className="md:h-[74px] md:bg-white md:flex md:justify-around md:items-center hidden">
                    <div className="md:flex md:flex-row md:gap-3">
                        <Link href="/">Home</Link>
                        <Link href="Product">Product</Link>
                        <Link href="Single-Product">Single-Product</Link>
                        <Link href="Cart">Cart</Link>
                        <Link href="Contact-US">Contact-US</Link>
                        <Link href="FAQ">FAQ</Link>
                        <Link href="About-US">About-US</Link>
                    </div>

                    <div className="md:flex">
                        <h2>Contact:</h2>
                        <h2>(808) 555-0111</h2>
                    </div>


                </div>



                {/* mobile humburger */}

                <div className="w-full h-[60px] flex flex-row justify-end items-center md:hidden" onClick={() =>
                    setopen(!open)
                }>
                    <GiHamburgerMenu className="size-20 pt-5 text-black" />
                </div>

                {/* mobile sidebar */}

                <ResponsiveMenu open={open} />
            </div>
        </div>
    )
}