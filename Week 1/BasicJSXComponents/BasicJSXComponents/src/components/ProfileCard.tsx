interface Profile {
  name: string;
  image: string;
  bio: string;
}

export const Profile = ({ name, image, bio }: Profile) => {
  return (
    <>
      <div className="w-100 bg-white text-gray-700 rounded-md border border-amber-600 p-2 space-y-2">
        <img src={image} alt="" />
        <div className="text-center space-y-2">
          <h3 className="font-bold">{name}</h3>
          <p className="text-left">{bio}</p>
        </div>
      </div>
    </>


  );
};












































