import './App.css'
import { List } from './components/List';
import { Directory } from './components/Directory';
import { Navigation } from './components/Navigation';
// import { ProductCard } from './components/ProductCard';
import { Product } from './components/Product';
import { Features } from './components/Features';

function App() {

  return (
    <>
      <h1>Navigation Menu</h1>
      <Navigation />
      <List />
      <h1>Team Directory</h1>
      <Directory />
      {/* <ProductCard name="Shoes" price="39.99" image="https://picsum.photos/300/200?random=1" /> */}
      <h1>Product List</h1>
      <Product />
      <h1>Product Features</h1>
      <Features />

    </>
  );
};

export default App
