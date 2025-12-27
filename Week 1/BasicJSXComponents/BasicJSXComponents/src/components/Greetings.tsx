interface GreetingsProp {
  name: string;
}


export const Greetings = ({ name }: GreetingsProp) => {
  return (
    <>
      <div className="flex justify-center align-center text-gray-600 p-4 text-4xl">
        <h1 className="">Hello, {name}</h1>
      </div>
    </>
  );
};
