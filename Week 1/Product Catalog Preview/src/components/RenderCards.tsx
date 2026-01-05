import { useState } from 'react';
import { Card } from './ProductCard';

export const Render = () => {
  const [currency, setCurrency] = useState("USD");

  const products = [
    { id: 1, name: "Wireless Headphones", image: "https://picsum.photos/300/300?random=1", rate: 4.5, price: 79.99 },
    { id: 2, name: "Smart Watch", image: "https://picsum.photos/300/300?random=2", rate: 4.2, price: 129.99 },
    { id: 3, name: "Mechanical Keyboard", image: "https://picsum.photos/300/300?random=3", rate: 4.8, price: 99.99 },
    { id: 4, name: "Gaming Mouse", image: "https://picsum.photos/300/300?random=4", rate: 4.4, price: 49.99 },
    { id: 5, name: "Bluetooth Speaker", image: "https://picsum.photos/300/300?random=5", rate: 4.6, price: 59.99 },
    { id: 6, name: "4K Monitor", image: "https://picsum.photos/300/300?random=6", rate: 4.7, price: 299.99 },
    { id: 7, name: "USB-C Hub", image: "https://picsum.photos/300/300?random=7", rate: 4.1, price: 39.99 },
    { id: 8, name: "External SSD 1TB", image: "https://picsum.photos/300/300?random=8", rate: 4.9, price: 149.99 },
    { id: 9, name: "Noise Cancelling Earbuds", image: "https://picsum.photos/300/300?random=9", rate: 4.3, price: 89.99 },
    { id: 10, name: "HD Webcam", image: "https://picsum.photos/300/300?random=10", rate: 4.0, price: 54.99 },

    { id: 11, name: "Laptop Stand", image: "https://picsum.photos/300/300?random=11", rate: 4.4, price: 34.99 },
    { id: 12, name: "Wireless Charger", image: "https://picsum.photos/300/300?random=12", rate: 4.2, price: 29.99 },
    { id: 13, name: "Portable Power Bank", image: "https://picsum.photos/300/300?random=13", rate: 4.6, price: 44.99 },
    { id: 14, name: "Smart LED Bulb", image: "https://picsum.photos/300/300?random=14", rate: 4.1, price: 19.99 },
    { id: 15, name: "Desk Lamp", image: "https://picsum.photos/300/300?random=15", rate: 4.3, price: 27.99 },
    { id: 16, name: "Ergonomic Chair", image: "https://picsum.photos/300/300?random=16", rate: 4.7, price: 199.99 },
    { id: 17, name: "Graphic Tablet", image: "https://picsum.photos/300/300?random=17", rate: 4.5, price: 89.99 },
    { id: 18, name: "Smartphone Tripod", image: "https://picsum.photos/300/300?random=18", rate: 4.0, price: 24.99 },
    { id: 19, name: "Action Camera", image: "https://picsum.photos/300/300?random=19", rate: 4.4, price: 159.99 },
    { id: 20, name: "VR Headset", image: "https://picsum.photos/300/300?random=20", rate: 4.6, price: 249.99 },

    { id: 21, name: "Fitness Tracker", image: "https://picsum.photos/300/300?random=21", rate: 4.3, price: 69.99 },
    { id: 22, name: "Wireless Router", image: "https://picsum.photos/300/300?random=22", rate: 4.2, price: 99.99 },
    { id: 23, name: "Security Camera", image: "https://picsum.photos/300/300?random=23", rate: 4.5, price: 79.99 },
    { id: 24, name: "Smart Thermostat", image: "https://picsum.photos/300/300?random=24", rate: 4.6, price: 179.99 },
    { id: 25, name: "Electric Kettle", image: "https://picsum.photos/300/300?random=25", rate: 4.1, price: 39.99 },
    { id: 26, name: "Air Fryer", image: "https://picsum.photos/300/300?random=26", rate: 4.7, price: 119.99 },
    { id: 27, name: "Robot Vacuum", image: "https://picsum.photos/300/300?random=27", rate: 4.8, price: 299.99 },
    { id: 28, name: "Smart Door Lock", image: "https://picsum.photos/300/300?random=28", rate: 4.4, price: 149.99 },
    { id: 29, name: "Wireless Doorbell", image: "https://picsum.photos/300/300?random=29", rate: 4.2, price: 59.99 },
    { id: 30, name: "Indoor Security Sensor", image: "https://picsum.photos/300/300?random=30", rate: 4.0, price: 34.99 },

    { id: 31, name: "Portable Projector", image: "https://picsum.photos/300/300?random=31", rate: 4.5, price: 219.99 },
    { id: 32, name: "Noise Cancelling Mic", image: "https://picsum.photos/300/300?random=32", rate: 4.6, price: 89.99 },
    { id: 33, name: "Streaming Light Panel", image: "https://picsum.photos/300/300?random=33", rate: 4.4, price: 69.99 },
    { id: 34, name: "USB Desk Fan", image: "https://picsum.photos/300/300?random=34", rate: 4.1, price: 19.99 },
    { id: 35, name: "Cable Organizer", image: "https://picsum.photos/300/300?random=35", rate: 4.0, price: 14.99 },
    { id: 36, name: "Smart Plug", image: "https://picsum.photos/300/300?random=36", rate: 4.3, price: 24.99 },
    { id: 37, name: "Digital Alarm Clock", image: "https://picsum.photos/300/300?random=37", rate: 4.2, price: 29.99 },
    { id: 38, name: "Electric Standing Desk", image: "https://picsum.photos/300/300?random=38", rate: 4.8, price: 399.99 },
    { id: 39, name: "Laptop Backpack", image: "https://picsum.photos/300/300?random=39", rate: 4.6, price: 69.99 },
    { id: 40, name: "Smart Scale", image: "https://picsum.photos/300/300?random=40", rate: 4.3, price: 49.99 },

    { id: 41, name: "Electric Toothbrush", image: "https://picsum.photos/300/300?random=41", rate: 4.5, price: 59.99 },
    { id: 42, name: "Hair Dryer Pro", image: "https://picsum.photos/300/300?random=42", rate: 4.4, price: 79.99 },
    { id: 43, name: "Smart Mirror", image: "https://picsum.photos/300/300?random=43", rate: 4.6, price: 199.99 },
    { id: 44, name: "Coffee Grinder", image: "https://picsum.photos/300/300?random=44", rate: 4.2, price: 44.99 },
    { id: 45, name: "Espresso Machine", image: "https://picsum.photos/300/300?random=45", rate: 4.7, price: 349.99 },
    { id: 46, name: "Smart Water Bottle", image: "https://picsum.photos/300/300?random=46", rate: 4.1, price: 39.99 },
    { id: 47, name: "Electric Scooter", image: "https://picsum.photos/300/300?random=47", rate: 4.6, price: 499.99 },
    { id: 48, name: "Car Dash Camera", image: "https://picsum.photos/300/300?random=48", rate: 4.3, price: 89.99 },
    { id: 49, name: "Wireless Car Charger", image: "https://picsum.photos/300/300?random=49", rate: 4.2, price: 29.99 },
    { id: 50, name: "Smart Air Purifier", image: "https://picsum.photos/300/300?random=50", rate: 4.7, price: 229.99 },
  ];

  return (
    <>
      <div className='grid grid-cols-4 p-3'>
        {products.map((product) => (<Card key={product.id} image={product.image} name={product.name} rate={product.rate} price={product.price} />))}
      </div>
    </>

  );
};
