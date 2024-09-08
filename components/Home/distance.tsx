"use client"
import React, { useState } from 'react'
import './slider.css'

const distance = () => {
  const [distance, setDistance] = useState<number>(1000)
  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-xl lg:ml-4 lg:mt-10 mt-5 ml-4'>
        Select Distance
      </h2>
      <div className='flex flex-col gap-4 justify-center items-start'>
        <input type="range" className='slider w-[75%] ml-8 h-2 appearance-none rounded cursor-pointer mt-6' min={0} max={10} step={1} defaultValue={distance} onChange={(e) => setDistance(Number(e.target.value))} />
        <label className='ml-8'>{distance} Km</label>
      </div>
    </div>
  )
}

export default distance