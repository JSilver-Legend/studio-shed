import classnames from 'classnames';
import React, { useState } from 'react'

const RadioButton = ({items, setValue, defaultValue}) => {

  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const setStateValue = (value) => {
    setValue(value);
  }

  return (
    <div className='flex-rows' >
        { 
            items.map((item, index)=>(
                <div key={index} onClick={()=>{
                  setStateValue(item.value);
                  setSelectedOption(item.value)
                }} className={classnames('p-4 my-1 rounded-lg font-semibold border-gray-600 hover:bg-gray-400 hover:cursor-pointer hover:text-gray-100', {'bg-gray-700 text-gray-100': selectedOption === item.value, 'bg-gray-100 text-gray-700': selectedOption !== item.value})}>
                    {item.label}
                </div>
            ))
        }
    </div>
  )
}

export default RadioButton;