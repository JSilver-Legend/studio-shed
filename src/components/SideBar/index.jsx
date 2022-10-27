import React from 'react';

const SideBar = () => {
  return (
    <div className='w-60 h-screen bg-gray-800 pt-5 mb-2'>
        <div className='flex flex-col items-center border-solid border-b border-gray-600 hover:bg-gray-700 text-white'>
            <div>
                STUDIO SHED
            </div>
            <div>
                DESIGN CENTER
            </div>
        </div>
        <div className='border-solid border-b border-gray-600 hover:bg-gray-700'>
            saved model
        </div>
        <div>
            nav button
        </div>
    </div>
  )
}

export default SideBar;