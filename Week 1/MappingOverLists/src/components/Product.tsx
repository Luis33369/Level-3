import { ProductCard } from './ProductCard';

export const Product = () => {

  const products = [
    {
      title: "Wireless Headphones",
      price: 79.99,
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      title: "Smart Watch",
      price: 149.99,
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      title: "Mechanical Keyboard",
      price: 99.99,
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      title: "Gaming Mouse",
      price: 49.99,
      image: "https://picsum.photos/300/200?random=4",
    },
    {
      title: "USB-C Hub",
      price: 39.99,
      image: "https://picsum.photos/300/200?random=5",
    },
  ];

  return (
    <>
      <div className='grid grid-cols-3 gap-2'>
        {products.map(product => (
          <ProductCard name={product.title} price={product.price} image={product.image} />
        ))}
      </div>
    </>
  );
};
