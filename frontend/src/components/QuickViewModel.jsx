import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const QuickViewModel = ({ name, path, price, onClose, isModelOpen }) => {
  return (
    <div className={`h-screen w-full fixed top-0 left-0 right-0 z-20 flex items-center justify-center backdrop-brightness-50`}>
            <div className='flex bg-white w-4/5 h-[92vh] rounded-md relative overflow-hidden'>
              <div className='qucikViewClose' onClick={onClose}></div>
              <div className='flex-1 flex items-center justify-center bg-gray-100 m-10'>
                  <img src={path} alt={path} draggable="false" />
              </div>
              <div className='flex-1 flex flex-col m-10'>
                  <h1 className='font-sans uppercase text-2xl font-bold text-gray-700'>{name}</h1>
                  <div className='flex items-center gap-1 py-4'>
                      <div>
                      <StarIcon sx={{color: 'brown'}} />
                      <StarIcon sx={{color: 'brown'}} />
                      <StarIcon sx={{color: 'brown'}} />
                      <StarHalfIcon sx={{color: 'brown'}} />
                      <StarOutlineIcon sx={{color: 'brown'}} />
                      </div>
                      <div>(1 customer review)</div>
                  </div>
                  <p className='text-2xl text-red-600 font-bold'>$50.00 - $90.00</p>
                <p className='text-lg text-gray-500 pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi aspernatur, distinctio rem at quidem veniam. Minus quidem amet quisquam, unde, possimus repellendus ipsum nostrum vitae nulla et, facere repellat.</p>
                <div className='flex flex-col pt-10'>
                  <h1 className='uppercase font-bold text-golden'>NUTRITIONAL VALUE PER 100G:</h1>
                  <div className='flex pt-2'>
                    <span className='flex-1 text-lg text-gray-500'>Calories</span>
                    <span className='flex-1 text-red-700 font-semibold font-sans'>800 kcal</span>
                  </div>
                  <div className='flex'>
                    <span className='flex-1 text-lg text-gray-500'>Carbohydrates</span>
                    <span className='flex-1 text-red-700 font-semibold font-sans'>20 g</span>
                  </div>
                  <div className='flex '>
                    <span className='flex-1 text-lg text-gray-500'>Fats</span>
                    <span className='flex-1 text-red-700 font-semibold font-sans'>50.9 g</span>
                  </div>
                  <div className='flex'>
                    <span className='flex-1 text-lg text-gray-500'>Protien</span>
                    <span className='flex-1 text-red-700 font-semibold font-sans'>120 g</span>
                  </div>
                </div>
                <div className='flex gap-3 items-center py-6'>
                  <div className='text-base font-bold'>Pick Size:</div>
                  <div className='border-[1px] border-gray-400 py-1 cursor-pointer'>
                    <select className='cursor-pointer'>
                      <option>Large</option>
                      <option>Medium</option>
                      <option>Small</option>
                    </select>
                  </div>
                  </div>
                  <div className='text-xl text-red-600 font-bold pb-8'>${price}</div>
                  <div className='flex gap-2'>
                      <div className='flex-1 text-center bg-red-700 text-white p-3 uppercase text-sm font-semibold tracking-wide'>Add to cart</div>
                      <div className='flex-1 text-center bg-gray-200 text-gray-800 p-3 uppercase text-sm font-semibold tracking-wide'>Save to Favourite</div>
                  </div>
              </div>
            </div>
          </div>
  )
}

export default QuickViewModel