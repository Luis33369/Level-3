import { Logo } from './CompanyLogo';

interface FooterProp {
  name: string;
  year: string;
}

export const Footer = ({ name, year }: FooterProp) => {
  return (
    <>
      <footer className='bg-gray-500 flex  justify-center gap-2 items-center'>
        <Logo name="Starbucks" />
        <h3 className="text-4xl">{name} ©</h3>
        <h4 className="text-4xl">{year}</h4>
      </footer>
    </>
  );
};
