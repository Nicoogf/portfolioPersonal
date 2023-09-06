//Links
import Link from "next/link" ;

//Icons 
import { 
   RiInstagramLine    
} from "react-icons/ri" ;

import { 
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp
} from "react-icons/ai" ;

import { 
  FaFacebook
} from "react-icons/fa" ;


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href= {"https://github.com/Nicoogf"}  target="_blank" className="hover:text-accent transition-all duration-300">
        <AiFillGithub />
      </Link>
      <Link href= {"https://www.instagram.com/nfalabella_/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>      
      <Link href= {'mailto:nicolasfalabella.dev@gmail.com'} target="_blank" className="hover:text-accent transition-all duration-300">
        <AiOutlineMail />
      </Link>
      <Link href= {"https://api.whatsapp.com/send?phone=5492324584106"}  target="_blank" className="hover:text-accent transition-all duration-300">
        <AiOutlineWhatsApp />
      </Link>    
      <Link href= {'https://www.facebook.com/nicolas.falabella11/'} target="_blank"  className="hover:text-accent transition-all duration-300">
        <FaFacebook />
      </Link>  
    </div>
  );
};

export default Socials;
