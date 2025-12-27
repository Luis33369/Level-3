
export const List = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry"
  ];

  return (
    <>
      <h1>List Rendering - Render simple array of strings</h1>
      <ul className="list-none">{fruits.map(fruit => <li>{fruit}</li>)}</ul>
    </>
  );
};
