import './App.css'
import { Greetings } from './components/Greetings';
import { Profile } from './components/ProfileCard';
import { Logo } from './components/CompanyLogo';
import { Footer } from './components/FooterComponent';

function App() {
  const user = "Luis Dario";
  const userBio = `I'm ${user}, a software engineer passionate about building scalable web apps. Experienced in JavaScript, Python, and improving user experience.`

  return (
    <>
      <Greetings name={user} />
      <div className='flex justify-center align-center'>
        <Profile name={user} bio={userBio} image="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" />
      </div>
      <div className='flex justify-center p-4'>
        <Logo name="Starbucks" />
      </div>
      <Footer name="Starbucks" year="1997" />
    </>
  );
};
export default App
