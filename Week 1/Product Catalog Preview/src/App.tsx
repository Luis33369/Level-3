import { useState } from 'react'
import './App.css'
import { Card } from './components/ProductCard';
import { Render } from './components/RenderCards';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card /> */}
      <Render />
    </>
  );
};

export default App
