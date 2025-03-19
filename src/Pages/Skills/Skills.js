import SideBar from "../../components/SideBar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCogs, faComputer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Content from "./Content";
import React from "react";

const Skills = () => {
    return (
        <div className="flex flex-col items-center mt-16">
          <SideBar />
          <div className="flex flex-col w-[75%] h-[100%]">
            
            <div className="text-5xl text-white font-black-han-sans">Skills</div>
            <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
            <div className="w-[100%] flex xl:justify-between max-xl:flex-col xl:items-center xl:h-[700px]">
              <div className="xl:w-[49%] h-auto mt-5 xl:mb-[100px] p-5 border-2 border-white rounded-md max-xl:[100%]"> 
                <div className="flex items-center text-2xl text-white font-black-han-sans">
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <div className="flex">
                        <FontAwesomeIcon icon={faComputer} className="mr-5"></FontAwesomeIcon>
                        Front-End
                      </div>
                      <div className="flex flex-wrap justify-start w-full mt-3">
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
                      <div className="flex flex-wrap justify-start w-full mt-3">
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
                      <div className="flex justify-start w-full mt-3">
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
                      <div className="flex justify-start w-full mt-3">
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
          <div className="w-[100%] bg-gradient-to-r from-black via-[#1b242f] to-black h-[150px] bottom-0 flex justify-center items-center shadow-lg rounded-t-md flex-col max-sm:h-[170px] xl:absolute max-xl:bottom-[-200px]">
                  <div className="flex text-2xl text-white font-black-han-sans max-sm:text-lg">Copyright 2025.
                      <div className="ml-3 text-3xl leading-5 text-white font-delicious max-sm:text-2xl max-sm:leading-5 ">rightear01@gmail.com</div>
                  </div>
                  <div className="text-2xl text-white font-black-han-sans max-sm:text-lg">all rights reserved. </div>
          </div>
        </div>
    );
  }

export default Skills;