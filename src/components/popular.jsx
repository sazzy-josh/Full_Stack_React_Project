import React from 'react'
import { useState ,useEffect } from 'react'
import products from './assets/fake-data/products'
import breadClip from "./assets/images/bread_CLIPART.png"
import chickenClip from './assets/images/chicken_CLIPART.png'
import pizzaClip from './assets/images/pizza.png'
import Hamburger from './assets/images/hamburger.png'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { MdKeyboardArrowRight } from "react-icons/md"
import { cartsContext } from '../context/CartContext'

const Popular = () => {
   const { addToCart } = cartsContext()
   
  
    const [category, setcategory] = useState('ALL');
    const [allFoods, setallFoods] = useState(products);
    
    useEffect(() => {
       
      if(category === 'ALL'){
         setallFoods(products)
      }

      if(category === 'BURGER'){

         const filteredProducts = products.filter((item) => {
            return item.category === 'Burger'
         })
         setallFoods(filteredProducts)
      }

      if(category === 'PIZZA'){

         const filteredProducts = products.filter((item) => {
            return item.category === 'Pizza'
         })
         setallFoods(filteredProducts)
      }

      if(category === 'BREAD'){

         const filteredProducts = products.filter((item) => {
            return item.category === 'Bread'
         })
         setallFoods(filteredProducts)
      }
      
      if(category === 'CHICKEN'){

         const filteredProducts = products.filter((item) => {
            return item.category === 'Chicken'
         })
         setallFoods(filteredProducts)
      }



    }, [category]);

  return (
    <div className=' p-5 sm:p-10 lg:px-28'>
        <p className='md:text-[32px] text-[28px] font-bold text-center'>Popular Dishes with Discount</p>
         <p className='lg:text-sm text-xs text-center py-2 font-bold'> The most delicious and healthy dishes from our chef.You can order this meal seperately or as part of a meal plan</p>

         <div className=' bg-red-400 rounded-lg py-3 flex justify-center items-center text-xs md:text-sm font-semibold md:gap-x-3'>
           
             <span className={`flex items-center justify-center p-2 cursor-pointer ${category === "ALL" ? "bg-white rounded-lg" : ""}`}  onClick={() => setcategory("ALL")}>
                All
             
             </span>
         
           
             <span  className={`flex items-center justify-center p-2 cursor-pointer gap-x-1 ${category === "PIZZA" ? "bg-white rounded-md" : ""}`} onClick={() => setcategory("PIZZA")} >
                
                <img src={pizzaClip} alt="pizza" className='w-3 h-3' />
                Pizza
             </span>
           
           
             <span  className={`flex items-center justify-center p-2 cursor-pointer gap-x-1 ${category === "BREAD" ? "bg-white rounded-md" : ""}`} onClick={() => setcategory("BREAD")}>
               
                <img src={breadClip} alt="bread"  className='w-3 h-3'/>
                Bread  
             </span>
          
           
             <span  className={`flex items-center justify-center p-2 cursor-pointer gap-x-1 ${category === "BURGER" ? "bg-white rounded-md" : ""}`} onClick={() => setcategory("BURGER")}>
                
                <img src={Hamburger} alt="burger"  className='w-3 h-3' />
                Burger
             </span>
         
         
             <span className={`flex items-center justify-center p-2 cursor-pointer gap-x-1 ${category === "CHICKEN" ? "bg-white rounded-md" : ""}`} onClick={() => setcategory("CHICKEN")}>
               
                <img src={chickenClip} alt="chicken"  className='w-3 h-3'/>
                Chicken
             </span>
         


         </div>

         <div className='cards py-4 '>
          {allFoods.map(({ id, price ,image01 , title , quantity}) => {

         const addItem = () => {
            addToCart({ id , price , title ,image01 , quantity })
         }

             return (
                <div className='flex items-center justify-center'>
                  
                  <motion.div
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   exit={{opacity:1}}
                   transition={{duration:0.5 }}
                   key={id}
                   className="rounded-lg flex border border-red-200 flex-col w-[180px] h-[250px]  justify-around items-center relative hover:bg-gradient-to-r  hover:from-slate-50 hover:to-red-200 hover:border-red-400 hover:border-dotted shadow-xl cursor-pointer">
                <span class="animate-ping absolute  h-4 w-4 top-0 right-0  z-10 rounded-full bg-red-400 opacity-75"></span>
                     <motion.img 
                     whileHover={{scale:1.2}}
                     src={image01} alt={title} className="sm:w-[90px] sm:h-[90px] w-[80px] h-[80px] object-contain py-1 "/>
                     <span className='lg:text-sm text-xs text-center py-2 font-bold'>{title}</span>
                     <div className='flex text-sm text-center py-2 font-bold justify-between items-center w-full p-2 '><p className=' p-1 rounded-lg text-slate-800'>${price}</p> <span onClick={addItem} className='text-lg px-2 rounded text-white bg-red-300  hover:bg-white hover:text-red-400' 
                     >+</span> </div>
                  <div className='absolute top-0 text-slate-900 right-0 bg-gradient-to-br from-slate-50 to-red-300 font-semibold rounded-tr-lg rounded-bl-lg text-xs  overflow-hidden p-1'>10% OFF</div>
                 </motion.div>
                </div>
             )
          }).slice(0,6)}

         </div>

          <div className='flex justify-center'>
          <span className=' cursor-pointer border-2 border-red-400 shadow-xl rounded-full p-1 gap-x-2 bg-red-400 text-xs px-2 text-white flex justify-center items-center font-semibold '>See all foods 
           <div className="bg-white text-red-400 font-bold rounded-full p-[2px] text-lg ">
             <MdKeyboardArrowRight/>
           </div> 
         </span>
          </div>
    </div>
  )
}

export default Popular