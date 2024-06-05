import React from 'react'
import NavBar from '../../Component/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../../Component/Footer'


function Register() {


    
  return (

    <div className=' bg-slate-100 gap-6 h-[800px]'>

      <NavBar />

        
      <div className='bg-[#074da3] w-full h-[150px] flex flex-col py-10  gap-4'>  

        <h2 className=' flex   text-stone-50 text-4xl font-bold ml-20 '>Create An Account</h2>
        <p className='text-white ml-20 font-light '>Register On Elite Peak ...</p>
      </div>
   

      <div className=' flex justify-center py-10  '>
    
      <div className=' bg-slate-300 py-10 w-[550px] rounded-[20px] '>
         <div className=' '>

        <div className='flex justify-center '>

           <h4 className='text-3xl text-black font-bold py-5 '> Create Account</h4>
            
        </div>


          <div className='flex justify-center'>
             
             <div>
             <form className='flex flex-col justify-center items-center px-7 py-10 gap-6 
        
        '  action=" ">
 
          <input className='h-10 w-[200px] rounded-[10px] px-3' type="text" placeholder="Full Name "/>
          <input className='h-10 w-[200px] rounded-[10px] px-3' type="text" placeholder="Username"/>
          <input  className='h-10 w-[200px] rounded-[10px] px-3'type="text" placeholder="Email"/>
          
 
           </form>

             </div>

             <div>
                <form  className='flex flex-col justify-center items-center px-7 py-10 gap-6'  action="">
             <input className='h-10 w-[200px] rounded-[10px] px-3' type="text" placeholder="Phone "/>
             <input className='h-10 w-[200px] rounded-[10px] px-3' type="text" placeholder="Password"/>
             <input  className='h-10 w-[200px] rounded-[10px] px-3'type="text" placeholder="Country"/>
                
             </form>

             </div>

             

          </div>

         <div className='flex justify-center'> <button className='bg-[#074da3] w-[450px] h-[50px] rounded-[15px] text-white'>Create Account</button></div>
          
         <div className='flex justify-center mt-6 '>
               <div className='flex justify-center'>
                  <p className='text-black '>Already Have An Account?</p>
                  <Link to="/Login">
                  <p className='text-[#433bb3] font-semibold'> Login</p>
                  </Link>

               </div>
            </div>

         </div>
      </div>

      </div> 

      <Footer />
       

       
        
        
        
    </div>
  )
}

export default Register