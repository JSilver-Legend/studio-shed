import React from 'react';
import Builder from '../../components/Builder';
import SideBar from '../../components/SideBar';

const Home = () => {
  return (
    <div className='flex' >
      <SideBar />
      <Builder />
    </div>
  )
}

export default Home;