import React, { useState } from 'react';
import InfoSection from '../components/myhome/InfoSection';
import Hero from '../components/myhome/Hero';
import DropDown from '../components/myhome/DropDown';
import { SlideData } from '../data/SliderData';
import Navbar from '../components/myhome/Navbar';
import { InfoData } from '../data/InfoData';
import GlobalStyles from '../globalStyles';

function MyHome() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SlideData} />
      <InfoSection {...InfoData} />
      {/* <InfoSection {...InfoDataTwo} /> */}
    </div>
  );
}

export default MyHome;
