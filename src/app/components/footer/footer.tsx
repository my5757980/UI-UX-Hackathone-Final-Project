import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
export default function Footer(){
    return(
        <div className="overflow-x-hidden">
    


       {/* footer */}

       <div>

          
           <div className="m-auto w-[222px] md:m-auto md:w-[488px]  lg:m-auto lg:w-[777px]      ">

            <div className="md:grid md:grid-cols-2 md:gap-10     lg:grid lg:grid-cols-4 lg:gap-10  pt-20">

          <div className="flex flex-col gap-4     lg:relative lg:right-[88px]">
          <div className="flex items-center gap-2">
        <Image className="size-12"src="/image/Logo Icon.png" alt="logo" width={40} height={40}/>
        <h2 className="font-bold text-[25px]">Comforty</h2>
        </div>
        <p className="text-[#9A9CAA]">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.Cras egestas purus </p>
        <div className="flex flex-row gap-2">
        <FaFacebook className="text-[#007580]  border-[#007580] border-[1px] rounded-full p-1 size-7"/>
        <FaTwitter className="text-[#636270] size-7"/>
        <FaInstagram className="text-[#636270] size-7"/>
        <FaPinterest className="text-[#636270] size-7"/>
        <GrYoutube className="text-[#636270] size-7"/>
         </div>
         </div>


        

        <div className="flex flex-col gap-2">
        <h2 className="text-[#9A9CAA] pt-[33px]  md:pt-[0px]">Category</h2>
        <h2>Sofa</h2>
        <h2>Armchair</h2>
        <h2>Wing Chair</h2>
        <h2 className="text-[#007580] underline">Desk Chair</h2>
        <h2>wooden Chair</h2>
        <h2 className="pb-[33px] ">Park Bench</h2>
        </div>




         <div className="flex flex-col gap-2">
        <h2 className="text-[#9A9CAA]">Support</h2>
        <h2>Help & Support</h2>
        <h2>Tearms & Conditions</h2>
        <h2>Privacy Policy</h2>
        <h2 className="pb-[33px] md:pb-[0px]">Help</h2>
        </div>



          <div className="flex flex-col gap-2">
        <h2 className="text-[#9A9CAA]">Newsletter</h2>
        <div className="flex flex-row gap-2">
        <input className="w-[200px] h-[46px] rounded-[8px] border-[1px] border-[#E1E3E5] placeholder-[#9A9CAA]"placeholder="Your email"/>
        <button className="w-[127px] h-[46px] rounded-[8px] bg-[#029FAE] text-white">Subscribe</button>
       </div>
        <p className="text-[#9A9CAA] pb-[33px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
       </div>
       </div>
       </div>


       



        
        
       <hr/>
       <div className="md:m-auto md:w-[750px]      lg:m-auto lg:w-[877px] ">
        <div className="md:grid md:gap-2 md:grid-cols-2   lg:grid lg:gap-5 lg:grid-cols-2 ">
       <h2 className="pb-[11px] pt-[33px] text-center lg:relative lg:right-[22px]">
       <span className="text-[#9A9CAA] ">@ 2021 - Blogy - Designed & Develop by </span>
       <span className="text-[#272343]">Zakirsoft</span>
       </h2>
       <Image className="m-auto md:relative md:left-[81px]"src="/image/Group 13.png" alt="logo" width={188} height={188}/>
       

       </div>
        </div>
        </div>
        </div>
    )
}