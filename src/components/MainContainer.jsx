import React from 'react'
import Slider from "react-slick";
import Bike from '../components/assets/img/delivery.png'
import { BsArrowRight } from 'react-icons/bs'
import HeroBg from '../components/assets/images/heroo.png'
import { motion } from 'framer-motion'
import products from './assets/fake-data/products'
import C1 from "./assets/images/chicken_1.2.png"
import C2 from "./assets/images/burger_1.1.png"
import C3 from "./assets/images/fish_2.1.png"
import C4 from "./assets/images/product_2.1.png"
import C5 from "./assets/images/sandwhich_1.png"
import C6 from "./assets/images/bread_1.1.png"
import C7 from './assets/images/product_09_image_01.png'
import C8 from './assets/images/chicken_2.2.png'


const categories = [
  {id:1 , type:"Chicken"  , image:C1},
  {id:2 , type:"Hamburger" , image :C2 },
  {id:3 , type:"Fish" ,  image : C3 },
  {id:4 , type:"Pizza" ,  image : C4},
  {id:5 , type:"Sandwich" ,  image : C5},
  {id:6 , type:"Bread" ,  image : C6},
  {id:7 , type:"Sauced Rice" ,  image : C7},
  {id:8 , type:"Chips" ,  image : C8}

]



const MainContainer = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          speed: 1000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          speed: 1000,
          autoplaySpeed: 2500
        }
      }
    ]
  };
  return (
    <div>
        {/* Start of Main Page section */}

      <motion.main
       initial={{opacity:0 ,x:"-100vw"}}
       animate={{opacity:1 , x: 0}}
       transition={{type:'spring' , stiffness:220 , delay: 0.7 , duration: 0.7  }}
      className='grid md:grid-cols-2 p-5 sm:p-10 lg:px-32 gap-10 h-auto overflow-hidden screen'>
      {/* Column 1 for medium and  large screens */}
     <div className='sm:h-full relative  flex justify-center flex-col pt-4 '>
    {/* Food delivery logo section */}
       <div className='flex  items-center rounded-full text-xs p-1 px-2  justify-center text-red-500 font-semibold bg-red-200 max-w-[130px]'>
        <p>Bike Delivery</p>
        <div className='bg-white w-5 h-5 rounded-full flex justify-center items-center'>
        <img src={Bike} alt="Bike Delivery" className='w-6 h-6' />
        </div> 
       </div>

       {/* Text Content for Header*/}
       <motion.p  
       className='py-5 text-4xl lg:text-5xl font-bold md:tracking-[normal] md:py-8 lg:max-w-[500px] '> We offer the <span className='text-red-500'>Fastest Delivery </span>
        within Every City.</motion.p>

        <p className='tracking-wider text-sm box-border leading-normal lg:leading-[1.9] font-[700] max-w-[500px]'>
        Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to .. This is a standard Indian mint chutney served with poppadums along with mint and lemon.
        We provide pleasure to your tastebuds 😉..
        </p>

        <div className='flex  gap-4 items-center'> 
        <motion.p
         whileHover={{scale:0.9 }}
         initial={{opacity:0.3 }}
         animate={{opacity:1 }}
         transition={{ ease: "easeInOut", duration: 0.4 }}
        className='text-slate-50 text-bold gap-2 p-3 my-8 text-xs cursor-pointer rounded-full bg-red-500 w-[120px] shadow-xl md:max-w-[140px] max-h-[80px]  font-bold flex justify-center items-center '>Order Now  <BsArrowRight className='font-bold' /></motion.p>
        
        <motion.p 
         whileHover={{scale:0.9 ,  y:-10 }}
         initial={{opacity:0.3  }}
         animate={{opacity:1  }}
         transition={{ duration: 0.4 ,type:"spring" , stiffness:200 }}
        className='text-slate-50 text-bold gap-1 text-xs p-3 my-8 cursor-pointer rounded-full bg-black w-[120px] shadow-xl sm:max-w-[160px] max-h-[80px]  font-bold flex justify-center items-center '>All Foods <BsArrowRight className='font-bold' /></motion.p>
        <div className='flex justify-center text-xs items-center  p-1 font-bold text-red-700'>
        
        </div>
            

            
        </div>

          
     </div>
    
     {/* Column 2 for medium and  large screens */}
     <div className=' relative flex items-center justify-center '>
      
       <img src={HeroBg} alt="Hero-bg" className='lg:w-full w-3/4  object-cover'  />


    </div>      
    </motion.main>

    {/* Section  2 Page of Home Page */}
        
      <div className='p-5 sm:p-10 lg:px-28 flex flex-col items-center'>
        <h3 className='md:text-[32px] text-[28px] font-bold text-center'> More than 2,000 dishes To Order! </h3>
        <p className='lg:text-sm text-xs text-center'>Welcome to the Biggest Network of Food Ordering and Delivery</p>


       
       <div className='w-full overflow-hidden'>
       <Slider {...settings}>
       {categories && categories.map(({id , type , image}) => {
        return (
          <div className='slider'>
           <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{type:"spring" , duration:1 , stiffness:400}}
            whileHover={{y:-10 }}
            key={id} >
      
          <div className='w-[120px] shadow-lg h-[140px] lg:w-[160px] lg:h-[210px] rounded-xl flex-col gap-y-2 flex items-center justify-center bg-gradient-to-r from-slate-200
           to-red-200 cursor-pointer hover:border border-red-300 border-2 drop-shadow hover:bg-gradient-to-r hover:to-pink-200 hover:from-slate-50'>
           <div className='lg:w-[80px] lg:h-[80px] w-65 h-65 flex justify-center items-center rounded-full bg-white '>
           <img src={image} alt={type} className='md:w-12 md:h-12 h-10 w-10 object-contain '  /> 
           </div>
           <p className='font-bold md:text-sm text-[12px] text-center'>{type.toUpperCase()}</p>
          </div>
         
        </motion.div>
          </div>
           
          )
        })}
         </Slider>
        
       </div>
      

      </div>
      


    </div>
  )
}

export default MainContainer