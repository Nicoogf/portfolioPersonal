import React , { useState } from 'react' ;

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs  
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiPostman,
  SiXampp,
  SiBootstrap
} from "react-icons/si";

import {
  BiLogoTailwindCss,
  BiLogoMongodb
} from "react-icons/bi";


//  data
const aboutData = [
  {
    title: 'Tecnologias',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaNodeJs key="node"/>,
          <FaReact key="react"/>,
          <SiNextdotjs key="nextjs"/> ,
          <BiLogoTailwindCss key="tailwind"/>,    
          <SiBootstrap key="boostrap"/>        
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [ <SiAdobephotoshop key="photoshop"/> , <SiAdobeillustrator key="ilustrator"/>],
      },
    ],
  },

  {
    title: 'Herramientas',
    info: [
      {
        title: 'Otras Herramientas',
        icons: [
          <BiLogoMongodb key="mongo" />,
          <SiPostman key="postman" />,
          <SiXampp key="xamp" />,        
         
               
        ],
      },      
    ],
  },

  {
    title: 'Certificados',
    info: [
      {
        title: 'DigitalHouse - Desarrollador Full Stack ',
        stage: '2022 - 2023',
      },
      {
        title: 'Universidad Tecnologica Nacional (UTN) - Desarrollo Web',
        stage: '2023',
      },
    ],
  },
 
 
];

//Componentes
import Avatar from '../../components/Avatar' ;
import Circles from '../../components/Circles' ;

// Framer Motion

import { motion } from "framer-motion" ;
import { fadeIn } from "../../variants" ;

// Counter
import CountUp from "react-countup" ; 

const About = () => {
  const  [ index , setIndex ]  = useState( 0 )
  console.log( index )

  return(

    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>

      <Circles />

      {/* Avatar */}

       <motion.div 
          variants={ fadeIn( 'right' , 0.2 )} 
          initial="hidden" 
          animate="show" 
          exit="hiden" 
          className='hidden xl:flex absolute bottom-0 -left-[370px]'
        >

           <Avatar />

       </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row 
       gap-x-6'>

        {/* Texto */}

        <div className='flex-1 flex flex-col justify-center'>

          <motion.h2 
            className='h2'
            variants={ fadeIn( 'right' , 0.2 )} 
            initial="hidden" 
            animate="show" 
            exit="hiden" 
          > 

           Un poco sobre <span className='text-accent'> mi Perfil </span> </motion.h2>

          <motion.p 
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            variants={ fadeIn( 'right' , 0.2 )} 
            initial="hidden" 
            animate="show" 
            exit="hiden" 
          > 

          Como desarrollador web, he emprendido proyectos independientes para fortalecer mi experiencia y conocimientos. Cada proyecto fue una oportunidad de aprendizaje y superación. <br/> En estos momentos me encuentro con la motivacion de unirme a un equipo de trabajo IT para poder fortalecer mis conocimientos
          </motion.p>

          {/* counters */}

          <motion.div 
            className='hidden md:flex md:max-w-xl xñ: max-w-none mx-auto xl:mx-0 mb-8'
            variants={ fadeIn( 'right' , 0.6 )} 
            initial="hidden" 
            animate="show" 
            exit="hiden" 
          >

            <div className='flex flex-1 xl:gap-x-6'>
              {/* Experiencia */}
              <div className='relative flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0'> 

                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-0 ml-4'>
                  <CountUp start={ 0 } end={ 1 } duration={ 5 }/> 
                </div>

                <div className='text-xs uppercase tracking-[1px] leadding-[1.4] max-w-[100px] '>
                  Año de Experiencia
                </div>
              </div>

              

               {/* Awards */}
              <div className='relative flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0'> 

                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-0 ml-4'>
                  <CountUp start={ 0 } end={ 3 } duration={ 5 }/> 
                </div>

                <div className='text-xs uppercase tracking-[1px] leadding-[1.4] max-w-[100px] '>
                 Certificados Oficiales
                </div>
              </div>   

              {/* Proyectos */}
              <div className='relative flex-1 '> 

                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-0 ml-4'>
                  <CountUp start={ 0 } end={ 20 } duration={ 5 }/> +
                </div>

                <div className='text-xs uppercase tracking-[1px] leadding-[1.4] max-w-[100px] '>
                 Proyectos Finalizados
                </div>
              </div> 

            </div>
          </motion.div>

        </div>
        
        {/* Informacion */}
        <motion.div 
              className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
              variants={ fadeIn( 'left' , 0.4 )} 
              initial="hidden" 
              animate="show" 
              exit="hiden" >

        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                { aboutData.map(( item , itemIndex )=> {
                  return (

                    <div 
                      key={ itemIndex } 
                      className={`${
                        index === itemIndex && `text-accent after:w-[100%] after:text-accent after:bg-accent after:transition-all 
                        after:duration-300`
                        } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
                          after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex( itemIndex )}> 
                    
                      { item.title } 

                    </div>
                  );
                })}
        </div>

         <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            { aboutData[ index ].info.map(( item , itemIndex ) => {
              return (

                <div key= { itemIndex } className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>

                {/* Titulo */}
                 <div className='font-ligjt mb-2 md:mb-0'> { item.title } </div>
                 <div className='hidden md:flex'> - </div> 
                 <div> { item.stage } </div> 


                <div className='flex gap-x-4'>
                {/* Iconos */}
                { item.icons?.map(( icon , itemIndex ) => {
                     return <div className='text-2xl text-white '> { icon } </div> ;
                })}

              </div>                    
            </div>
                );          
              })}
         </div>
        </motion.div>

      </div>

    </div>    
   );            
  }; 
       
export default About ;