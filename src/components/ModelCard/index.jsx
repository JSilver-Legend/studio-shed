import React, { useState } from 'react';
import classnames from "classnames";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import RadioButton from '../RadioButton';

const SidingData = [
    {
        value: "smartside",
        label: "LP Smartside"
    },
    {
        value: "plankside",
        label: "James Hardie Plank Siding"
    }
]

const ModelCard = ({items}) => {

  const [openState, setOpenState] = useState(false);
  const [style, setStyle] = useState(null);

  return (
    <div className='text-left w-full p-4 justify-between  text-gray-400 mt-2 mb-6 border-gray-200 rounded bg-white shadow hover:shadow-lg' >
        <div onClick={()=>{setOpenState(!openState)}}  className='flex hover:cursor-pointer'>
            <div className='flex flex-1 justify-center items-center text-center'>
                {items.type}
            </div>
            <div>
                {
                    openState ? <RiArrowDropDownLine size={40} /> : <RiArrowDropUpLine size={40} />
                }
            </div>
        </div>
        { 
            openState &&
                <div className='my-4'>
                    <div className='grid grid-cols-2'>
                        {
                            items.styles.map((item, index)=>(
                                <div onClick={()=>{ setStyle(index) }} key={index} className={classnames('hover:bg-gray-200 hover:cursor-pointer grid-rows-6 rounded-xl py-1', {'bg-gray-100': style === index})}  >
                                    <img src={item.imageSource} />
                                    <div className='flex justify-center text-gray-800 font-semibold'>{item.name}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <div> 
                           <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Size</div>
                           <div className='grid grid-cols-2 gap-3 justify-center py-2'>
                              {
                                items.size.map((item, index)=>(
                                    item.type === "*" ? 
                                    <div key={index} className='bg-gray-700 hover:bg-gray-600 hover:cursor-pointer rounded-md p-3 text-white font-semibold grid-rows-6 flex justify-start items-center'>
                                        {item.width} * {item.height}
                                    </div> :
                                    <div className='bg-gray-700 hover:bg-gray-600 hover:cursor-pointer p-3 rounded-md text-white font-semibold grid-rows-6 flex justify-start items-center'>
                                        {item.value} {item.type}
                                    </div>
                                ))
                              }
                           </div>
                           <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Siding</div>
                           <div className='my-2'>
                                <RadioButton items={SidingData} />
                           </div>
                           <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Porch</div>
                           <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Sidewall Height</div>
                           <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Roof Overhang</div>
                        </div>
                    </div>
                </div>
        }
    </div>
  )
}

export default ModelCard;