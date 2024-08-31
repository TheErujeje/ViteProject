import React from 'react'
import LessonsInsight from '../components/LessonsInsight.jsx'
import Header from '../components/Header.jsx'
import OurClient from '../components/OurClient.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
    <Header />
      <LessonsInsight />
      <OurClient />
      <Footer />
    </>

  )
}

export default Welcome