import { Profile } from './Profile';

export const Directory = () => {

  const users = [
    { id: 1, name: "Luis Dario", bio: "Software engineer passionate about scalable web apps.", img: "https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" },
    { id: 2, name: "Alex Morgan", bio: "Frontend dev who loves React and UI polish.", img: "https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" },
    { id: 3, name: "Jordan Lee", bio: "Backend engineer focused on Node and APIs.", img: "https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" },
    { id: 4, name: "Alex Lee", bio: "Software backend engineer focused on Node and APIs.", img: "https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" },
  ];

  return (
    <>
      <div className='grid grid-flow-col grid-rows-2 p-4 gap-3'>
        {users.map(user => (
          <Profile
            key={user.id}
            name={user.name}
            bio={user.bio}
            image={user.img} />
        ))}
      </div>
    </>
  );
};
