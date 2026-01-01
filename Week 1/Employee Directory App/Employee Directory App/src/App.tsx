// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { ProfileCard } from './components/ProfileCard'
import './App.css'
import { Employees } from './components/EmployeesData'
import { NavBar } from './components/SearchNav'

function App() {

  return (
    <>
      <NavBar />
      <Employees />
    </>
  )
}

export default App
