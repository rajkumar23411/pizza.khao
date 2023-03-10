import React from 'react'
import BannerNav from './BannerNav'

const Banner = () => {
  return (
      <div className='h-screen w-full bg-[#D1411E] relative'>
          <BannerNav />
          <div className='imageDiv h-full w-full flex items-center justify-center flex-col'>
            <img src="/images/crown.png" alt="crown" className='absolute top-0 left-[21%]'/>
            <img src="/images/new-menu.png" alt="New Menu"/>
            <img src="/images/pizza-time.png" alt="" />
              <div className='bg-[#FFA323] h-32 w-32 rounded-full grid place-items-center text-xl uppercase tracking-wider text-center font-bold text-white absolute top-24 right-[21%]'>Best Offer</div>
          </div>
      </div>
  )
}
export default Banner