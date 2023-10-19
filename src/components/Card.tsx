import React from 'react'
import '../styles/card.scss';

const Card = ({ number = 1 }) => {
  return (
    <div className='card'>
        <h1>{number}</h1>
    </div>
  )
}

export default Card