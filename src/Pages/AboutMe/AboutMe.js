import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../../components/SideBar/Sidebar";
import Profile from "../../Img/Profile.jpg"
import { faCalendar, faContactCard, faLocation, faSchool } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center mt-16">
    <SideBar />
    <div className="flex flex-col w-[75%] h-[100%]">

    <div className="text-5xl text-white font-black-han-sans">About Me</div>
          <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
          <div className="w-[100%] bg-gradient-to-tr rounded-md flex justify-between items-center flex-col mt-20">
            <div className="border-2 border-white flex justify-center items-center p-3 rounded-full w-[260px] h-[260px] max-sm:w-[180px] max-sm:h-[180px]">
              <img alt="증명 사진" className="object-contain rounded-full min-w-[250px] h-[250px] max-sm:min-w-[170px] max-sm:h-[170px]" src={Profile}></img>
            </div>
            <div className="max-md:w-[100%] h-[300px] max-xl:h-auto md:w-[60%] lg:w-[45%] md:min-w-[600px] mt-5 grid grid-cols-2 max-xl:grid-cols-1 gap-6 p-5 border-2 border-white rounded-md ">
              <div className="flex items-center justify-start text-2xl text-white font-black-han-sans">
                <FontAwesomeIcon icon={faContactCard} fontSize={'60px'} className="mr-6" color="#C8D7FF"></FontAwesomeIcon>
                <div className="flex flex-col">
                  <div>이름</div>
                  <div className="max-sm:text-xl">차정환</div>
                </div>
              </div>
              <div className="flex items-center justify-start text-2xl text-white font-black-han-sans">
                <FontAwesomeIcon icon={faLocation} fontSize={'60px'} className="mr-6" color="#8C8CBE"></FontAwesomeIcon>
                <div className="flex flex-col">
                  <div>위치</div>
                  <div className="max-sm:text-xl">서울특별시 구로구</div>
                </div>
              </div>
              <div className="flex items-center justify-start text-2xl text-white font-black-han-sans">
                <FontAwesomeIcon icon={faCalendar} fontSize={'50px'} className="ml-2 xl:mr-10 max-md:mr-8 md:mr-10" color="#506EA5"></FontAwesomeIcon>
                <div className="flex flex-col">
                  <div>생년월일</div>
                  <div className="max-sm:text-xl">1999.09.26</div>
                </div>
              </div>
              <div className="flex items-center justify-start text-2xl text-white font-black-han-sans">
                <FontAwesomeIcon icon={faSchool} fontSize={'50px'} className="mr-6"></FontAwesomeIcon>
                <div className="flex flex-col">
                  <div>학력</div>
                  <div className="max-sm:text-xl">
                    <div>한라대학교</div>
                    <div>(컴퓨터 공학과)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
    <div className="w-[100%] bg-gradient-to-r from-black via-[#1b242f] to-black h-[150px] xl:bottom-[-70px] max-xl:bottom-[-200px] flex justify-center items-center shadow-lg rounded-t-md flex-col absolute">
            <div className="flex text-2xl text-white font-black-han-sans max-sm:text-lg">Copyright 2025.
                <div className="ml-3 text-3xl leading-5 text-white font-delicious max-sm:text-2xl max-sm:leading-5 ">rightear01@gmail.com</div>
            </div>
            <div className="text-2xl text-white font-black-han-sans max-sm:text-lg">all rights reserved. </div>
    </div>
  </div>
  );
}

export default React.memo(AboutMe) ;