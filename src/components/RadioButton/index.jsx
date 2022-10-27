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
                }} className={classnames('text-gray-700 p-4 my-1 rounded-lg font-semibold border-gray-600 bg-gray-100 hover:bg-gray-400 hover:cursor-pointer hover:text-gray-100', {'bg-gray-600 text-gray-100': selectedOption === item.value})}>
                    {item.label}
                </div>
            ))
        }
    </div>
  )
}

export default RadioButton;