import React, { useState } from 'react';
import classnames from "classnames";

import { MdOutlineHouse } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import ModelCard from '../ModelCard';
import RadioButton from '../RadioButton';
import CheckboxButton from '../CheckboxButton';
import ColorCard from '../ColorCard';

const buttonInfo = [
    {
        number: 1,
        text:"Style"
    },
    {
        number: 2,
        text:"Flooring & Interior"
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
                value: "6-6",
                width: "6",
                height: "6",
                type: "*"
            },
            {
                value: "6-8",
                width: "6",
                height: "8",
                type: "*"
            },
            {
                value: "8-8",
                width: "8",
                height: "8",
                type: "*"
            },
            {
                value: "8-10",
                width: "8",
                height: "10",
                type: "*"
            },
            {
                value: "8-12",
                width: "8",
                height: "12",
                type: "*"
            },
            {
                value: "8-14",
                width: "8",
                height: "14",
                type: "*"
            },
            {
                value: "10-10",
                width: "10",
                height: "10",
                type: "*"
            },
            {
                value: "10-12",
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
                value: "8-8",
                width: "8",
                height: "8",
                type: "*"
            },
            {
                value: "8-12",
                width: "8",
                height: "12",
                type: "*"
            },
            {
                value: "8-16",
                width: "8",
                height: "16",
                type: "*"
            },
            {
                value: "10-12",
                width: "10",
                height: "12",
                type: "*"
            },
            {
                value: "10-20",
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
                value: "150",
                type: "sq.ft"
            }
        ]
    }
];

const FlooringAndIneriorInfo = [
    {
        style: "Shed Series",
        flooring: [
            {
                type: "Flooring options are not shown visually on the model but are included in the price estimate.",
                options: [
                    {
                        value: '3/4-plywood',
                        label: '3/4" Plywood'
                    },
                    {
                        value: '1-Plywood',
                        label: '1" Plywood'
                    }
                ]
            }
        ],
        interior: [
            {
                type: "Electrical Option",
                options: {
                    optionsType: 'optional',
                    data: [
                        {
                            value: 'Electrical',
                            label: 'Electrical Package'
                        }
                    ]
                }
            },
            {
                type: "",
                options: {
                    optionsType: 'radio',
                    data: [
                        {
                            value: 'CAT5e',
                            label: 'CAT5e Outlet'
                        }
                    ]
                }
            },
            {
                type: "Workbenches",
                options: {
                    optionsType: 'radio',
                    data: [
                        {
                            value: 'None',
                            label: 'None'
                        },
                        {
                            value: 'Workbench',
                            label: 'Workbench (full wall length)'
                        }
                    ]
                }
            }
        ]
    },
    {
        style: "Studio Series",
        flooring: [
            {
                type: "Flooring options are not shown visually on the model but are included in the price estimate.",
                options: [
                    {
                        value: 'Waterproof-none-diaplay',
                        label: 'Waterproof Laminate Wood Flooring'
                    }
                ]
            },
            {
                type: "Waterproof Laminate Wood Flooring Color Options",
                options: [
                    {
                        value: 'Sunbaked',
                        label: 'Sunbaked Sand Oak'
                    },
                    {
                        value: 'Vintage',
                        label: 'Vintage Pewter Oak'
                    },
                    {
                        value: 'Weathered',
                        label: 'Weathered Grey Wood'
                    },
                    {
                        value: 'Arden',
                        label: 'Arden Blonde Hickory'
                    },
                    {
                        value: 'Lawrence',
                        label: 'Lawrence Chestnut'
                    },
                    {
                        value: 'Montage',
                        label: 'Montage Grey Oak'
                    }
                ]
            }
        ],
        interior: [
            {
                type: "Electrical Option",
                options: {
                    optionsType: 'radio',
                    data: [
                        {
                            value: 'Electrical',
                            label: 'Electrical Package'
                        }
                    ]
                }
            },
            {
                type: "",
                options: {
                    optionsType: 'optional',
                    data: [
                        {
                            value: 'CAT5e',
                            label: 'CAT5e Outlet'
                        },
                        {
                            value: 'Ductless',
                            label: 'Ductless Mini Split with Installation'
                        },
                        {
                            value: 'Extra',
                            label: 'Extra Interior Plug'
                        }
                    ]
                }
            }
        ]
    },
    {
        style: "ADU Series",
        flooring: [
            {
                type: "Flooring options are not shown visually on the model but are included in the price estimate.",
                options: [
                    {
                        value: 'Waterproof-none-diaplay',
                        label: 'Waterproof Laminate Wood Flooring'
                    }
                ]
            },
            {
                type: "Waterproof Laminate Wood Flooring Color Options",
                options: [
                    {
                        value: 'Sunbaked',
                        label: 'Sunbaked Sand Oak'
                    },
                    {
                        value: 'Vintage',
                        label: 'Vintage Pewter Oak'
                    },
                    {
                        value: 'Weathered',
                        label: 'Weathered Grey Wood'
                    },
                    {
                        value: 'Arden',
                        label: 'Arden Blonde Hickory'
                    },
                    {
                        value: 'Lawrence',
                        label: 'Lawrence Chestnut'
                    },
                    {
                        value: 'Montage',
                        label: 'Montage Grey Oak'
                    }
                ]
            }
        ],
    }
];

