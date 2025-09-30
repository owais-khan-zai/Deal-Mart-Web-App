import React, { useState } from 'react'
import Loader from '../../ui/Loader'
import { wishlistTab } from '../../api/DashboardApiUrl'
import useFetch from '../../hooks/useFetch'

const Wishlist = () => {
  const { Data, Loading, Error } = useFetch(wishlistTab, "post")
  const wishlist = Data?.data?.wishlist || []

  console.log(wishlist)

  const [isActive, setisActive] = useState("Products")
  const items = ["Products", "Vehicle", "Property"]

  // Separate data based on content_type
  const products = wishlist.filter(item => item.content_type === 1)
  const vehicles = wishlist.filter(item => item.content_type === 2)
  const properties = wishlist.filter(item => item.content_type === 3)

  // Pick the array based on active tab
  const activeData =
    isActive === "Products" ? products :
    isActive === "Vehicle" ? vehicles :
    properties

  const activeHandler = (ele) => {
    setisActive(ele.target.innerText)
  }

  return (
    <div>
      {Loading && <Loader />}
      {!Loading && Error && <div>{Error.message}</div>}

      {!Loading && !Error && (
        <div>
          {/* Tabs */}
          <div className='flex border-b-1 pb-3 border-zinc-300'>
            <h5 className='text-purple-700 font-bold text-3xl my-auto hidden sm:inline'>{isActive}</h5>
            <ul className="flex gap-2 w-full justify-end">
              {items.map((item, index) => (
                <li
                  onClick={activeHandler}
                  key={index}
                  className={`${
                    isActive === item
                      ? "bg-gradient-to-r from-[#8F00FF] to-[#DA00FF] text-white"
                      : "text-black bg-zinc-300"
                  } px-2 sm:px-4 py-2 font-medium text-sm sm:text-base rounded-lg cursor-pointer`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

            {/* Table headings */}
          <div className='grid grid-cols-[1fr_70px_60px] gap-4 md:grid-cols-[1fr_90px_60px] lg:gap-10 mt-5 font-bold text-zinc-600 text-lg'>
            <div>Info</div>
            <div className=''>Price</div>
            <div>Action</div>
          </div>

          {/* Active data list */}
          {activeData.map((data, idx) => (
            <div key={idx} className='grid grid-cols-[1fr_70px_60px] md:grid-cols-[1fr_90px_60px] gap-4 lg:gap-10 mt-5'>
              {/* Info */}
              <div>
                {/* <img src={`${data.content?.thumbnail}`} alt='Product Image' /> */}
                <h4 className='text-xs sm:text-sm mt-2'>
                  {data.content?.name}
                </h4>
              </div>

              {/* Price */}
              <div className='break-words'>
                <h4 className='mt-2 font-semibold text-zinc-500 break-all'>
                  ${data.content?.price}
                </h4>
              </div>

              {/* Actions */}
              <div>
                <div className='flex gap-2 mt-2'>
                  <div className='border-1 border-zinc-300 cursor-pointer rounded-full p-[4px] px-[6px] md:px-[7px] flex justify-center items-center'>
                    <i className="ri-delete-bin-line text-xs lg:text-sm"></i>
                  </div>
                  <div className='border-1 border-zinc-300 cursor-pointer rounded-full p-[4px] px-[6px] flex justify-center items-center'>
                    <i className="ri-eye-line text-xs md:text-sm"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
