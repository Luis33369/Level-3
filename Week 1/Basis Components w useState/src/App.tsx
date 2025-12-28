// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from "./components/Counter";
import { Toggle } from "./components/ToggleButton";
import { ToggleText } from './components/ShowHideText';
import { SimpleForm } from './components/SimpleFormInput';
import { Password } from './components/PasswordToggle';
import { Sidebar } from './components/Sidebar';



function App() {

  return (
    <>
      <Counter />
      <Toggle />
      <ToggleText />
      <SimpleForm />
      <Password />
      <Sidebar />
    </>
  );
};

export default App
