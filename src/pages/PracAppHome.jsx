import React, { useState } from 'react';
import Header from '../components/Header.jsx'
import LessonsInsight from '../components/LessonsInsight';
import Footer from '../components/Footer';
import OurClient from '../components/OurClient';
import ManageCommunity from '../components/ManageCommunity';

function PracAppHome() {
    return (<>
        <Header /> 
        <LessonsInsight />
        <OurClient />
        <ManageCommunity />
        <Footer />
      </>
      );
    }

export default PracAppHome