//Siguiente imagen 
import Image from "next/image" ;

//componente
import ParticlesContainer from "../components/ParticlesContainer" ;
import ProjectsBtn from "../components/ProjectsBtn" ;
import Avatar from "../components/Avatar" ;

//Framer Motion
import { motion } from "framer-motion" ;

//Variants
import { faceIn, fadeIn } from "../variants" ;

const Home = () => {
  return (
      <div className="bg-primary-/60 h-full">

        {/* Texto */ }
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"> 

          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left 
          h-full container mx-auto">

            { /* Titulo */}

            <motion.h1 
              variants={fadeIn ('down' , 0.2 )} 
              initial='hidden' 
              animate="show" 
              exit='hidden xl:flex'
              className="h1"
              > 
                  Transforming Idea <br /> into <span className="text-accent"> Digital Reality </span> 

            </motion.h1>

            {/* Subtitulo */}
            <motion.p 
              variants={fadeIn ('down' , 0.3 )} 
              initial='hidden' 
              animate="show" 
              exit='hidden xl:flex'
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </motion.p>

            {/* Button  Chequear 44 segundo botton */ }

            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>

            <motion.div 
              variants={fadeIn ('down' , 0.4 )} 
              initial='hidden' 
              animate="show" 
              exit='hidden xl:flex'
            >
              <ProjectsBtn />
            </motion.div>

          </div>
        </div>

        { /* Imagen */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0"> 

        {/* Background de la imagen */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
               
        </div>

        { /* Particles */}
        <ParticlesContainer />





        { /* Avatar Imagen */ }
        <motion.div 
         variants={fadeIn ('up' , 0.5 )} 
         initial='hidden' 
         animate="show" 
         exit='hidden xl:flex'
         transition={{ duration : 1 , ease : 'easeInOut' }}         
         className="w-full h-full max-w-[737px] max-h-[678px] absolute  -bottom-32
          lg:bottom-0 lg:right-[8%]">
            
          <Avatar />
        </motion.div>

      </div>

      </div>
    );
};

export default Home;
