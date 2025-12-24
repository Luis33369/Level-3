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


// export const gridTogether = () => {
//   return (
//     <>
//       <h2>Helping you with to-dos and gifting</h2>
//       <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/beauty_desktop.png" title="Beauty essentials from top brands" paragraph='Get all your beauty and self-care needs delivered at home or on-the-go' link="Shop Beauty" />
//       <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/flowers_desktop.png" title='Flowers for any occasion' paragraph='Shop hand-picked and thoughtfully-arranged blooms from florists near you.' link='Send Flowers' />
//       <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/alcohol_desktop.png" title='Restock the minibar' paragraph='Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*' link='Shop Alcohol' />
//       <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/pet_supplies_desktop.png" title='What your pets need, and want' paragraph='Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.' link="Get Pet Supplies" />
//     </>
//   );
// }














































