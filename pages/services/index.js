//Import Servicios
import ServiceSlider from "../../components/ServiceSlider" ;
import Bulb from "../../components/Bulb" ;
import Circles from "../../components/Circles" ;

//Framer Motion
import { motion } from "framer-motion" ;
import { fadeIn } from "../../variants" ;

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">

      <Circles />

      <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">

            {/* Text */}
            <div className="text-center flex xl:w-[40vh] flex-col lg:text-left mb-4 
            xl:mb-0">

              <h2 className="h2 xl:mt-8">My Services <span className="text-accent"> . </span> 
              </h2>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem ipsum dolor sit amet. Qui velit minima quo saepe fugit id veritatis galisum. Ut aspernatur voluptatem et labore minus et recusandae</p>

            </div>
            { /* Slider */}
            <ServiceSlider>              
            </ServiceSlider>

          </div>          
        </div>
      <Bulb />
    </div>
  )
  
  
};

export default Services ;
