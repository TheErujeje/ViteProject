import React, { useState } from 'react';
import { AiFillApple } from "react-icons/ai";
// import './App.css';
import Header from './components/Header'
import LessonsInsight from './components/LessonsInsight';
import Footer from './components/Footer';
import Footerlist from './components/Footerlist';
import OurClient from './components/OurClient';
import ManageCommunity from './components/ManageCommunity';


function App() {
  return (<>
    <Header />
    <LessonsInsight />
    {/* <OurClient /> */}
    <ManageCommunity />
    <div className='text-3xl font-bold underline px-10 pt-[84px] ' > <AiFillApple /> fHello World</div>
    <Footer />
  </>
  );
}

export default App;
