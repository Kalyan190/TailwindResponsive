import React from 'react'

export const Body = () => {
  return (
    <div className='space-y-4 lg:flex max-w-full overflow-hidden '>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src='./assets/Blue-Shape.svg' alt='mode' className='-rotate-45 h-64 md:h-72 lg:h-[25rem]' />
        <img src='./assets/Pink-Shape.svg' alt='mode' className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[25rem]' />
        <img src='./assets/Purple-Shape.svg' alt='mode' className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[25rem]' />
        <img src='./assets/Hero-Model.png' alt='mode' className='absolute h-64 md:h-72 lg:h-[25rem]' />
      </div>
      <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='font-lato text-gray-400'>with Hoster, get your website up and running in no less than 5 minutes with the most competitive package </p>
        <form action='' className='flex flex-col gap-4 md:flex-row'>
          <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type='email' placeholder='Enter email address'></input>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-700 text-white'>Join Waitlist</button>

        </form> 
        <div className='flex gap-2 p-2'>
          <img src='./assets/Checkmark.svg' alt='check'></img>
          <p className='font-lato text-gray-400 '>No spam, ever . Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  )
}
