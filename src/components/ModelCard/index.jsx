import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
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
];

const PorchData = [
    {
        value: "noDeck",
        label: "No Deck"
    },
    {
        value: "stepOutDeck",
        label: "Step Out Deck"
    }
];

const SidewallData = [
    {
        value: "Sidewall-6",
        label: "6' Sidewall"
    },
    {
        value: "Sidewall-7",
        label: "7' Sidewall"
    }
];

const RoofData = [
    {
        value: "Standard",
        label: '3/4" - Standard'
    },
    {
        value: "Medium",
        label: '6" - Medium Upgrade'
    },
    {
        value: "Large",
        label: '12" - Large Upgrade'
    }
];

const ModelCard = ({items}) => {

  const [openState, setOpenState] = useState(false);
  const [style, setStyle] = useState(null);
  const [selectedSidingState, setSelectedSidingState] = useState(null);
  const [selectedPorchState, setSelectedPorchState] = useState(null);
  const [selectedSidewallState, setSelectedSidewallState] = useState(null);
  const [selectedRoofState, setSelectedRoofState] = useState(null);
  const [selectedSizeState, setSelectedSizeState] = useState(items['size'][0]['value']);

  const setSidingState = (value) => {
    setSelectedSidingState(value);
  }

  const setPorchState = (value) => {
    setSelectedPorchState(value);
  }

  const setSidewallState = (value) => {
    setSelectedSidewallState(value);
  }

  const setRoofState = (value) => {
    setSelectedRoofState(value);
  }

  return (
    <div className='text-left w-full p-4 justify-between  text-gray-400 mt-2 mb-6 border-gray-200 rounded bg-white shadow hover:shadow-lg' >
        <div onClick={()=>{setOpenState(!openState)}}  className='flex hover:cursor-pointer'>
            <div className='flex flex-1 text-gray-600 font-bold justify-center items-center text-center'>
                {items.type}
            </div>
            <div>
                {
                    openState ? <RiArrowDropUpLine size={40} /> : <RiArrowDropDownLine size={40} />
                }
            </div>
        </div>
        { 
            openState &&
                <div className='my-4'>
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            items.styles.map((item, index)=>(
                                <div onClick={()=>{ setStyle(index) }} key={index} className={classnames('hover:bg-gray-200 hover:cursor-pointer grid-rows-6 rounded-xl py-1', {'bg-gray-200': style === index})}  >
                                    <img alt='styleImage' src={item.imageSource} />
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
                                    <div key={index} onClick={()=>{ setSelectedSizeState(item.value) }} className={classnames('hover:bg-gray-600 hover:cursor-pointer rounded-md p-3 text-white font-semibold grid-rows-6 flex justify-start items-center', {'bg-gray-600': selectedSizeState === item.value, 'bg-gray-400': selectedSizeState !== item.value})}>
                                        {item.width} <MdClose color='white' /> {item.height} 
                                    </div> :
                                    <div key={index} onClick={()=>{ setSelectedSizeState(item.value) }} className={classnames('hover:bg-gray-600 hover:cursor-pointer rounded-md p-3 text-white font-semibold grid-rows-6 flex justify-start items-center', {'bg-gray-600': selectedSizeState === item.value, 'bg-gray-400': selectedSizeState !== item.value})}>
                                        {item.value} {item.type}
                                    </div>
                                ))
                              }
                           </div>
                           <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Siding</div>
                           <div className='my-2'>
                                <RadioButton items={SidingData} setValue={setSidingState} defaultValue={'smartside'} />
                           </div>
                           { items.type !== 'ADU Series' &&
                                <>
                                    <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Porch</div>
                                    <div className='my-2'>
                                            <RadioButton items={PorchData} setValue={setPorchState} defaultValue={'noDeck'} />
                                    </div>
                                </>
                           }
                           { items.type === 'Shed Series'&&
                                <>
                                    <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Sidewall Height</div>
                                    <div className='my-2'>
                                            <RadioButton items={SidewallData} setValue={setSidewallState} defaultValue={'Sidewall-6'} />
                                    </div>
                                </>
                           }
                           { items.type !== 'ADU Series' &&
                                <>
                                    <div className='border-gray-500 border-b my-3 pb-1 text-base font-bold'>Roof Overhang</div>
                                    <div className='my-2'>
                                            <RadioButton items={RoofData} setValue={setRoofState} defaultValue={'Standard'} />
                                    </div>
                                </>
                           }
                        </div>
                    </div>
                </div>
        }
    </div>
  )
}

export default ModelCard;