const ExteriorIngo = [
    {
        type: 'Architectural Shingles',
        data: [
            {
                name: 'Aged Cedar',
                url: '/assets/png/Aged_Cedar.png'
            },
            {
                name: 'Amber',
                url: '/assets/png/Amber.png'
            },
            {
                name: 'Brownwood',
                url: '/assets/png/Brownwood.png'
            },
            {
                name: 'Desert Tan',
                url: '/assets/png/Desert_Tan.png'
            },
            {
                name: 'Driftwood',
                url: '/assets/png/Driftwood.png'
            },
            {
                name: 'Gray',
                url: '/assets/png/Gray.png'
            },
            {
                name: 'Onyx Black',
                url: '/assets/png/Onyx_Black.png'
            },
            {
                name: 'Sand Castle',
                url: '/assets/png/Sand_Castle.png'
            },
            {
                name: 'Shasta White',
                url: '/assets/png/Shasta_White.png'
            },
            {
                name: 'Sierra Gray',
                url: '/assets/png/Sierra_Gray.png'
            },
            {
                name: 'Teak',
                url: '/assets/png/Teak.png'
            }
        ]
    },
    {
        type: 'SmartSide',
        data: [
            {
                name: 'No Paint',
                color: '#ffffff'
            },
            {
                name: 'Alabaster White',
                color: '#eceae1'
            },
            {
                name: 'Evergreen Fog',
                color: '#95978b'
            },
            {
                name: 'Urban Bronze',
                color: '#53504b'
            },
            {
                name: 'Naval',
                color: '#323d4b'
            },
            {
                name: 'Cavern Clay',
                color: '#a36e58'
            },
            {
                name: 'Oceanside',
                color: '#255969'
            },
            {
                name: 'Poised Taupe',
                color: '#8a7e79'
            },
            {
                name: 'Agreeable Gray',
                color: '#d0cbc2'
            },
            {
                name: 'Dovetail',
                color: '#8f8a84'
            },
            {
                name: 'Tricorn Black',
                color: '#2f2f30'
            },
        ]
    },
    {
        type: 'Trim',
        data: [
            {
                name: 'Alabaster White',
                color: '#eceae1'
            },
            {
                name: 'Evergreen Fog',
                color: '#95978b'
            },
            {
                name: 'Urban Bronze',
                color: '#53504b'
            },
            {
                name: 'Naval',
                color: '#323d4b'
            },
            {
                name: 'Cavern Clay',
                color: '#a36e58'
            },
            {
                name: 'Oceanside',
                color: '#255969'
            },
            {
                name: 'Poised Taupe',
                color: '#8a7e79'
            },
            {
                name: 'Agreeable Gray',
                color: '#d0cbc2'
            },
            {
                name: 'Dovetail',
                color: '#8f8a84'
            },
            {
                name: 'Tricorn Black',
                color: '#2f2f30'
            },
        ]
    },
    {
        type: 'Countertop Colors',
        data: [
            {
                name: 'Calacatta Onyx',
                url: '/assets/png/Calacatta_Onyx.png'
            },
            {
                name: 'Calacatta',
                url: '/assets/png/Calacatta.png'
            },
            {
                name: 'Concrete Dark',
                url: '/assets/png/Concrete_Dark.png'
            },
            {
                name: 'Concrete Light',
                url: '/assets/png/Concrete_Light.png'
            }
        ],

    }
];

