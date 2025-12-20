// import hero from "./assets/hero_desktop.png";
// import hero from '/images/hero.png;

export const Navbar = () => {
  return (
    <>
    <div className="static">
      <img src="/images/hero.png" alt=""/>
      <div className="absolute flex justify-end gap-6">
        <button className="bg-red-500 text-white rounded-full px-5 py-3">Sign In</button>
        <button className="bg-white text-gray-500 rounded-full px-5 py-3">Sign Up</button>
      </div>
    </div>
    </>
  )
  
} 
