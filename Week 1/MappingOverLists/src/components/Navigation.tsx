

export const Navigation = () => {
  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <>
      <nav className="flex  justify-center gap-5 text-red-500">
        {navLinks.map(navLink => <a>{navLink}</a>)}
      </nav>
    </>
  );
};


















