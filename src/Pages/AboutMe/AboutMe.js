import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../../components/SideBar/Sidebar";
import Profile from "../../Img/Profile.jpg"
import { faCalendar, faCog, faCogs, faComputer, faContactCard, faDatabase, faLocation, faSchool } from "@fortawesome/free-solid-svg-icons";
import Content from "./Content";
import React from "react";

const AboutMe = () => {
  return (
      <div className="flex flex-col items-center justify-center mt-16">
        <SideBar />
        <div className="flex flex-col w-[75%] h-[100%]">
          <div className="text-5xl text-white font-black-han-sans">About Me</div>
          <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
          <div className="w-[100%] bg-gradient-to-tr rounded-md flex justify-center items-center flex-col mt-20">
            <div className="border-2 border-white flex justify-center items-center p-3 rounded-full w-[260px] h-[260px] max-sm:w-[180px] max-sm:h-[180px]">
              <img alt="증명 사진" className="object-contain rounded-full min-w-[250px] h-[250px] max-sm:min-w-[170px] max-sm:h-[170px]" src={Profile}></img>
            </div>
            <div className="max-md:w-[100%] h-[300px] max-md:h-auto md:w-[60%] lg:w-[45%] md:min-w-[600px] mt-5 grid grid-cols-2 max-md:grid-cols-1 gap-6 p-5 border-2 border-white rounded-md ">
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
          <div className="mt-20 text-5xl text-white font-black-han-sans">Skills</div>
          <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
          <div className="w-[100%] flex xl:justify-between max-xl:flex-col">
            <div className="xl:w-[49%] h-auto mt-5 xl:mb-[100px] p-5 border-2 border-white rounded-md max-xl:[100%]"> 
              <div className="flex items-center text-2xl text-white font-black-han-sans">
                <div className="flex flex-col">
                  <div className="mb-5">
                    <div className="flex">
                      <FontAwesomeIcon icon={faComputer} className="mr-5"></FontAwesomeIcon>
                      Front-End
                    </div>
                    <div className="flex flex-wrap w-full mt-3">
                      {Content.FrontEnd.map((item, index) => {
                        return (
                          <div className="flex-none mb-3 mr-2 bg-white rounded-md h-[80px] min-w-[80px] border-2" style={{ flexGrow: 0, flexShrink: 0, flexBasis: 'calc(20% - 0.5rem)' }} key={index}>
                            <img alt={item} src={item} className="object-fill w-full h-full"></img>
                          </div>
                        )
                      })}
                    </div>
                  </div>
    
                  <div className="w-full mb-5">
                    <FontAwesomeIcon icon={faCog} className="mr-6"></FontAwesomeIcon>
                    Back-End
                    <div className="flex flex-wrap w-full mt-3">
                      {Content.BackEnd.map((item, index) => {
                        return (
                          <div className="flex-none mb-3 mr-2 bg-white rounded-md h-[80px] min-w-[80px] border-2" style={{ flexGrow: 0, flexShrink: 0, flexBasis: 'calc(20% - 0.5rem)' }} key={index}>
                            <img alt={item} src={item} className="object-fill w-full h-full"></img>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[49%] h-auto mt-5 xl:mb-[100px] p-5 border-2 border-white rounded-md max-xl:[100%] max-xl:mb-5"> 
              <div className="flex items-center text-2xl text-white font-black-han-sans">
                <div className="flex flex-col">
                  <div className="mb-5 max-sm:text-xl">
                    <FontAwesomeIcon icon={faDatabase} className="mr-7"></FontAwesomeIcon>
                    Etc-Languages
                    <div className="flex w-full mt-3">
                      {Content.EtcLanguages.map((item, index) => {
                        return (
                          <div className="flex-none mb-3 mr-2 bg-white rounded-md h-[80px] min-w-[80px] border-2" style={{ flexGrow: 0, flexShrink: 0, flexBasis: 'calc(20% - 0.5rem)' }} key={index}>
                            <img alt={item} src={item} className="object-fill w-full h-full"></img>
                          </div>
                        )
                      })}
                    </div>
                  </div>
    
                  <div className="mb-5">
                    <FontAwesomeIcon icon={faCogs} className="mr-4"></FontAwesomeIcon>
                    형상 관리
                    <div className="w-full mt-3">
                     {Content.CM.map((item, index) => {
                        return (
                          <div className="flex-none mb-3 mr-2 bg-white rounded-md h-[80px] min-w-[80px] w-[50px] border-2" style={{ flexGrow: 0, flexShrink: 0, flexBasis: 'calc(20% - 0.5rem)' }} key={index}>
                            <img alt={item} src={item} className="object-fill w-full h-full"></img>
                          </div>
                        )
                      })}
                    </div>
                  </div>   
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] bg-gradient-to-r from-black via-[#1b242f] to-black h-[150px] bottom-0 flex justify-center items-center shadow-lg rounded-t-md flex-col max-sm:h-[170px]">
                <div className="flex text-2xl text-white font-black-han-sans max-sm:text-lg">Copyright 2025.
                    <div className="ml-3 text-3xl leading-5 text-white font-delicious max-sm:text-2xl max-sm:leading-5 ">rightear01@gmail.com</div>
                </div>
                <div className="text-2xl text-white font-black-han-sans max-sm:text-lg">all rights reserved. </div>
        </div>
      </div>
  );
}

export default React.memo(AboutMe) ;