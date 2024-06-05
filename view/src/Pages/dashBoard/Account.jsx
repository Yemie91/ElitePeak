import React from 'react'
import NavBar from '../../Component/NavBar'
import Profile from "../../assets/pro.jpg"
import dash from "../../assets/dash.png"
import logout from "../../assets/logout.jpg"
import myprofile from "../../assets/myprofile.png"
import deposit from "../../assets/deposit.png"
import lock from "../../assets/lock.png"
import pool from "../../assets/pool.png"
import location from "../../assets/location.jpg"
import Footer from "../../Component/Footer"

function Account() {
  return (

    <div className=''>

        <div>

    <NavBar />

    {/* FIRST DIV */}

    <div className='bg-[#074da3] w-full h-[150px] flex flex-col py-10 gap-4'>
        <h3 className='flex   text-stone-50 text-4xl font-bold ml-20'>Welcome! Sandra91$</h3>
        <p className='text-white ml-20 font-light'>Welcome To Your Account</p>


    </div>

    {/* CONTAINER FOR THE PROFILE */}

<div className='flex gap-3 px-5 mt-10 py-4'>

    <div className=' bg-slate-100 rounded-[30px] mt-10 '>

        <div className='w-[300px] '>

            <div className='py-5'>
                <img className='w-[130px] h-[130px] rounded-[130px] ml-20 '  src={Profile} alt="" />
                <h5 className='text-2xl font-bold text-center '>Marcus</h5>
                <p className='text-center font-mono'>United States</p>
            </div>


           
              <div className='px-5 gap-10  '>

                <div className='flex gap-2 mt-2'>
                    <img className='w-[20px] h-[16px] rounded-[20px] mt-1' src={dash} alt="" />
                    <h5 className=''>DashBoard</h5>
                </div> 
                <hr />
                


                <div className='mt-2 flex gap-2'>
                    <img className='w-[20px] h-[16px] rounded-[20px] mt-1'  src={myprofile} alt="" />
                    <h5>My Profile</h5>
                </div>


                <div className='mt-2 flex gap-2'>
                    <img  className='w-[20px] h-[16px] rounded-[20px] mt-1' src={deposit} alt="" />
                    <h5>Depost</h5>
                </div> <hr />


                <div className='mt-2 flex gap-2'>
                <img   className='w-[20px] h-[16px] rounded-[20px] mt-1' src={lock} alt="" />
                    <h5>Change Password</h5>
                </div>

                <hr />
                



                <div className='flex gap-2 mt-2'>
                    <img className='w-[20px] h-[20px] rounded-[20px] mt-1' src={logout} alt="" />
                    <h5>Log Out</h5>
                </div>









              </div>
            


        </div>


    </div>

    <div className=''>

   <div>

    <div className='font-bold text-2xl px-2 py-2'>Your Wallet Balance: <span className='text-[#722727]'>$120,893.000</span> </div>

    <div className=' bg-[#1baf65] rounded-[15px] text-white py-5 w-[full] 
         h-[150px]'>
        <h2 className='text-3xl font-bold px-10  '>$120,893.000</h2>
        <p className='px-10'> Account Balance</p>


    </div>

    <div className='font-bold mt-4 py-3'>Your Taste</div>

   </div>

    {/* IMAGE DIV */}


    <div className='flex justify-center gap-2 '>

    
       <div className='bg-gray-300 px-5 py-5 rounded-[7px] '>

<div className=''>
    <img  className='w-[300px] h-[200px] rounded-[5px]' src={pool} alt="" />
    <div className='flex gap-2 py-4'>
        <p className='bg-[#577b57] px-3 rounded-[2px] text-slate-200'>For Sale</p>
        <p className='bg-[#ca6d33] px-3 rounded-[2px] text-slate-600'>Houses</p>
    </div>
    <h5 className='font-semibold'>Sunset Ridge Manor</h5>

    <div className='flex gap-2  '>
        <img className='w-[15px] h-[15px] rounded-[15px] mt-1'  src={location} alt="" />
        <p>Little Rock, AR 72212</p>
    </div>

    <div className='flex gap-4  py-1 '>
        <h4 className='mt-1 font-bold'>$129,500.734</h4>
        
        <div className='flex gap-3'>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-orange-400'></div>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-green-400'></div>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-slate-400'></div>


        </div>
        
    </div>

    <hr />

    <div className='flex gap-10 py-5'>
        <div>
            <p>****</p>
            <p className=''>94 Reviews</p>
        </div>
        <img src="" alt="" />
        <p>6 BHK</p>
        <img src="" alt="" />
        <p>6039 SQFT</p>
    </div>


</div>


       </div>


       <div className='bg-gray-300 px-5 py-5 rounded-[7px]'>

<div className=''>
    <img  className='w-[300px] h-[200px] rounded-[5px]' src={pool} alt="" />
    <div className='flex gap-2 py-4'>
        <p className='bg-[#577b57] px-3 rounded-[2px] text-slate-200'>For Sale</p>
        <p className='bg-[#ca6d33] px-3 rounded-[2px] text-slate-600'>Houses</p>
    </div>
    <h5 className='font-semibold'>Sunset Ridge Manor</h5>

    <div className='flex gap-2  '>
        <img className='w-[15px] h-[15px] rounded-[15px] mt-1'  src={location} alt="" />
        <p>Little Rock, AR 72212</p>
    </div>

    <div className='flex gap-4  py-1 '>
        <h4 className='mt-1 font-bold'>$129,500.734</h4>
        
        <div className='flex gap-3'>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-orange-400'></div>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-green-400'></div>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-slate-400'></div>


        </div>
        
    </div>

    <hr />

    <div className='flex gap-10 py-5'>
        <div>
            <p>****</p>
            <p className=''>94 Reviews</p>
        </div>
        <img src="" alt="" />
        <p>6 BHK</p>
        <img src="" alt="" />
        <p>6039 SQFT</p>
    </div>


</div>


       </div>



       <div className='bg-gray-300 px-5 py-5 rounded-[7px]'>

<div className=''>
    <img  className='w-[300px] h-[200px] rounded-[5px]' src={pool} alt="" />
    <div className='flex gap-2 py-4'>
        <p className='bg-[#577b57] px-3 rounded-[2px] text-slate-200'>For Sale</p>
        <p className='bg-[#ca6d33] px-3 rounded-[2px] text-slate-600'>Houses</p>
    </div>
    <h5 className='font-semibold'>Sunset Ridge Manor</h5>

    <div className='flex gap-2  '>
        <img className='w-[15px] h-[15px] rounded-[15px] mt-1'  src={location} alt="" />
        <p>Little Rock, AR 72212</p>
    </div>

    <div className='flex gap-4  py-1 '>
        <h4 className='mt-1 font-bold'>$129,500.734</h4>
        
        <div className='flex gap-3'>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-orange-400'></div>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-green-400'></div>
        <div className='w-[30px] h-[30px] rounded-[30px] bg-slate-400'></div>


        </div>
        
    </div>

    <hr />

    <div className='flex gap-10 py-5'>
        <div>
            <p>****</p>
            <p className=''>94 Reviews</p>
        </div>
        <img src="" alt="" />
        <p>6 BHK</p>
        <img src="" alt="" />
        <p>6039 SQFT</p>
    </div>


</div>


       </div>




    </div>

    </div>
</div>

<Footer />





</div>
</div>
    
  )
}

export default Account