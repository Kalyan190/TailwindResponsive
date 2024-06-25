import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between max-w-full'>
      <ul className='flex gap-3 md:justify-between font-lato text-gray-400'>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
        <li>
          <a href='#'>Linkdin</a>
        </li>
      </ul>
      <div className='flex gap-2 '>
        <img className='rounded-full w-14 h-14' src='./assets/Avatar.jpeg' alt='help'></img>
        <div>
          <p className='font-playfair font-thin '>
            Have any Questions?
          </p>
          <a className='font-lato font-medium'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}
