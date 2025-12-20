import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg';
// import hero_desktop from './assets/hero_desktop.png';
import './App.css'

import { Body } from './components/body';
import { Footer } from './components/footer';
import { HeaderWithLinks } from './components/body';
import { Navbar } from "./components/header";





function App() {
  return (
    <>
      {/* Header */}
      <Navbar/>
      {/* Body */}
      <div className='flex justify-between w-full'>
        <HeaderWithLinks img="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg" title="Become a Dasher" paragraph="As a delivery driver, make monery and work on your schedule. Sign up in minutes." link="https://www.doordash.com/" link2="Start earning"/>
        <HeaderWithLinks img="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg" title='Become a merchant' paragraph='Attract new customer and grow sales, starting with 0% commissions for up to 30 days.' link='https://www.doordash.com/'  link2='Sign up for Doordash'/>
        <HeaderWithLinks img='https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg' title="Get the best DoorDash experience" paragraph="Experience the best your neighborhood has to offer, all in one app." link="ttps://www.doordash.com/" link2="Get the app" />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
