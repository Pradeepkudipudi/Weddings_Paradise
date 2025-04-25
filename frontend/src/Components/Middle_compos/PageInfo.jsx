import React from "react";
import img1 from '../../../celebrations/kkr.jpeg'
import img2 from '../../../celebrations/gt.jpeg'
import img7 from '../../../celebrations/cover5.jpg'
import sign from '../../../celebrations/img.jpeg'
import Png from '../../../celebrations/pngegg.png'

import Recent1 from '../../../celebrations/new_assets/middle.jpg'
import Recent2 from '../../../celebrations/new_assets/phtog.jpg'
import Recent3 from '../../../celebrations/new_assets/Phtography7.jpeg'

import CoverImg from '../../pages/Venuefile/cover2.jpg'

const Pageinfo = ()=>{

    return(<>
    
    <div className="mt-28">
  {/* Header */}
  <div className="text-center text-lg  lg:text-4xl mb-8 max-w-5xl mx-auto leading-snug px-4 font-serif text-amber-950">
   <img src={Png} className="justify-center  h-56 ml-auto mr-auto" alt="" />
    <p className="mt-10">WE ARE PASSIONATE ABOUT UNLEASHING ONLY THE BEST WEDDINGS, WITH YEARS OF EXPERIENCE AND A PORTFOLIO OF COUNTLESS WORKS</p>
  </div>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-40 ">
    {/* Left Section */}
    <div className="flex flex-col gap-6 text-center mr-auto ml-auto">
      <p className="text-gray-700 text-3xl mr-auto ml-auto  max-w-md font-corinthia ">
        Here, we understand that your wedding day is a chapter in your love story, and we're here to ensure it's a masterpiece. 
        With years of expertise in orchestrating dream weddings, we've earned a reputation for creating unforgettable love.
      </p>
      <img src={img2} alt="Wedding moment" className=" shadow-md  mt-8  border-4 p-4 border-white transition-transform duration-300 hover:rotate-[-5deg] hover:scale-90" />
      
    </div>

    {/* Right Section */}
    <div className="flex flex-col gap-6 text-center mr-auto ml-auto mx-auto">
      <p className="text-gray-700 text-3xl leading-snug  max-w-md mr-auto ml-auto text-center font-corinthia ">
        Moments. Our journey is woven with a passion for love, design, and meticulous planning. 
        We are not casual event planners; we are professional memory curators dedicated to making your special day a reflection of your love story.
      </p>
     <div className="ml-auto w-4/6">
     <p className="font-corinthia text-3xl">with love,</p>
     <img src={sign}  alt="" className="opacity-95" />  
     </div>
     <img src={img1} alt="Wedding event" className=" border-4 p-4 border-white  shadow-md w-11/12 mt-32 transition-transform duration-300 hover:rotate-[5deg] hover:scale-95  " />
    
    </div>
    
  </div>
</div>


    <section>

        
          <article>
              
          <div   >
          <img src={img7} alt="" className=" h-96 object-cover w-full mt-32"  />
          <p className="text-center mt-14 font-['Dancing_Script',cursive] text-2xl">"A magical, celestial place where love shines eternally and dreams come true."💫❤
          </p>
        
          </div>
          </article>
            

            {/* recent weddings */}
            <section className="mt-40 px-4">
  <div className="text-center text-lg">
    <p className="text-4xl font-serif text-orange-900">PORTOFOLIO</p>
    <p className="text-3xl mt-8 font-greatVibes">Recent Weddings.....</p>

    <div className="mt-24 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {/* Card 1 */}
      <div className="text-center">
        <img src={Recent1} alt="" className="transition-all duration-300 hover:p-5" />
        <p className="font-greatVibes text-2xl text-amber-950 mt-8">
          Destination Wedding in Goa <br />
          Shalini & Kishore
        </p>
      </div>

      {/* Card 2 */}
      <div className="text-center">
        <img src={Recent2} alt="" className="transition-all duration-300 hover:p-5" />
        <p className="font-greatVibes text-2xl text-amber-950 mt-8">
          Marine & Kelvin <br />
          Wedding in Kodaikanal
        </p>
      </div>

      {/* Card 3 */}
      <div className="text-center">
        <img src={Recent3} alt="" className="transition-all duration-300 hover:p-5" />
        <p className="font-greatVibes text-2xl text-amber-950 mt-8">
          Tammy & Matthew <br />
          Wedding in Hyderabad
        </p>
      </div>
    </div>
  </div>
</section>

            {/* <section>

<div className="text-center mt-40 text-lg ">
    <p className="text-4xl font-serif text-orange-900">PORTOFOLIO</p>
    <p className="text-3xl mt-8 font-greatVibes">Recent Weddings.....</p>
    <div className="flex  items-center  mt-24 gap-40">
        <div className=""><img src={Recent1} alt="" className="transition-all duration-300 hover:p-5" /> <p className="font-greatVibes text-2xl text-amber-950 mt-12 ">Destination Wedding in Goa <br /> Shalini && Kishore</p></div>
<div>        <img src={Recent2} alt="" className="transition-all duration-300 hover:p-5" /> <p className="font-greatVibes text-2xl text-amber-950 mt-12"> Marine && Kelvin <br /> Wedding in Kodaikanal</p></div>
<div>        <img src={Recent3} alt="" className="transition-all duration-300 hover:p-5" /> <p className="font-greatVibes text-2xl text-amber-950 mt-12">Tammy && Matthew <br /> Wedding in Hyderabad</p> </div>
    </div>
</div>

            </section> */}
            
    </section>
   

   <div className="h-20  w-10 border border-b-gray-950 ml-72 hover:bg-primary"></div>


   <section>

   <section className="relative h-[420px] mt-32 grid place-items-center bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${CoverImg})` }}>
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>
  <div className="relative z-10 text-white text-5xl font-bold p-8 ">
    <p>WEDDINGS PARADISE</p>
  </div>
</section>



   </section>
    
    </>)
}

export default Pageinfo






// <p className="font-greatVibes text-3xl">This is Great Vibes Font</p>
// <p className="font-corinthia text-3xl">This is Corinthia Font</p>
// <p className="font-corinthia font-bold text-3xl">This is Corinthia Bold</p>
// <p className="font-allison text-3xl">This is Allison Font</p>
