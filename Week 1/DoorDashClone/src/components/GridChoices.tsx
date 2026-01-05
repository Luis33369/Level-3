
interface GridChoices {
  title: string;
  img: string;
  paragraph: string;
  extraParagraph?: string;
  link: string;

}


export const GridChoices = ({ title, img, paragraph, link, extraParagraph }: GridChoices) => {
  return (
    <>
      <div className="text-center items-center space-y-4">
        <img className="block w-[550px] h-[550px] mx-auto object-cover" src={img} alt="" />
        <h2 className="mx-auto text-4xl font-medium w-120">{title}</h2>
        <p>{paragraph}</p>
        <button className="rounded-full bg-red-500 p-3 text-white">{link}</button>
        <p className="text-sm">{extraParagraph}</p>
      </div>
    </>

  );
}
