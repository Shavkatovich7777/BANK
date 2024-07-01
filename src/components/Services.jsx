import { Camera, ChartPieSlice, DeviceTablet, Image, Laptop, RocketLaunch } from '@phosphor-icons/react'
import React from 'react'

export const Services = () => {
    return (
        <>
            <div className='services'>
                <div className='container'>
                    <div className='items-center flex justify-center'>
                        <h1 className='popins text-[#222222] text-[36px] leading-[3.5rem] font-semibold'>My Offered Services</h1>
                    </div>
                    <div className='flex items-center justify-center text-center'>
                        <p className='popins text-[#777777] text-[14px] font-light leading-[1.3rem]'>At about this time of year, some months after New Year’s resolutions have been made and <br /> kept, or made and neglected.</p>

                    </div>
                    <div className='grid grid-cols-3 mt-16 gap-10 '>
                        <div className=''>
                            <div className='flex justify-center items-center'> <ChartPieSlice size={35} className='leading-[5rem] hover:text-[#8490ff] transition cursor-pointer ' /></div>
                            <div className='flex justify-center items-center'> <span className='popins text-[#222222] font-semibold text-[18px] leading-[3.5rem] hover:text-[#8490ff] hover:transition cursor-pointer ff'>Web Design</span> </div>
                            <div className='flex justify-center items-center text-center'><p className='popins text-[#777777] text-[14px] font-light'>“It is not because things are difficult that we <br /> do not dare; it is because we do not dare that <br /> they are difficult.”</p></div>
                        </div>

                        <div className=''>
                            <div className='flex justify-center items-center'><Laptop size={35} className='leading-[5rem] hover:text-[#8490ff] hover:transition cursor-pointer'/></div>
                            <div className='flex justify-center items-center'> <span className='popins text-[#222222] font-semibold text-[18px] leading-[3.5rem] hover:text-[#8490ff] hover:transition cursor-pointer ff'>Web Development</span> </div>
                            <div className='flex justify-center items-center text-center'><p className='popins text-[#777777] text-[14px] font-light'>If you are an entrepreneur, you know that <br /> your success cannot depend on the opinions <br /> of others. Like the wind, opinions.</p></div>
                        </div>

                        <div className=''>
                            <div className='flex justify-center items-center'><Camera size={35} className='leading-[5rem] hover:text-[#8490ff] hover:transition cursor-pointer'/></div>
                            <div className='flex justify-center items-center'> <span className='popins text-[#222222] font-semibold text-[18px] leading-[3.5rem] hover:text-[#8490ff] hover:transition cursor-pointer ff'>Photography</span> </div>
                            <div className='flex justify-center items-center text-center'><p className='popins text-[#777777] text-[14px] font-light'>Do you want to be even more successful? <br /> Learn to love learning and growth. The more <br /> effort you put into improving your skills.</p></div>
                        </div>

                        <div className=''>
                            <div className='flex justify-center items-center'><Image size={35} className='leading-[5rem] hover:text-[#8490ff] hover:transition cursor-pointer'/></div>
                            <div className='flex justify-center items-center'> <span className='popins text-[#222222] font-semibold text-[18px] leading-[3.5rem] hover:text-[#8490ff] hover:transition cursor-pointer ff'>Clipping Path</span> </div>
                            <div className='flex justify-center items-center text-center'><p className='popins text-[#777777] text-[14px] font-light'>Hypnosis quit smoking methods maintain <br /> caused quite a stir in the medical world over <br /> the last two decades. There is a lot  of <br /> argument.</p></div>
                        </div>

                        <div className=''>
                            <div className='flex justify-center items-center'><DeviceTablet size={35} className='leading-[5rem] hover:text-[#8490ff] hover:transition cursor-pointer'/></div>
                            <div className='flex justify-center items-center'> <span className='popins text-[#222222] font-semibold text-[18px] leading-[3.5rem] hover:text-[#8490ff] hover:transition cursor-pointer ff'>Apps Interface</span> </div>
                            <div className='flex justify-center items-center text-center'><p className='popins text-[#777777] text-[14px] font-light'>Do you sometimes have the feeling that <br /> you’re running into the same obstacles over <br /> and over again? Many of my conflicts.</p></div>
                        </div>

                        <div className=''>
                            <div className='flex justify-center items-center'><RocketLaunch size={35} className='leading-[5rem] hover:text-[#8490ff] hover:transition cursor-pointer'/></div>
                            <div className='flex justify-center items-center'> <span className='popins text-[#222222] font-semibold text-[18px] leading-[3.5rem] hover:text-[#8490ff] hover:transition cursor-pointer ff'>Graphic Design</span> </div>
                            <div className='flex justify-center items-center text-center'><p className='popins text-[#777777] text-[14px] font-light'>You’ve heard the expression, “Just believe it <br /> and it will come.” Well, technically, that is true, <br /> however, ‘believing’ is not just thinking that.</p></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
