import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface CardProp {
  image: string;
  name: string;
  rate: number;
  price: number;
}

export const Card = ({ image, name, rate, price }: CardProp) => {
  const [toggle, setToggle] = useState(false);
  const [currency, setCurrency] = useState("USD");

  const changeCurrency = currency === "USD" ? price : (price * 0.86).toFixed(2);

  return (
    <>
      <div className="w-45 rounded-md bg-white text-gray-800 p-3 m-3 space-y-2" onClick={() => setToggle(!toggle)}>
        <div className="relative">
          <img className="rounded-md object-cover" src={image} alt="" />
          <div className="absolute top-1 right- right-1 w-6 h-6 rounded-md bg-white cursor-pointer  flex items-center justify-center">
            {/* <FaRegHeart className=" text-sm absolute cursor-pointer text-red-500" /> */}
            {toggle ? <FaHeart className="text-sm text-red-500" /> : <FaRegHeart className="text-sm text-red-500" />}
          </div>
        </div>
        {/* {toggle && <p className="text-amber-400 text-sm flex items-center gap-1">< FaStar />Favorite</p>} */}
        <h1 className="font-bold">{name}</h1>
        <p className="text-sm flex items-center ">{rate}<FaStar />/5.0 <FaStar /></p>
        <div className="flex justify-between">
          <p className="font-bold">{changeCurrency}</p>
          <button className="border border-black font-bold p-1 rounded-md text-sm hover:bg-blue-400" onClick={(e) => {
            e.stopPropagation();
            setCurrency(currency === "USD" ? "EUR" : "USD")
          }}>{currency === "USD" ? "USD" : "EUR"}</button>
        </div>
      </div >
    </>
  );
};
