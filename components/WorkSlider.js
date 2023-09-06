// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb11.jpg',
          desc: 'First Portfolio'
        },
        {
          title: 'title',
          path: '/thumb22.jpg',
          desc: 'Ta-Te-Ti Game'
        },
        {
          title: 'title',
          path: '/thumb33.jpg',
          desc: 'Snake Game'
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          desc: 'Portfolio'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

//Import swiper componentes
import { Swiper , SwiperSlide } from "swiper/react" ;

//Import Estilos del Swipper
import 'swiper/css' ;
import 'swiper/css/free-mode' ;
import 'swiper/css/pagination' ;


// Import required modules
import { Pagination } from "swiper" ;

// Iconos
import { BsArrowRight } from "react-icons/bs" ;

//Next Image
import Image from "next/image" ;


const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={ 10 }
      pagination = {{
        clickable: true 
        }}
      modules={[ Pagination ]}
      className="h-[280px] sm:h-[480px]">

        { workSlider.slides.map(( slide , index)=>{
            return(

                <SwiperSlide key={index}>
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                  { slide.images.map(( image , index )=>{
                      return(

                        <a href="http://google.com" target="_blank"className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={ index } >
                          <div className="flex items-center justify-center relative overflow-hidden group"> 
                            { /* Image */}
                            <Image src={ image.path} width={500} height={300} alt=""/>
                            { /* overlay Gradient*/ }
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#311588] to-[#020dacd2] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                            {/* Title */}
                            <div className="absolute bottom-0 translate-y-full 
                              group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">

                              <div className="flex flex-col items-center gap-x-2 text-[13px] tracking-[0.1rem]">

                                <div className="flex flex-row gap-x-1 group-hover:translate-y-0 transition-all duration-300 delay-100">

                                {/* Primer Parte del titulo */}                                                                
                                <div className="">
                                  Live 
                                </div>

                                 {/* Segunda Parte del titulo */}
                                <div className=" ">
                                  Project
                                </div> 

                                </div>
                              
                                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                   {image.desc} 
                                </div> 

                                 {/* iconos */}
                                 <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                  <BsArrowRight />
                                </div>    

                              </div>
                            </div>
                          </div>
                        </a>
                      )
                  })}
                  </div>
                </SwiperSlide>
            );
          })}
          
    </Swiper>
  ) 
};

export default WorkSlider ;
