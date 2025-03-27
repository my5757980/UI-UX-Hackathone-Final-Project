import Image from "next/image";
  export default  function Product() {
  return (
    <div className="overflow-x-hidden">



      {/* Top Categories */}
     
        <h1 className="mt-[35px] mb-[35px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[30px] font-bold text-center">
          Top Categories
        </h1>

       
          
        <div className="m-auto w-[225px] md:m-auto md:w-[525px] lg:m-auto lg:w-[825px]">
            <div className="md:grid md:gap-2 md:grid-cols-2 lg:grid lg:gap-2 lg:grid-cols-3">
              <div>
                <Image src="/image/Image (10).png" alt="logo" width={224} height={224}/>
                <div className="relative bottom-[44px] w-[225px] bg-black h-[44px] rounded-[5px] opacity-65 %">
                  <div className="relative top-[11px] left-[11px] sm:relative sm:top-[6px]">
                    <h1 className="text-[10px] text-white sm:text-[12px] lg:font-bold">
                    Wing Chair
                    </h1>
                    <p className="text-[7px] text-white sm:text-[9px] lg:font-bold">
                      3,584 Products
                    </p>
                  </div>
                </div>
                </div>








                <div>
                <Image src="/image/Image (5).png" alt="logo" width={224} height={224}/>
                <div className="relative bottom-[44px] w-[225px] bg-black h-[44px] rounded-[5px] opacity-65 %">
                  <div className="relative top-[11px] left-[11px] sm:relative sm:top-[6px]">
                    <h1 className="text-[10px] text-white sm:text-[12px] lg:font-bold">
                    Wooden Chair
                    </h1>
                    <p className="text-[7px] text-white sm:text-[9px] lg:font-bold">
                    157 Products
                    </p>
                  </div>
                </div>
                </div>
              







                <div>
                <Image src="/image/image1.png" alt="logo" width={224} height={224}/>
                <div className="relative bottom-[44px] w-[225px] bg-black h-[44px] rounded-[5px] opacity-65 %">
                  <div className="relative top-[11px] left-[11px] sm:relative sm:top-[6px]">
                    <h1 className="text-[10px] text-white sm:text-[12px] lg:font-bold">
                    Desk Chair
                    </h1>
                    <p className="text-[7px] text-white sm:text-[9px] lg:font-bold">
                    154 Products
                    </p>
                  </div>
                </div>
                </div>
                </div>
                </div>
      </div>
    
  )
}
