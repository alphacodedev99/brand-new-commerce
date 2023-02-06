import React, {useEffect, useState} from 'react';
import {AiOutlineCheck} from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {FiFlag} from 'react-icons/fi'
import StarIcon from "@mui/icons-material/Star";
import {Rating} from "@mui/material";
function DetailSingle({currentProduct}) {
    console.log(currentProduct)
    const [currentImage,setCurrentImage] = useState(0);

    return <div className="h-full flex-col lg:flex-row items-center md:items-start lg:min-h-[580px] border border-[#dee2e7] bg-white rounded-xl p-[20px] mt-[20px] flex gap-5 w-full justify-between">
           <div className="w-full lg:w-[30%]">
              {currentProduct && <img src={currentProduct.images[currentImage]} alt="radi" className="min-w-full h-[300px] object-contain"/> }
             <div className="flex items-center mt-[20px] gap-2">
             {currentProduct?.images.map((el,index)=> {
               return <img className="w-full h-[60px] object-cover border border-[#dee2e7]" key={index} src={el} alt={index} onClick={()=> setCurrentImage(index)} />
             })}
             </div>
           </div>
    {/*text section*/}
        <div className="w-full lg:w-[40%]">
          {currentProduct?.stock ? <p className="flex items-center gap-2 text-[#00B517]"><AiOutlineCheck/> In stock</p> : null}
            <h3 className="text-[18px] font-bold">{currentProduct?.title}</h3>
            <div className="flex items-center gap-3  my-2">
                <Rating
                    name="text-feedback"
                    value={currentProduct ? currentProduct.rating : 1 }
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <div className="flex items-center gap-2">
                    <BsBagCheck className="text-[#787A80]" />
                    <p className="text-[#787A80]">{currentProduct?.stock} sold</p>
                </div>
            </div>
            <div className="bg-[#FFF0DF] w-full h-[70px] flex items-center w-full">
                <div className="w-full border-r border-[#BDC1C8] p-2">
                    <p className="text-[#FA3434]">${Math.floor(currentProduct?.price / 1.5)}</p>
                    <p className="text-[#606060]">50-100 pcs</p>
                </div>
                <div className="w-full border-r border-[#BDC1C8] p-2">
                    <p>${Math.floor(currentProduct?.price / 1.7)}</p>
                    <p className="text-[#606060]">100-700 pcs</p>
                </div>
                <div className="w-full p-2">
                    <p>${Math.floor(currentProduct?.price / 2)}</p>
                    <p className="text-[#606060]">700+ pcs</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
                <p className="text-[#8B96A5] font-[300]">Price: Negotiable</p>
                <hr/>
                <p className="text-[#8B96A5] font-[300]">Type: Classic {currentProduct?.title}</p>
                <p className="text-[#8B96A5] font-[300]">Design: Modern {currentProduct?.brand}</p>
            </div>
        </div>

    {/*    user section*/}
        <div className="border border-[#ddd] rounded-xl p-5">
           <div className="flex items-center gap-4 mb-5">
               <CgProfile className="text-6xl"/>
               <div className="flex flex-col ">
                   <p>Supplier</p>
                   <p>Guanjoi Tradimng LLC</p>
               </div>
           </div>
            <hr/>
            <div className="mt-5">
                <div className="flex items-center text-lg gap-2">
                    <FiFlag/>
                    <span className="text-[#333] ">Serbia</span>
                </div>
            </div>
        </div>

    </div>;
}

export default DetailSingle;
