"use client"
import React, { useState } from 'react'
import ListData from '@/Assets/ListData'

function List() {

  const [list, setList] = useState(ListData.CategoryListData)
  const [active, isActive] = useState<number | null>(null);
  return (
    <div>
      <h2 className='font-bold text-xl lg:ml-4 lg:mt-6 ml-4 mt-4'>Select Restaurant Type</h2>
      <div className='flex justify-center items-center'>
        {list.map((item, index) => {
          return (<div className={`flex flex-col justify-center items-center bg-[#a5a5a5] p-2 m-1 mt-6 rounded-lg grayscale hover:grayscale-0 cursor-pointer w-28 ${active == index ? 'grayscale-0 border-[1px] border-red-300' : null}`} onClick={() => isActive(index)}>
            <img src={item.icon} alt={item.name} width={40} height={40} className='hover:scale-105 mb-2' />
            {item.name}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default List