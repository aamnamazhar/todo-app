import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationButtons(){
  const navigate = useNavigate();

  const goToAdditems = () => {
    navigate('/additems');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

const goToViewitems = () => {
    navigate('/viewitems');
  };



  return(
    <>
     <div className="flex flex-col items-center mt-12 bg-white text-[hsl(200,100%,26%)] max-w-[600px] p-4 mx-auto">
          <button onClick={goToViewitems} className="mb-4 bg-[hsl(199,100%,23%)] border border-[hsl(200,100%,50%)] text-[hsl(0,0%,99%)] px-[1px] py-[0.25em] rounded-[0.25em] cursor-pointer outline-none hover:bg-[hsl(200,100%,50%,0.2)] focus-visible:bg-[hsl(200,100%,50%,0.2)]">Add Items</button>
          <button onClick={goToAdditems} className="mb-4 bg-[hsl(199,100%,23%)] border border-[hsl(200,100%,50%)] text-[hsl(0,0%,99%)] px-[1px] py-[0.25em] rounded-[0.25em] cursor-pointer outline-none hover:bg-[hsl(200,100%,50%,0.2)] focus-visible:bg-[hsl(200,100%,50%,0.2)]">View Items</button>
          <button onClick={goToProfile} className="mb-4 bg-[hsl(199,100%,23%)] border border-[hsl(200,100%,50%)] text-[hsl(0,0%,99%)] px-[1px] py-[0.25em] rounded-[0.25em] cursor-pointer outline-none hover:bg-[hsl(200,100%,50%,0.2)] focus-visible:bg-[hsl(200,100%,50%,0.2)]">View profile</button>
          </div>
    </>
  )
}