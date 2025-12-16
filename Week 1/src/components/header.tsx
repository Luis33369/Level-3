import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";



interface HeaderWithLinks {
  title: string;
  paragraph: string;
  link: string;
  img: string;
  link2: string;
}



export const HeaderWithLinks = ({ title, paragraph, link, img, link2 }: HeaderWithLinks) => {
  return (
    <div className="text-gray-100 flex flex-col flex-wrap items-center justify-between h p-20 gap-2">
      <img className="w-64" src={img} alt="" />
      <h2 className="text-3xl">{title}</h2>
      <div className="w-60">{paragraph}</div>
      <a className="text-red-500 font-bold" href={link}>{link2}</a>
    </div>

  );
};

