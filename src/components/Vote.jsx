import React from 'react'
import CountUp from 'react-countup';

export const Vote = () => {
    return (
        <div className='vote h-[321px] flex items-center mt-20'>
            <div className='container'>
                <div className='flex justify-center gap-36'>
                    <div className='flex flex-col items-center'>
                        <h1 className='popins font-bold text-white text-[36px]'>
                            <CountUp start={0} end={2536} duration={4}>

                            </CountUp>
                        </h1>
                        <p className='popins flex items-center text-white text-[14px] font-light'>Projects Completed</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h1 className='popins font-bold text-white text-[36px]'>
                            <CountUp start={0} end={6784} duration={4}>

                            </CountUp>
                        </h1>
                        <p className='popins text-white text-[14px] font-light'>Happy Clients</p>
                    </div>


                    <div className='flex flex-col items-center'>
                        <h1 className='popins font-bold text-white text-[36px]'>
                            <CountUp start={0} end={2239} duration={4}>

                            </CountUp>
                        </h1>
                        <p className='popins text-white text-[14px] font-light'>Cups of Coffee</p>
                    </div>


                    <div className='flex flex-col items-center'>
                        <h1 className='popins font-bold text-white text-[36px]'>
                            <CountUp start={0} end={434}  duration={4}>

                            </CountUp>
                        </h1>
                        <p className='popins text-white text-[14px] font-light'>Real Professionals</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
