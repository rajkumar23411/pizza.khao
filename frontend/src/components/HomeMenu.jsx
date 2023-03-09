import React from 'react'
import pizza from '../pizza'
import SinglePizzaCard from './SinglePizzaCard'

const HomeMenu = () => {
  return (
    <div className='min-h-screen py-20'>
          <div className='w-full flex items-center justify-center flex-col gap-1'>
              <h3 className='text-base uppercase tracking-wider text-[#D1411E] font-bold'>Choose your flavor</h3>
              <h1 className='text-4xl uppercase font-bold text-gray-700 font-sans'>The best pizza menu in town</h1>
              <p className='w-2/5 text-gray-500 text-lg text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quidem dolore iure sequi cupiditate atque? Veritatis non labore obcaecati consequatur?</p>
          </div>
          <div className='grid grid-cols-4 gap-y-14 place-content-center place-items-center pt-10 px-20'>
              {
                  pizza.map((pizza) => (
                      <SinglePizzaCard pizza={pizza} key={ pizza.path } />
                  ))
              }
          </div>
    </div>
  )
}

export default HomeMenu