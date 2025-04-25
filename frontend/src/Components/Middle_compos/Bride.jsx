import React from "react";

// import middle from '../../../../celebrations/middle.jpg'
// import middle1 from '../../../../celebrations/middleq.jpg'
import middle2 from '../../../celebrations/middle3.jpg'
const Bride = ()=>{


    return(<>
    <section className=" w-full mt-16 container">
      <div className="flex flex-col lg:flex-row items-center gap-8">
     

        {/* Image Gallery Section */}
        <div className="flex flex-col gap-4 h-2">
            {/* <div> <img src={middle} alt="Wedding Moment"  className="h-96" /></div> */}
          
          
     <img src={middle2} alt="Wedding Decor"  />
     {/* <img src={middle1} alt="Wedding Couple"  /> */}
        </div>
      </div>

      
    </section>
    </>
    
)
}



export default Bride