import React from 'react'
import mylogo from '../assets/mylogo.jpg'





function Footer() {
  return (
    <div className='text-center'>
        {/* CONTAINER */}

<div className='flex justify-around items-center  px-[10px] py-[10px] bg-[#1e1e60] h-[350px] text-white '>

        {/* first */}

    <div className=''>
    <div className='flex gap-7 items-center' >
        <img className='w-[49px] h-[49px] rounded-[50px]'  src={mylogo} alt="" />
        <h3 className='text-4xl font-serif text-blue-300 font-bold  '>Resido</h3> <hr />

    </div> <br />
 
    <div>
    <p>Collins Street West, Victoria 8007,</p>  <br />
    <p>Australia.</p> <br />
    <p>+1 246-345-0695</p> <br />
    <p>support@elitepeakproperties.com</p> <br />
    </div>

    </div>
  
   {/* second */}

    <div>

    <h3 className='text-2xl'>Navigations</h3> <hr /><br />
   <p>About Us</p> <br />
   <p> FAQs Page</p> <br />
   <p> Checkout</p><br />
   <p>Contact</p><br />
   <p>Blog</p><br />


    </div>


     {/* Third */}
     <div >
    <h3 className='text-2xl'>The Highlights</h3> <hr /><br />
    <p>Apartment</p><br />
    <p>My House</p><br />
    <p>Resturant</p><br />
    <p>Nightlife</p><br />
    <p>Villa</p><br />

     </div>

    {/* Fourth */}
    <div>
    <h3 className='text-2xl'>My Account</h3> <hr /><br />
    <p>My Profile</p><br />
    <p>My Account</p><br />
    <p>My Property</p><br />
    <p>Favorites</p><br />
    <p>Cart</p><br />
    </div>


     

    


</div>
  <p className='px-7 py-4 bg-[#1e1e60] text-blue-300'>© 2024 Resido. Designd By Gilead Tech All Rights Reserved</p>

    </div> 
    
  )
}

export default Footer