import React from 'react'

const RadioButton = ({items}) => {
  return (
    <div className='flex-rows' >
        {
            items.map((item, index)=>(
                <div key={index} className='text-gray-700 p-4 my-1 rounded-lg font-semibold border-gray-600 bg-gray-100 hover:bg-gray-600 hover:cursor-pointer hover:text-gray-100'>
                    {item.label}
                </div>
            ))
        }
    </div>
  )
}

export default RadioButton;