import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const navigate = useNavigate();
  const [initEffect, setInitEffect] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitEffect(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const handleOnClick = (e) => {
    if(e.target.innerText === 'Home') window.location.reload();
    else navigate(`/${e.target.innerText}`);
  };
    return (
      <div className="flex flex-col items-center justify-center h-[100vh] w-[100%] Home overflow-hidden relative">
				<div className="text-white text-7xl font-black-han-sans mt-[17rem] max-sm:mt-[6rem] whitespace-nowrap max-md:text-5xl">Cha's wiki <FontAwesomeIcon icon={faPaperclip} className="animate-fade" /></div>
				<div className="w-[600px] max-sm:w-[80%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
				<div className="mt-1 text-4xl text-white font-delicious whitespace-nowrap opacity-90 max-md:text-3xl">Welcome to my portfolio site</div>
				<div className="relative sm:min-w-[450px] sm:w-[450px] h-[300px] sm:mt-14 font-josefin max-sm:w-[300px] max-sm:h-[200px] max-sm:mt-5">
            <div className={`absolute w-[30px] bg-gray-500 rounded-full h-[30px] top-4 left-[45%] cursor-pointer hover:shadow-sunlike hover:ring-custom-sun transition-shadow duration-500 ${initEffect ? 'shadow-sunlike' : ''}`} onClick={handleOnClick}>
							<div className="relative text-2xl font-bold text-white opacity-75 top-8 -left-5">Home</div>
						</div>
            <div className={`absolute w-[30px] bg-gray-500 rounded-full h-[30px] max-sm:top-20 top-24 right-[15%] cursor-pointer hover:shadow-sunlike hover:ring-custom-sun transition-shadow duration-500 ${initEffect ? 'shadow-sunlike' : ''}`} onClick={handleOnClick}>
							<div className="relative text-2xl font-bold text-white opacity-75 top-8 -left-8">Contact</div>
						</div>
            <div className={`absolute w-[30px] bg-gray-500 rounded-full h-[30px] max-sm:top-20 top-24 left-[15%] cursor-pointer hover:shadow-sunlike hover:ring-custom-sun transition-shadow duration-500 ${initEffect ? 'shadow-sunlike' : ''}`} onClick={handleOnClick}>
							<div className="relative text-2xl font-bold text-white opacity-75 top-8 -left-3">Skills</div>
						</div>
            <div className={`absolute w-[30px] bg-gray-500 rounded-full h-[30px]  bottom-6 max-sm:bottom-2 left-[30%] max-sm:left-[27%] cursor-pointer hover:shadow-sunlike hover:ring-custom-sun transition-shadow duration-500 ${initEffect ? 'shadow-sunlike' : ''}`} onClick={handleOnClick}>
							<div className="relative text-2xl font-bold text-white opacity-75 top-8 -left-11 whitespace-nowrap">AboutMe</div>
						</div>
            <div className={`absolute w-[30px] bg-gray-500 rounded-full h-[30px]  bottom-6 right-[30%] max-sm:right-[27%] max-sm:bottom-2 cursor-pointer hover:shadow-sunlike hover:ring-custom-sun transition-shadow duration-500 ${initEffect ? 'shadow-sunlike' : ''}`} onClick={handleOnClick}>
							<div className="relative text-2xl font-bold text-white opacity-75 top-8 -left-8">Projects</div>
						</div>
        </div>
      </div>
    );
}

export default React.memo(Home);