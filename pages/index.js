//Siguiente imagen 
import Image from "next/image" ;

//componente
import ParticlesContainer from "../components/ParticlesContainer" ;
import ProjectsBtn from "../components/ProjectsBtn" ;
import Avatar from "../components/Avatar" ;

//Framer Motion
import { motion } from "framer-motion" ;

//Variants
import { faceIn } from "../variants" ;

const Home = () => {
  return (
      <div className="bg-primary-/60 h-full">

        {/* Texto */ }
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"> 

          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left 
          h-full container mx-auto">

            { /* Titulo */}
            <h1 className="h1"> 
              Transforming Idea <br /> into <span className="text-accent"> Digital Reality </span> 
            </h1>

            {/* Subtitulo */}
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>

          </div>
        </div>

        { /* Imagen */}
        <div> Image </div>

      </div>
    );
};

export default Home;
