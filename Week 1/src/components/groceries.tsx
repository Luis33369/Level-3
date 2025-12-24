interface GroceriesBackground {
  title: string;
  paragraph: string;
  link: string;
  content: string;
}


export const GroceriesBackground = ({ title, content, paragraph, link }: GroceriesBackground) => {
  return (
    <div className="bg-[url('https://cdn.andnowuknow.com/mainStoryImage/postmatesdoordash_grocery_100119.jpg?VersionId=GpYujR493egQ3hvunBh7J6qBGHEzz752')] bg-cover bg-center h-[600px]">
      <div className="flex-col flex justify-center items-center p-30 space-y-2 py-40 absolute bg-black/40 w-full h-[600px]">
        <h2 className="text-4xl w-[400px] text-center font-bold text-white">{title}</h2>
        <div className="text-xl font-medium text-white">{content}</div>
        <div className="text-md text-white w-[580px] text-center">{paragraph}</div>
        <button className="rounded-full bg-red-500 text-white font-bold p-2">{link}</button>
      </div>
    </div>
  );
};








































































