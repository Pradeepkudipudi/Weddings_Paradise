/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      // fontFamily: {
      //   playfair: ["Playfair Display", "serif"],
      //   pacifico: ["Pacifico", "cursive"], // Add Pacifico if needed
      // },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        pacifico: ["Pacifico", "cursive"],
        greatVibes: ["Great Vibes", "cursive"],
        corinthia: ["Corinthia", "cursive"],
        allison: ["Allison", "cursive"],
      },
          //621C1F
      colors:{
        primary :  "#3D3D3D"   ,  //"	#31363F"  ,    //683B2B
        secondary : "#213F65" ,   //fb923c   //bes  3B2F2F
        third : "#E9E6DD",                                                                        
        // 
        // BEST
        // //E9E6DD
    
// primary: "#37475A",     
// secondary: "#3C0008"                          //"#93323f"     ///paradise

              },
              gridTemplateColumns: {
                autoFill: 'repeat(auto-fill, minmax(320px, 3fr))',
                autoFit: 'repeat(auto-fit, minmax(320px, 3fr))',
              },
              
            
              container : {
                center : true,
                padding : {
                  DEFAULT : '1rem',
                  sm : '2rem',
                  lg: '4rem',
                  xl : '5rem',
                  '2xl': '6rem'
                  
                }
              },
              
        


    },
  },
  plugins: [],
}



//93323f













// pale yello
// FFF40E4