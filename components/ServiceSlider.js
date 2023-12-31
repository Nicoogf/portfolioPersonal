//Import swiper componentes
import { Swiper , SwiperSlide } from "swiper/react" ;

//Import Estilos del Swipper
import 'swiper/css' ;
import 'swiper/css/free-mode' ;
import 'swiper/css/pagination' ;

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx" ;

// Import required modules
import { FreeMode , Pagination } from "swiper" ;

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Mockup',
    description: 'Mostrando la estructura inicial del proyecto para previsualizar la interfaz y mejorar la experiencia del usuario.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Frameworks',
    description: 'Utilizando Bootstrap y Tailwind para crear aplicaciones con estilos predefinidos y una estructura eficiente.',
  },
  {
    icon: <RxDesktop />,
    title: 'Peticiones',
    description: 'En mis proyectos se emplearon conexiones a bases de datos y las principales peticiones que usan los CRUD´s.',
  },
  {
    icon: <RxReader />,
    title: 'Metodologias',
    description: 'En mi capacitación , implementábamos metodologia Scrum para gestionar proyectos de forma colaborativa.',
  }
 
];


const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
          320: {
            slidesPerView : 1,
            spaceBetween : 15
          },
          640: {
            slidesPerView : 3,
            spaceBetween : 10
          },           
       }}
      freeMode = {true} 
      pagination = {{
        clickable: true 
        }}
      modules={[FreeMode , Pagination]}
      className="h-[240px] sm:h-[340px]">

        {
          serviceData.map( (item, index)=>{
            return(
                <SwiperSlide key={index}>
                  <div className="bg-[rgba(65,47,12,0.15)] h-max rounded-lg  px-6 py-8 flex 
                  sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 "> 
                    {/* Icon */} 
                    <div className="text-4xl text-accent mb-4"> { item.icon } </div>

                    {/* Titulo y Descripcion */} 
                    <div className="mb-8">
                      <div className="mb-2 text-lg"> { item.title } </div>
                      <p className="max-w-[350px] leading-normal sm:text-sm"> { item.description } </p>
                    </div>

                    {/* Arrow */}
                    <div className="text-2xl mx-auto">
                       <RxArrowTopRight  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                    </div>

                  </div>
                </SwiperSlide>
            );
          })}
          
    </Swiper>
  ) 
};

export default ServiceSlider;
