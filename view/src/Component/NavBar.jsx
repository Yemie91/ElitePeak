import React, { useState } from 'react'
import logo from "../assets/LOGO.jpg"
import { Link } from 'react-router-dom';


function NavBar() {

  

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
      
          setIsOpen(!isOpen);
      
        };



  return (

    // WINDOW HEADER


    <div className=" h-[100px] w-full bg-[#142b46] sticky top-0  ">


         

          <div className='hidden lg:flex items-center justify-between  py-5 px-5 text-gray-100 '>

            <div className='flex'>
              <Link to="/">
            <img className='w-[60px] h-[60px]  rounded-[50px]  ' src={logo} alt="" />
            </Link>

            <div className='px-4'>
            <p className='text-2xl font-bold'>Elite Peak</p>
            <p className='ml-4'>Properties</p>
            </div>
            </div>

            <div className='flex gap-[30px]'>
              <Link to = "/">Home</Link>
              <Link to = "/">About</Link>
              <Link to = "/">Houses</Link>
              <Link to = "/">Contact us</Link>
              
            </div>

            <div className=''>
                <button className=' flex gap-3 bg-slate-100 h-[30px] w-[150px] text-center rounded-[10px] text-black'>

                <Link className='ml-2 mt-1'  to="/login">LOGIN</Link>
                <Link  className='mt-1' to="/register">REGISTER</Link>


                </button>
                
                



            </div>



          </div>


          {/* MOBILE HEADER */}

  <div className='flex justify-between items-center py-5 px-5 sticky top-0 '>

    <div className=''>
      <img className='w-[60px] h-[60px]  rounded-[50px]  lg:hidden' src={logo} alt="" /></div>
        
      <button
        className=" right-0 absolute block lg:hidden border border-gray-700 px-3  mr-3 py-3 rounded text-purple-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={toggleMenu}
      >
         

                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="white" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"/></svg>      </button>
                 {isOpen && (

        
                <div className="absolute right-0   px-3  w-full bg-[#391453] rounded-lg shadow-lg z-10 grid py-5 mt-60 text-white">
          
                  <a href="http://">HOME</a>
                  <a href="http://">ABOUT</a>
                  <a href="http://">HOUSES</a>
                 <a href="http://">CONTACT</a>

                 <div className='flex gap-4 '>
                <button>REGISTER</button>
                <button>LOGIN</button>


                 </div>

                </div>
                    )}

</div>
         
       </div>

    
  );
}

export default NavBar