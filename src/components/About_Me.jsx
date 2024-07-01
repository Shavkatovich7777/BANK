import React from 'react'

export const About_Me = () => {
  return (
    <>
      <div className='about'>
        <div className='container'>
          <div className='flex justify-start items-center gap-44'>
            <div className=''>
              <img src="https://preview.colorlib.com/theme/personal/img/about-img.png" alt="" />
            </div>
            <div className=''>
              <span className='popins uppercase font-normal text-[14px] text-[#222222] leading-[2rem]'>ABOUT ME</span>
              <h1 className='popins uppercase text-[36px] text-[#222222] leading-[4rem]'>PERSONAL DETAILS</h1>
              <p className='popins w-[370px] text-[#777777] text-[14px] font-light leading-[1.4,5rem]'>Here, I focus on a range of items and features that  we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur  adipisicing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco.</p>
              <button className='btn px-8 py-2 mt-4 uppercase text-white'>View Full Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
