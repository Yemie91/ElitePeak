import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AppName from '../../Component/AppName';



export default function Landing() {

  const history = useNavigate();
  useEffect(()=>{

  const intervalId = setInterval ( ()=>{
    history("/Home");

  },3000);

  return () => clearInterval(intervalId);
  }, [history]);

  return (
    <div className='
    w-full
    h-[100vh]
   

    '> <AppName text="ELITE-PEAK" />
    
      
    </div>
  )
}
