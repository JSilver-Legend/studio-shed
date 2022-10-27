import React, { useState } from 'react';
import classnames from "classnames";

import { MdOutlineHouse } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import ModelCard from '../ModelCard';

const buttonInfo = [
    {
        number: 1,
        text:"Model"
    },
    {
        number: 2,
        text:"Interior"
    },
    {
        number: 3,
        text:"Exterior"
    }
];

const ModelCardInfo = [
    {
        type: "Shed Series",
        styles: [
            {
                name: "Gable Shed",
                imageSource: "https://s3-us-west-2.amazonaws.com/idearoom-stagingassets/shedview/images/shield-shed_shield-shed/style-icons/gable-shed.png"
            },
            {
                name: "Lean Shed",
                imageSource: "https://s3-us-west-2.amazonaws.com/idearoom-stagingassets/shedview/images/shield-shed_shield-shed/style-icons/lean-shed.png"
            }
        ],
        size: [
            {
                width: "6",
                height: "6",
                type: "*"
            },
            {
                width: "6",
                height: "8",
                type: "*"
            },
            {
                width: "8",
                height: "8",
                type: "*"
            },
            {
                width: "8",
                height: "10",
                type: "*"
            },
            {
                width: "8",
                height: "12",
                type: "*"
            },
            {
                width: "8",
                height: "14",
                type: "*"
            },
            {
                width: "10",
                height: "10",
                type: "*"
            },
            {
                width: "10",
                height: "12",
                type: "*"
            }
        ]
    },
    {
        type: "Studio Series",
        styles: [
            {
                name: "Lean Shed",
                imageSource: "https://s3-us-west-2.amazonaws.com/idearoom-stagingassets/shedview/images/shield-shed_shield-shed/style-icons/lean-studio.png"
            },
            {
                name: "Gable Shed",
                imageSource: "https://s3-us-west-2.amazonaws.com/idearoom-stagingassets/shedview/images/shield-shed_shield-shed/style-icons/gable-studio.png"
            }
        ],
        size: [
            {
                width: "8",
                height: "8",
                type: "*"
            },
            {
                width: "8",
                height: "12",
                type: "*"
            },
            {
                width: "8",
                height: "16",
                type: "*"
            },
            {
                width: "10",
                height: "12",
                type: "*"
            },
            {
                width: "10",
                height: "20",
                type: "*"
            }
        ]
    },
    {
        type: "ADU Series",
        styles: [
            {
                name: "Lean ADU",
                imageSource: "https://s3-us-west-2.amazonaws.com/idearoom-stagingassets/shedview/images/shield-shed_shield-shed/style-icons/lean-adu.png"
            },
            {
                name: "Lean ADU XL",
                imageSource: "https://s3-us-west-2.amazonaws.com/idearoom-stagingassets/shedview/images/shield-shed_shield-shed/style-icons/lean-adu-large.png"
            },
            {
                name: "Gable ADU",
                imageSource: "https://s3-us-west-2.amazonaws.com/idearoom-stagingassets/shedview/images/shield-shed_shield-shed/style-icons/gable-adu.png"
            }
        ],
        size: [
            {
                value: 150,
                type: "sq.ft"
            }
        ]
    }
]


const SideBar = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <>
        <div className='w-56 flex-shrink-0 h-screen bg-gray-800 pt-5'>
            <div className='flex flex-col items-center border-solid border-b border-gray-600 text-white'>
                <img alt='ss-white-logo' src='./assets/png/ss-white-logo.png' />
                <div className='mb-3'>
                    DESIGN CENTER
                </div>
            </div>
            <div className='border-solid border-b text-white border-gray-600 hover:bg-gray-700 hover:cursor-pointer h-16 justify-center items-center p-2 flex'>
                saved model
            </div>
            <div className='flex-col justify-between' >
                <div className='p-1 flex-col space-y-1'>
                    {
                        buttonInfo.map((item, index)=>(
                            <div key={index} onClick={()=>{ setSelectedCategory(item.text) }} className={classnames('flex flex-1 text-lg px-3 py-3 rounded-lg text-white hover:bg-gray-700 hover:cursor-pointer', {'bg-gray-900': selectedCategory === item.text})}>
                                <div className={classnames('w-8 h-8 flex items-center font-bold justify-center border-2 border-yellow-600 rounded-full', {'bg-yellow-600': selectedCategory === item.text})}>
                                    {item.number}
                                </div>
                                <div className='flex-1 flex items-center ml-5 justify-start'>
                                    {item.text}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='p-1 flex flex-1 text-lg px-4 py-3 rounded-lg text-white hover:bg-gray-700 hover:cursor-pointer' >
                    <div className='w-8 h-8 flex items-center justify-center border-2 border-yellow-600 rounded-full'>
                        <MdOutlineHouse color='white' width={10} height={10} />
                    </div>
                    <div className='flex-1 flex items-center ml-5 justify-start' >
                        Sign In
                    </div>
                </div>
            </div>
        </div>
        {  
        ( selectedCategory !== '' ) &&
            <div className='bg-white flex-shrink-0 w-96 pb-2 flex-col '>
                <div className='flex justify-between px-7 h-20 border-b border-blue-gray-200' >
                    <div className='text-lg font-medium text-blue-gray-900 flex justify-center items-center' >
                        { selectedCategory }
                    </div>
                    <div className='hover:cursor-pointer hover:text-gray-400 flex justify-center items-center '>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='flex-col p-4 bg-slate-50'>
                    {
                        ModelCardInfo.map((item, index)=>(
                            <ModelCard key={index} items={item}/>
                        ))
                    }
                </div>
            </div>
        }
    </>
  )
}

export default SideBar;