const SideBar = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSelectedModelStyle, setCurrentSelectedModelStyle] = useState('ADU Series');
  const [architecturalShinglesState, setArchitecturalShinglesState] = useState('Aged Cedar');
  const [smartSideState, setSmartSideState] = useState('No Paint');
  const [trimState, setTrimState] = useState('Alabaster White');
  const [countertopColorsState, setCountertopColorsState] = useState('Calacatta Onyx');

  const setCurrnetFlooringOptions = () => {

  }

  const setCurrentInteriorOptions = () => {
    
  }

  const setArchitecturalShinglesOptions = (value) => {
    setArchitecturalShinglesState(value);
  }

  const setSmartSideOptions = (value) => {
    setSmartSideState(value);
  }

  const setTrimOptions = (value) => {
    setTrimState(value);
  }

  const setCountertopColors = (value) => {
    setCountertopColorsState(value);
  }

  return (
    <>
        <div className='w-60 flex-shrink-0 h-screen bg-gray-800 pt-5'>
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
                                <div className='flex-1 flex font-bold items-center ml-3 justify-start'>
                                    {item.text}
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <div className='p-1 flex flex-1 text-lg px-4 py-3 rounded-lg text-white hover:bg-gray-700 hover:cursor-pointer' >
                    <div className='w-8 h-8 flex items-center justify-center border-2 border-yellow-600 rounded-full'>
                        <MdOutlineHouse color='white' width={10} height={10} />
                    </div>
                    <div className='flex-1 flex items-center ml-5 justify-start' >
                        Sign In
                    </div>
                </div> */}
            </div>
        </div>
        {  
            selectedCategory &&
            <div className='bg-white flex flex-shrink-0 w-98 h-screen flex-col'>
                <div className='flex justify-between px-7 h-20 border-b border-blue-gray-200' >
                    <div className='text-lg font-medium text-blue-gray-900 flex justify-center items-center' >
                        { selectedCategory }
                    </div>
                    <div onClick={()=>{ setSelectedCategory(null) }}  className='hover:cursor-pointer hover:text-gray-400 flex justify-center items-center '>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='flex-1 flex-col p-4 bg-slate-50 overflow-y-auto'>
                    {
                        selectedCategory === 'Style' &&
                            ModelCardInfo.map((item, index)=>(
                                <ModelCard key={index} items={item}/>
                            ))
                    }
                    {
                        selectedCategory === 'Flooring & Interior' &&
                        <>
                            <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Flooring</div>
                            {
                                FlooringAndIneriorInfo.find(( s ) => s.style === currentSelectedModelStyle ).flooring.map((item, index) => (
                                    <div key={index}>
                                        <div className='py-2' >{item.type}</div>
                                        <RadioButton items={item.options} setValue={setCurrnetFlooringOptions} defaultValue={item.options[0].value} />
                                    </div>
                                ))
                            }
                            {
                                currentSelectedModelStyle !== 'ADU Series' &&
                                <>
                                    <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Interior</div>
                                    <div>Interior options are not shown visually on the model but are included in the price estimate.</div>
                                    {
                                        FlooringAndIneriorInfo.find(( s ) => s.style === currentSelectedModelStyle ).interior.map((item, index) => (
                                            <div key={index}>
                                                <div className='py-3 font-bold' >{item.type}</div>
                                                {
                                                    item.options.optionsType === 'radio' ? 
                                                    <RadioButton items={item.options.data} setValue={setCurrentInteriorOptions} defaultValue={item.options.data[0].value} />
                                                    : (
                                                        item.options.data.map((element, index)=>(
                                                            <CheckboxButton key={index} item={element} setValue={setCurrentInteriorOptions} />
                                                        ))
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                </>
                            }
                        </>
                    }
                    {
                        selectedCategory === 'Exterior' &&
                        <>
                            <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Colors & Modifications</div>
                            <div>Colors are approximate. We are happy to provide you with an exact color sample, upon request.</div>
                            <div className='my-3 pb-1 text-gray-500 text-base font-bold'>Architectural Shingles</div>
                            <ColorCard setValue={setArchitecturalShinglesOptions} type={'texture'} items={ExteriorIngo.find((s)=> s.type === 'Architectural Shingles').data} />
                            <div className='my-3 pb-1 text-gray-500 text-base font-bold'>SmartSide</div>
                            <ColorCard setValue={setSmartSideOptions} type={'color'} items={ExteriorIngo.find((s)=> s.type === 'SmartSide').data} />
                            {
                                smartSideState !== 'No Paint' &&
                                <>
                                    <div className='my-3 pb-1 text-gray-500 text-base font-bold'>Trim</div>
                                    <ColorCard setValue={setTrimOptions} type={'color'} items={ExteriorIngo.find((s)=> s.type === 'Trim').data} />
                                </>

                            }
                            {
                                currentSelectedModelStyle === 'ADU Series' &&
                                <>
                                    <div className='my-3 pb-1 text-gray-500 text-base font-bold'>Countertop Colors</div>
                                    <ColorCard setValue={setCountertopColors} type={'texture'} items={ExteriorIngo.find((s)=> s.type === 'Countertop Colors').data} />
                                </>
                            }
                        </>
                    }
                </div>
            </div>
        }
    </>
  )
}

export default SideBar;