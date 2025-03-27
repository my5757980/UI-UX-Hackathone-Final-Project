import Link from "next/link"
import {motion , AnimatePresence} from "framer-motion";
const ResponsiveMenu = ({open}: any ) => {
    return(
        <AnimatePresence mode="wait">

            {open &&(
                <motion.div
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -100}}

                className=" left-0 w-full h-screen z-20">

                    <div className="bg-lime-950 opacity-80 m-5 rounded-3xl md:hidden">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            <li className="text-[16px] font-[500px] text-white   underline">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-[16px] font-[500px] text-white  underline">
                            <Link href="Product">Product</Link>
                            </li>
                            <li className="text-[16px] font-[500px] text-white  underline">
                            <Link href="Single-Product">Single-Product</Link>
                            </li>
                            <li className="text-[16px] font-[500px] text-white  underline">
                            <Link href="Cart">Cart</Link>
                            </li>
                            <li className="text-[16px] font-[500px] text-white   underline">
                            <Link href="Contact-US">Contact-US</Link>
                            </li>
                            <li className="text-[16px] font-[500px] text-white  underline">
                            <Link href="FAQ">FAQ</Link>
                            </li>
                            <li className="text-[16px] font-[500px] text-white  underline">
                            <Link href="About-US">About-US</Link>
                            </li>
                        </ul>
                    </div>
                    </motion.div>
            )}

            </AnimatePresence>
    )
}


export default ResponsiveMenu