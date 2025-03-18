import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../components/SideBar/Sidebar";
import Content from "./Content";
import Button from '@mui/material/Button';
import ShowDetail from "./ShowDetail";
import React, { useState, useEffect, useRef } from "react";
import { Dialog, useMediaQuery, useTheme } from "@mui/material";

const Projects = () => {
    const content = [...Content];
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedItem, setSelectedItem] = useState(null);

    const togglePopup = (item) => {
        setSelectedItem(item);
        setExpanded(!expanded);
    };

    // 비디오에 대한 참조 배열
    const videoRefs = useRef({});

    // 다이얼로그가 열리거나 닫힐 때마다 비디오를 pause 또는 play하도록 처리
    useEffect(() => {
        if (expanded) {
            // 다이얼로그 열리면 모든 비디오 pause
            Object.values(videoRefs.current).forEach((video) => {
                if (video) {
                    video.pause();
                }
            });
        } else {
            // 다이얼로그 닫히면 비디오 play
            Object.values(videoRefs.current).forEach((video) => {
                if (video) {
                    video.play();
                }
            });
        }
    }, [expanded]);

    return (
        <div className="flex justify-center items-center w-full min-h-[100%] mt-14 flex-col">
            <SideBar />
            <div className="flex flex-col w-[75%] max-xl:w-[90%]">
                <div className="text-5xl text-white font-black-han-sans">Projects</div>
                <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
                <div className="w-[100%] h-auto flex justify-around">
                    <div className="w-[100%] flex max-xl:flex-col justify-between mb-5">
                        {content.map((item, index) => (
                            <div className="relative max-xl:w-[100%] w-[33%] max-xl:h-auto xl:h-[850px] mt-5 p-5 border-2 border-white rounded-md" key={item.id}>
                                <div className="text-2xl text-white max-md:text-2xl font-black-han-sans">{item.common.title}</div>
                                <div className="text-base text-white font-noto-sans-kr opacity-85">{item.common.shortDesc}</div>
                                <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
                                <div className="mt-3 font-semibold text-white">{item.common.devPeriod}</div>
                                <div className="w-[95%] h-auto mt-5 xl:min-h-[290px] ">
                                    {item.preView.whatIDid.map((detail) => (
                                        <div className="flex items-center mb-3" key={detail.key} >
                                            <FontAwesomeIcon icon={faCircle} style={{ marginRight: '8px', color: 'white' }} />
                                            <div className="font-semibold text-white text-md">{detail.content}</div>
                                        </div>
                                    ))}
                                </div>
                                <video 
                                    ref={(el) => { videoRefs.current[item.id] = el }} // 각 비디오에 대한 참조를 저장
                                    playsInline
                                    loop
                                    muted
                                    style={{ width: '100%', height: 'auto', minHeight: '220px', objectFit: 'fill' }}
                                >
                                    <source src={item.preView.mainVid} type="video/mp4" />
                                </video>
                    
                                <div className="xl:absolute xl:bottom-10 max-xl:bottom-2 max-xl:w-[100%] w-[90%] flex justify-center items-center max-xl:mt-4 ">
                                    <Button 
                                        variant="contained"
                                        color="info"
                                        style={{
                                            width: '60%',
                                            fontSize: '1.2rem',
                                            height: '70px', 
                                            borderRadius: '4px',
                                            color: 'white',
                                            fontFamily: "'Black Han Sans', sans-serif",
                                            whiteSpace: 'nowrap'
                                        }}
                                        onClick={() => togglePopup(item)}
                                    >
                                        Show Detail
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Dialog open={expanded} onClose={() => setExpanded(false)} fullWidth maxWidth={isMobile ? 'sm' : 'md'}  
              sx={{
                '& .MuiDialog-paper': {
                    height: '90%',
                    maxHeight: 'none',
                    padding: isMobile ? '15px' : '30px',
                    paddingTop: isMobile ? '30px' : '50px' ,
                    overflowY: 'auto',
                }}}
            >
                {selectedItem && <ShowDetail item={selectedItem} isMobile={isMobile} closePopup={() => setExpanded(false)} />}
            </Dialog>
            <div className="w-[100%] bg-gradient-to-r from-black via-[#1b242f] to-black h-[150px] bottom-0 flex justify-center items-center shadow-lg rounded-t-md flex-col max-sm:h-[170px] mt-4">
                <div className="flex text-2xl text-white font-black-han-sans max-sm:text-lg">Copyright 2025.
                    <div className="ml-3 text-3xl leading-5 text-white font-delicious max-sm:text-2xl max-sm:leading-5 ">rightear01@gmail.com</div>
                </div>
                <div className="text-2xl text-white font-black-han-sans max-sm:text-lg">all rights reserved. </div>
            </div>
        </div>
    );
}

export default React.memo(Projects);
