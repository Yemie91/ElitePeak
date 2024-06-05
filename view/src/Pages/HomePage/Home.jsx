import React from 'react'
import NavBar from "../../Component/NavBar"
import House from "../../assets/House.png"
import Footer from '../../Component/Footer'



function Home() {
  return (

    <div>

      <NavBar />



          <div className='flex  bg-green-100 justify-center gap-20 mt-2 '> 

<div >

  <div className='flex ml-[15px] justify-center mt-5 gap-3 items-center  text-white rounded-[30px] h-10 bg-[#010105] w-[430px]'>

     <p >We just launched our service in Asia & Australia</p> 
     <p className=' text-white  rounded-[15px] bg-[blue] w-[50px] justify-center items-center flex'>New</p>

  </div>

 <h1 className=' font-bold ml-[15px] mt-7 text-6xl flex flex-col '>

     Find Your Dream  <br /> House Around The <br /> Globe Now.
 </h1>

 <p className='ml-[15px] mt-7'>

 Find homes in 80+ different countries represented by 700 leading member brokerages.
 </p>


  <div className='flex ml-[15px] mt-7 gap-14 border-[2px] h-[75px] w-[550px] '>

   <div className='flex justify-center items-center gap-2 ml-3'>
       <div className='border-[2px] w-7 h-7 rounded-[50px]'></div>
       <p>Buy</p>
       <div className='border-[2px] w-7 h-7 rounded-[50px]'></div>
       <p>Rent</p>
   </div>

   <div>
       <div className='flex gap-[60px] justify-center items-center'>

         <p><input type="text" placeholder=' Search Location'/></p>
         <p className='bg-[black] text-white rounded-[10px] w-[70px] h-[60px] mt-1 flex justify-center items-center'>Search </p>

       </div>

     

    </div>

  

  </div>

  <div className='flex gap-[20px] ml-3 py-4' >

  <h5>Popular Searches:</h5>
  <h5 className='bg-[#77afea] rounded-[10px] w-[70px]  text-white text-center'>2 BHK</h5>
  <h5 className='bg-[#fafafc] rounded-[10px] w-[80px]  text-black text-center'>Bangalow</h5>
  <h5 className='bg-[#f6f7f4] rounded-[10px] w-[70px]   text-black text-center'>London</h5>
  <h5 className='bg-[#77afea] rounded-[10px] w-[70px]  text-white text-center'>Villa</h5>


</div>

</div>

  <  img className='
    w-[520px]
    h-[470px]
    ' src={House} alt=''/>


         </div>


        <div className='flex ml-8'>

        <div className='mt-[20px] px-2'>
              <h1 className='text-3xl font-bold  '>Choose Property Type</h1>
              <p className='mt-4 '>Choose from a variety of properties around the world from our gallery..</p>
        </div>



        </div>





        


      <Footer />






      
      

    </div>
  )
}

export default Home