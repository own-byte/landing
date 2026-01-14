import React from 'react'

const AdvantagesCard = ({ text }) => {
  return (
    <div className='h-auto min-h-[280px] w-full bg-card flex justify-center items-center p-4 rounded-xl border border-white/50'>
      <p className='text-center text-text'>{text}</p>
    </div>
  )
}

export default AdvantagesCard