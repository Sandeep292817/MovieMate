import React from 'react'

export const Button = ({children}) => {
  return (
    <button className='w-64 text-xl bg-amber-300 h-16 justify-center rounded-full hover:bg-amber-200 px-5 py-2.5 mr-2 mb-2 font-medium'  >{children}</button>
      
  )
}
