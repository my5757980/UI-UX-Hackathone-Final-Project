import Image from "next/image"
import { BsCartDash } from "react-icons/bs";
export default function Product() {
    return (
        <div className="overflow-x-hidden">



            {/* our product */}

            <div>
                <h1 className="text-[30px] text-center pt-[30px] pb-[30px]  lg:text-[40px] lg:relative lg:right-[343px] font-bold">All Product</h1>
                <div className="m-auto w-[200px] md:m-auto md:w-[400px] lg:m-auto lg:w-[900px]">




                    <div className="    md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-4    flex gap-5 flex-col ">
                        <div className="shadow-xl h-[280px]">
                            <Image className="" src="/image/Image.png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className="text-nowrap text-[#007580]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#029FAE] rounded-[5px] text-white" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                            <h1 className="relative bottom-[250px] left-[11px] bg-[#01AD5A] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">New</h1>
                        </div>



                        <div className="shadow-xl h-[280px] ">
                            <Image className="  " src="/image/Image (15).png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className="text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <div className="flex gap-2">
                                <p className="relative bottom-[10px] text-[#272343]">$20</p>
                                <p className=" relative bottom-[10px] line-through text-[#9A9CAA]">$39</p>
                            </div>
                            <h1 className="relative bottom-[230px] left-[11px] bg-[#F5813F] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">Sales</h1>
                        </div>



                        <div className="shadow-xl h-[280px]    ">
                            <Image className="    " src="/image/item-category 1.png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6  pt-[8px]">
                                <h1 className="text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                        </div>



                        <div className="shadow-xl h-[280px] mb-[23px]    ">
                            <Image className="   " src="/image/Image (9).png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className=" text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                        </div>
                    </div>
                </div>















                <div className="m-auto w-[200px] md:m-auto md:w-[400px] lg:m-auto lg:w-[900px]">

                    <div className=" md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-4    flex gap-5 flex-col">
                        <div className="shadow-xl h-[280px]">
                            <Image className="" src="/image/Image (5).png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className="text-nowrap text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#029FAE] rounded-[5px] text-white" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                            <h1 className="relative bottom-[250px] left-[11px] bg-[#01AD5A] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">New</h1>
                        </div>



                        <div className="shadow-xl h-[280px] ">
                            <Image className="  " src="/image/card.png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className="text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <div className="flex gap-2">
                                <p className="relative bottom-[10px] text-[#272343]">$20</p>
                                <p className=" relative bottom-[10px] line-through text-[#9A9CAA]">$39</p>
                            </div>
                            <h1 className="relative bottom-[250px] left-[11px] bg-[#F5813F] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">Sales</h1>
                        </div>



                        <div className="shadow-xl h-[280px]    ">
                            <Image className="    " src="/image/Image (13).png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6  pt-[8px]">
                                <h1 className="text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                        </div>



                        <div className="shadow-xl h-[280px]     mb-[23px]  ">
                            <Image className="   " src="/image/Image.png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className=" text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                        </div>
                    </div>
                </div>












                <div className="m-auto w-[200px] md:m-auto md:w-[400px] lg:m-auto lg:w-[900px]">
                    <div className=" md:grid md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-4    flex gap-5 flex-col">
                        <div className="shadow-xl h-[280px]">
                            <Image className="" src="/image/Image (10).png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className="text-nowrap text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#029FAE] rounded-[5px] text-white" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                            <h1 className="relative bottom-[250px] left-[11px] bg-[#01AD5A] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">New</h1>
                        </div>



                        <div className="shadow-xl h-[280px] ">
                            <Image className="  " src="/image/Image (15).png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className="text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <div className="flex gap-2">
                                <p className="relative bottom-[10px] text-[#272343]">$20</p>
                                <p className=" relative bottom-[10px] line-through text-[#9A9CAA]">$39</p>
                            </div>
                            <h1 className="relative bottom-[230px] left-[11px] bg-[#F5813F] text-white w-[49px] h-[26px] rounded-[4px]  flex items-center justify-center">Sales</h1>
                        </div>



                        <div className="shadow-xl h-[280px]    ">
                            <Image className="    " src="/image/item-category 1.png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6  pt-[8px]">
                                <h1 className="text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                        </div>



                        <div className="shadow-xl h-[280px]     mb-[23px]  ">
                            <Image className="   " src="/image/image1.png" alt="logo" width={200} height={200} />
                            <div className="flex gap-6 pt-[8px]">
                                <h1 className=" text-[#272343]">Library Stool Chair</h1>
                                <BsCartDash className="w-[33px] h-[33px] bg-[#F0F2F3] rounded-[5px]" />
                            </div>
                            <p className="relative bottom-[10px] text-[#272343]">$20</p>
                        </div>
                    </div>
                </div>
            </div>

















             {/* Or subscribe to the newsletter */}






      <div className="bg-[#F0F2F3] h-[1700px] md:h-[955px] mt-[33px]  lg:h-[455px] ">
        <p className="text-center font-bold text-[20px] pb-[33px] sm:text-[25px] pt-[25px] md:text-[30px] lg:text-[35px]">Or subscribe to the newsletter</p>

        <div className="flex gap-28 justify-center ">
          <p className="sm:text-[20px] md:text-[23px] lg:text-[26px]">Email address...</p>
          <p className="sm:text-[20px] md:text-[23px] lg:text-[26px]">SUBMIT</p>
        </div>
        <div className="flex justify-around">
          <hr className=" lg:w-[420px] md:w-[380px] border-t-2 border-black w-[310px] pb-[33px] sm:w-[350px]" />
        </div>
        <p className="text-center text-[15px] font-bold pb-[33px] sm:text-[20px] md:text-[25px] lg:text-[35px]">Follow products and discounts on Instagram</p>



        
            <div className="m-auto w-[222px] md:m-auto md:w-[444px] lg:m-auto lg:w-[666px] ">

             <div className="md:grid  md:gap-5 md:grid-cols-2 lg:grid lg:gap-5 lg:grid-cols-6      flex flex-col gap-10">
          
            <Image   src="/image/Image (11).png" alt="logo" width={212} height={312} />
            <Image src="/image/Image (10).png" alt="logo" width={212} height={312} />
            <Image className="  " src="/image/Image (15).png" alt="logo" width={212} height={312} />
            <Image  src="/image/card (1).png" alt="logo" width={212} height={312} />
            <Image   src="/image/item-category 1.png" alt="logo" width={212} height={312} />
            <Image  src="/image/image1.png" alt="logo" width={212} height={312} />
          


        </div>

     
        </div>
        </div>


        </div>
    )
}