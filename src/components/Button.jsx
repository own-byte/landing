import React from 'react'

const Button = ({ text }) => {
  return (
    <>
      <button className='p-1 border text-accent rounded cursor-pointer hover:bg-accent-200 transform transition-transform duration-100 hover:scale-104'>{text}</button>
    </>
  )
}

export default Button