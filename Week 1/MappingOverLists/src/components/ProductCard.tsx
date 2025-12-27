interface ProductProp {
  name: string;
  price: number;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductProp) => {
  return (
    <>
      <div className="w-64 rounded-md bg-white text-black p-2">
        <div>
          <img className="rounded-md" src={image} alt="" />
        </div>
        <div className="flex justify-center gap-5 p-3">
          <div>
            <p className="font-bold text-2xl">{name}</p>
            <p className="text-xl">$ {price}</p>
          </div>
          <button className="text-white w-20 h-20 text-xs">Add to Cart</button>

        </div>
      </div>
    </>
  );
};
