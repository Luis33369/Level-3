// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Greeting, Links } from './components/GreetingBanner'
import { Sidebar } from './components/Sidebar'
import { Counter } from './components/CounterNot'

function App() {

  return (
    <>
      {/* <div className='flex'> */}
      <Links />
      <Greeting name="Luis" />
      <Counter />
      <Sidebar />
      {/* </div> */}

    </>
  )
}

export default App
