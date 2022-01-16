import React, { useState } from 'react'
// Import Asset
import clock from '../images/icon-clock.svg'
import equilibrium from '../images/image-equilibrium.jpg'
import avatar from '../images/image-avatar.png'
import ethereum from '../images/icon-ethereum.svg'
import view from '../images/icon-view.svg'

const Card = () => {
  const [hover, setHover] = useState(false)
  const viewOn = () => {
    setHover(true)
  }
  const viewOff = () => {
    setHover(false)
  }

  return (
    <div className='w-10/12 sm:w-3/12 h-min min-h-56 m-8 bg-card-bg rounded-xl font-roboto text-gray-500 shadow-2xl'>
      <div className='flex flex-col m-4'>
        <div className='relative'>
          <div className='w-full h-full'>
            {hover && (
              <div
                className='absolute flex justify-center items-center  bg-primary-cyan w-full h-full opacity-70 rounded-lg cursor-pointer'
                onMouseLeave={viewOff}
              >
                <img src={view} alt='' className='relative' />
              </div>
            )}
            <img
              src={equilibrium}
              alt='Equilibrium'
              className='rounded-lg w-full cursor-pointer'
              onMouseEnter={viewOn}
            />
          </div>
        </div>
        <div className='w-full pt-4'>
          <h1 className='text-white text-lg font-600 mb-2 hover:text-primary-cyan cursor-pointer'>
            Equilibrium <span className='font-sans'>#3429</span>
          </h1>
          <p className='font-300 mb-4'>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className='w-full flex sm:flex-col lg:flex-row justify-between items-center'>
            <div className='flex items-center justify-center'>
              <img src={ethereum} alt='ehtereum' className='h-4' />
              <h2 className='text-md md:text-lg ml-2 text-primary-cyan font-400'>
                0.041ETH
              </h2>
            </div>
            <div className='flex justify-end items-center'>
              <img src={clock} alt='clock' />
              <p className='text-sm font-400 pl-2 mt-px'>3 days left</p>
            </div>
          </div>
        </div>
        <div className='h-px w-full mt-4 mb-2 bg-line'></div>
        <div className='flex gap-3 justify-start items-center'>
          <img src={avatar} alt='avatar' className='w-8 mt-2' />
          <p className='text-300 mt-2'>
            Creation of{' '}
            <span className='text-white font-400 cursor-pointer hover:text-primary-cyan'>
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
