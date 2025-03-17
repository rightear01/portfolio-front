import { faCircleH, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowDetail = ({ item, isMobile, closePopup }) => {
    console.log(item.main.videos)
    return (
        <div>
            <div className="max-sm:text-xl font-black-han-sans md:text-5xl max-md:text-4xl">{'📃'}{item.common.title}</div>
            <div className="mt-2 text-3xl font-semibold max-sm:mt-0 font-noto-sans-kr max-sm:text-base opacity-85">{'-' + item.common.shortDesc}</div>
            <div className="w-[100%] h-[2px] bg-black shadow-md mt-2"></div>
            <div className="w-[100%] mt-1 font-noto-sans-kr font-bold max-sm:text-sm md:text-2xl max-md:text-xl">{item.common.devPeriod}</div>
            <div className="absolute cursor-pointer opacity-65 right-5 top-5 max-sm:right-2 max-sm:top-1">
                <FontAwesomeIcon icon={faClose}
                    style={{
                        fontSize: isMobile ? '25px' : '40px',
                        color: 'red',
                    }}
                    onClick={closePopup}
                />
            </div>
            <div className="mt-7 max-sm:text-xl font-black-han-sans md:text-4xl max-md:text-4xl">💾 주요 기능</div>
            <div className="w-[100%] h-[1px] bg-black shadow-md"></div>
            <div className="w-full h-auto mt-4">
                {item.main.videos.map((video, index) => (
                    <div className=" max-sm:text-xl font-black-han-sans md:text-3xl max-md:text-4xl" key={index}>
                        <div className="mt-2 mb-1">{index + 1}.{' ' + video.title}</div>
                        <video 
                            loop 
                            autoPlay 
                            muted 
                            style={{ width: '100%', height: 'auto' }}
                            controls
                        >
                            <source src={video.src} type="video/mp4" />
                     </video>
                     <div className="w-[100%] border-l-4 h-auto p-4 mt-2 gradient-border shadow-md mb-4">
                        {video.desc.map((item, index) => {
                            return (
                                <div key={index} className="flex items-start mb-2 font-noto-sans-kr md:text-xl max-sm:text-sm">
                                    <FontAwesomeIcon icon={faCircleH} fontSize={'15px'} className="pt-2 mr-2 max-sm:pt-1" />
                                    {item}
                                </div>
                            )
                        })}
                     </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ShowDetail;
