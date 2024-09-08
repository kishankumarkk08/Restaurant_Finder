"use client"
import React, { useState } from 'react'
import ListData from '@/Assets/ListData'
import './customCheckbox.css'

const rating = () => {
  const [rating, setRating] = useState<number[]>([]);
  const onClickRating = (isChecked: boolean, value: number) => {
    if (isChecked) {
      setRating([...rating, value])
    }
    else {
      setRating(rating.filter((n) => n !== value))
    }
    console.log(rating)
  }
  return (
    <div>
      <h2 className='font-bold text-xl lg:ml-4 lg:mt-10 mt-5 ml-4'>
        Select Rating
      </h2>
      <div className='ml-8 mt-6'>
        {ListData.ratingList.map((item, index) => {
          return (
            <div key={index} className='mt-2 flex justify-between'>
              <label>{item.icon}</label>
              <input type="checkbox" className='custom-checkbox mr-6 cursor-pointer' onChange={(e) => onClickRating(e.target.checked, item.name)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default rating