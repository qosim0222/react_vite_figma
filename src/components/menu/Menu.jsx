import React from 'react'
import rasm from "../../assets/rasm.png"
import image from "../../assets/logo.png"
import qutb from "../../assets/qutub.png"

const Menu = () => {
  return (

    <>
 <section className="mt-10 pb-20">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-semibold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <img src={qutb} className="w-full h-[300px] object-cover" alt="post" />
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-lg font-semibold">The Road Ahead</h3>
                <p className="text-sm text-gray-300">The road ahead might be paved - it might not be.</p>
                <div className="text-xs mt-1">William Wong - 9/25/2015</div>
              </div>
            </div>
            <div className="relative">
              <img src={qutb} className="w-full h-[300px] object-cover" alt="post" />
              <div className="absolute bottom-5 left-5 text-white">
                <span className="bg-orange-500 px-2 py-1 rounded text-xs">Adventure</span>
                <h3 className="text-lg font-semibold mt-2">From Top Down</h3>
                <p className="text-sm text-gray-300">Once a year, go someplace youve never been before.</p>
                <div className="text-xs mt-1">William Wong - 9/25/2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>


    <section>
  <div className="container mx-auto grid grid-cols-3 mt-5 gap-6">
    <div className="flex flex-col bg-white">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="p-3.5 flex-1 ">
          <h3>Still Standing Tall</h3>
          <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
            Life begins at the end of your comfort zone.
          </p>
        </div>
        <div className="flex gap-2.5 p-3 border-t border-gray-200 items-center">
          <img src={rasm} alt="" />
          <p className="flex-1 text-xs">William Wong</p>
          <span className="text-xs">9/25/2015</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col bg-white">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="p-3.5 flex-1 ">
          <h3>Still Standing Tall</h3>
          <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
            Life begins at the end of your comfort zone.
          </p>
        </div>
        <div className="flex gap-2.5 p-3 border-t border-gray-200 items-center">
          <img src={rasm} alt="" />
          <p className="flex-1 text-xs">William Wong</p>
          <span className="text-xs">9/25/2015</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col bg-white">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="p-3.5 flex-1 ">
          <h3>Still Standing Tall</h3>
          <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
            Life begins at the end of your comfort zone.
          </p>
        </div>
        <div className="flex gap-2.5 p-3 border-t border-gray-200 items-center">
          <img src={rasm} alt="" />
          <p className="flex-1 text-xs">William Wong</p>
          <span className="text-xs">9/25/2015</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col bg-white">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="p-3.5 flex-1 ">
          <h3>Still Standing Tall</h3>
          <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
            Life begins at the end of your comfort zone.
          </p>
        </div>
        <div className="flex gap-2.5 p-3 border-t border-gray-200 items-center">
          <img src={rasm} alt="" />
          <p className="flex-1 text-xs">William Wong</p>
          <span className="text-xs">9/25/2015</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col bg-white">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="p-3.5 flex-1 ">
          <h3>Still Standing Tall</h3>
          <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
            Life begins at the end of your comfort zone.
          </p>
        </div>
        <div className="flex gap-2.5 p-3 border-t border-gray-200 items-center">
          <img src={rasm} alt="" />
          <p className="flex-1 text-xs">William Wong</p>
          <span className="text-xs">9/25/2015</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col bg-white">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col flex-1">
        <div className="p-3.5 flex-1 ">
          <h3>Still Standing Tall</h3>
          <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
            Life begins at the end of your comfort zone.
          </p>
        </div>
        <div className="flex gap-2.5 p-3 border-t border-gray-200 items-center">
          <img src={rasm} alt="" />
          <p className="flex-1 text-xs">William Wong</p>
          <span className="text-xs">9/25/2015</span>
        </div>
      </div>
    </div>
    
    
  </div>
</section>



    </>




  )
}

export default Menu