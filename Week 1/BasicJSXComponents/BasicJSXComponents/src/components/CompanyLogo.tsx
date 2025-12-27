interface Logo {
  name: string;
}

export const Logo = ({ name }: Logo) => {
  return (
    <>
      <img className="w-64" alt={name} src="https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" />
    </>
  );
};
