import '../styles/globals.css';

//Componentes 
import Layout from '../components/Layout' ;
import Transition from "../components/Transition" ; 

//Rutas

import { useRouter } from "next/router" ; 

//Framer Motion
import  {  AnimatePresence , motion } from "framer-motion" ;

function MyApp({ Component, pageProps }) {

  const router = useRouter() ; 
  return (

    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
         </motion.div>        
      </AnimatePresence>     
    </Layout>

  ) ;
} ;

export default MyApp;
