//Componentes
import TestimonialSlider from "../../components/TestimonialSlider" ;

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">

        {/* Titulo */}
        <h2 className="h2 mb-8  xl:mb-0">
          What client <span className="text-accent"> say.</span> 
         </h2>

         { /* Slider */}

         <div>
          <TestimonialSlider />
         </div>
      </div>
    </div>
  ) ;
} ;

export default Testimonials;
