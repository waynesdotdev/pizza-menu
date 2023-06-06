import React from 'react'

export function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>order</button>
    </div>
  )
}
