import { useState } from 'react'
import './App.css'

// import { Body } from './components/body';
import { Footer } from './components/footer';
import { HeaderWithLinks } from './components/body';
import { Navbar } from "./components/header";
import { FindingLinks } from "./components/body";
import { FindingLinks2 } from "./components/body";
import { GroceriesBackground } from './components/groceries';
import { GridChoices } from './components/gridChoices';


function App() {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Body */}
      <div className='flex justify-center  gap-30 px-80 py-25 w-full'>
        <HeaderWithLinks img="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg" title="Become a Dasher" paragraph="As a delivery driver, make monery and work on your schedule. Sign up in minutes." link="https://www.doordash.com/" link2="Start earning" />
        <HeaderWithLinks img="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg" title='Become a merchant' paragraph='Attract new customer and grow sales, starting with 0% commissions for up to 30 days.' link='https://www.doordash.com/' link2='Sign up for Doordash' />
        <HeaderWithLinks img='https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg' title="Get the best DoorDash experience" paragraph="Experience the best your neighborhood has to offer, all in one app." link="ttps://www.doordash.com/" link2="Get the app" />
      </div>

      <FindingLinks title='Everything you crave, delivered.' paragraph="Your favorite local restaurants" content="Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you' ve been meaning to try." image="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png" link="Find restaurants" />
      <FindingLinks2 title='DashPass is delivery for less' paragraph="Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it' s free for 30 days." link="Get DashPass" image="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png" />
      <GroceriesBackground title="Get grocery and convenience store essentials" content="Grocery delivery, exactly how you want it." paragraph="Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more." link="Shop Groceries" />
      <FindingLinks title="Convenience stores at your doorstep" paragraph='Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.' content='' link='Shop Now' image='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/convenience_desktop.png' link="Shop Alcohol" extraParagraph="*Must be 21+. Enjoy responsibly." />

      <div className='bg-[#FEF1EE] '>
        <h2 className='mx-auto text-center text-4xl font-medium flex-wrap w-120 p-10'>Helping you with to-dos and gifting</h2>
        <div className='grid grid-cols-2  items-start p-40'>
          <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/beauty_desktop.png" title="Beauty essentials from top brands" paragraph='Get all your beauty and self-care needs delivered at home or on-the-go' link="Shop Beauty" />
          <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/flowers_desktop.png" title='Flowers for any occasion' paragraph='Shop hand-picked and thoughtfully-arranged blooms from florists near you.' link='Send Flowers' />
          <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/alcohol_desktop.png" title='Restock the minibar' paragraph='Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*' link='Shop Alcohol' extraParagraph='*Must be 21+. Enjoy responsibly.' />
          <GridChoices img="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/pet_supplies_desktop.png" title='What your pets need, and want' paragraph='Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.' link="Get Pet Supplies" />
        </div>
      </div >

      <div className='flex justify-center items-center h-[200px]'>
        <h2 className='text-center text-3xl font-medium w-90'>Unlocking opportunity for Dashers and businesses</h2>
      </div>

      <FindingLinks paragraph="Deliver with the #1 Food and Drink App in the U.S. As a delivery driver, you'll make money and work on your schedule. Sign up in minutes." link="Become a Dasher" title="Sign up to dash and get paid" image='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/become_a_dasher_desktop.png' />
      <FindingLinks2 title='Grow your business with DoorDash' paragraph="Businesses large and small partner with DoorDash to reach new customers, increase order volume, and drive more sales." link="Become a Partner" image='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/work_with_doordash_desktop.png' />

      <div className='h-[120px] flex justify-center items-center text-3xl font-bold'>
        <h2>Get more from your neighborhood</h2>
      </div>






      {/* Footer */}
      < Footer />
    </>
  );
}

export default App;

// https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png
