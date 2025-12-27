import { FaCheckSquare } from "react-icons/fa";

export const Features = () => {

  const productFeatures = [
    {
      id: 1,
      feature: "Wireless Bluetooth connectivity",
    },
    {
      id: 2,
      feature: "Up to 20 hours of battery life",
    },
    {
      id: 3,
      feature: "Noise-canceling microphone",
    },
    {
      id: 4,
      feature: "Lightweight and comfortable design",
    },
    {
      id: 5,
      feature: "Compatible with iOS and Android",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="w-80 rounded-md bg-white text-gray-900 ">
          <img className="mx-auto p-2 " src="https://picsum.photos/300/200?random=5" />
          <h2>Features</h2>
          <ul className="p-2">{productFeatures.map(productFeature => (
            <li className="flex items-center"><FaCheckSquare />{productFeature.feature}</li>
          ))}</ul>
        </div>
      </div>
    </>
  );
};
