import { faCircleDot, faCircleH, faClose } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons/faCircleChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowDetail = ({ item, isMobile, closePopup }) => {
    return (
        <div>
            <div className="max-sm:text-xl font-black-han-sans md:text-5xl max-md:text-4xl">{'📃'}{item.common.title}</div>
            <div className="mt-2 text-3xl font-semibold max-sm:mt-0 font-noto-sans-kr max-sm:text-base opacity-85">{'-' + item.common.shortDesc}</div>
            <div className="w-[100%] h-[2px] bg-black shadow-md mt-2"></div>
            <div className="w-[100%] mt-1 font-noto-sans-kr font-bold max-sm:text-sm md:text-xl max-md:text-lg opacity-70">{item.common.devPeriod}</div>
            {item.common.depPeriod && <div className="w-[100%] mt-1 font-noto-sans-kr font-bold max-sm:text-sm md:text-xl max-md:text-lg opacity-70">{item.common.depPeriod && item.common.depPeriod}</div>}
            <div className="absolute cursor-pointer opacity-65 right-5 top-5 max-sm:right-2 max-sm:top-1">
                <FontAwesomeIcon icon={faClose}
                    style={{
                        fontSize: isMobile ? '25px' : '40px',
                        color: 'red',
                    }}
                    onClick={closePopup}
                />
            </div>
            <div className="mt-7 max-sm:text-xl font-black-han-sans md:text-4xl max-md:text-4xl">🎬 개발 배경</div>
            <div className="w-[100%] h-[1px] bg-black shadow-md"></div>
            <div className="w-[100%] h-auto p-4 gradient-border shadow-lg max-sm:font-semibold flex flex-col">
                <div className="mb-2 font-semibold leading-6 font-noto-sans-kr md:text-xl max-sm:text-sm">
                {item.main.devBackground.map((desc, index) => {
                    return (
                        <div key={index} className="mb-6 font-semibold max-sm:mb-3 font-noto-sans-kr md:text-xl max-sm:text-sm">
                            &nbsp;{desc}
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="mt-7 max-sm:text-xl font-black-han-sans md:text-4xl max-md:text-4xl">🛠️ 사용 기술</div>
            <div className="w-[100%] h-[1px] bg-black shadow-md"></div>
            <div className="w-[100%] h-auto p-4 mt-2 gradient-border shadow-lg max-sm:font-semibold flex flex-col">
                {item.main.technologyStack.map((desc, index) => {
                    const isLast = index === item.main.technologyStack.length - 1;
                    console.log(isLast)
                    return (
                        <div key={index} className="mb-2 ml-1 font-semibold font-noto-sans-kr md:text-xl max-sm:text-sm">
                             <FontAwesomeIcon icon={faCircleDot} fontSize={'15px'} className="pt-2 mr-2 max-sm:pt-1" />
                            {desc}
                        </div>
                    )
                })}
            </div>
            <div className="mt-7 max-sm:text-xl font-black-han-sans md:text-4xl max-md:text-4xl">🔎 프토젝트 특징</div>
            <div className="w-[100%] h-[1px] bg-black shadow-md"></div>
            <div className="w-[100%] h-auto p-4 mt-2 gradient-border shadow-lg max-sm:font-semibold flex flex-col">
                {item.main.projectFeatures.map((desc, index) => {
                    const isLast = index === item.main.technologyStack.length - 1;
                    console.log(isLast)
                    return (
                        <div key={index} className="mb-2 ml-1 font-semibold font-noto-sans-kr md:text-xl max-sm:text-sm">
                             <FontAwesomeIcon icon={faCircleChevronRight} fontSize={'15px'} className="pt-2 mr-2 max-sm:pt-1" />
                            {desc}
                        </div>
                    )
                })}
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
                     <div className="w-[100%] border-l-4 h-auto p-4 mt-2 shadow-md mb-4 max-sm:font-semibold">
                        {video.desc.map((item, index) => {
                            return (
                                <div key={index} className="flex items-start mb-2 ml-1 font-noto-sans-kr md:text-xl max-sm:text-sm max-md:text-xl">
                                    <FontAwesomeIcon icon={faCircleH} fontSize={'15px'} className="pt-2 mr-2 max-sm:pt-1 " />
                                    {item}
                                </div>
                            )
                        })}
                     </div>
                </div>
                ))}
            </div>
            {item.main.whatIDid ?(
                <>
                    <div className="mt-7 max-sm:text-xl font-black-han-sans md:text-4xl max-md:text-4xl">⌨️ 수행 내용</div>
                    <div className="w-[100%] h-[1px] bg-black shadow-md"></div>
                    <div className="w-[100%] h-auto p-4 mt-2 shadow-lg max-sm:font-semibold flex flex-col">
                        {item.main.whatIDid.map((desc, index) => {
                            return (
                                <div key={index} className="mb-2 ml-1 font-semibold font-noto-sans-kr md:text-xl max-sm:text-sm">
                                     <FontAwesomeIcon icon={faCircleChevronRight} fontSize={'15px'} className="pt-2 mr-2 max-sm:pt-1" />
                                    {desc}
                                </div>
                            )
                        })}
                    </div>
                </>
                ) : null
            }
            <div className="mt-7 max-sm:text-xl font-black-han-sans md:text-4xl max-md:text-4xl">🔗 추가 자료</div>
            <div className="w-[100%] h-[1px] bg-black shadow-md"></div>
            <div className="w-[100%] h-auto p-4 mt-2 shadow-lg flex flex-col">
                {item.main.extraSrc.map((content, index) => {
                    const lastItem = item.main.extraSrc.length - 1
                    if (content.category === 'link') {
                        return (
                            <div key={index} className={`flex justify-start pl-5 w-full h-[80px] rounded-md bg-white shadow-xl ${index !== lastItem ? 'mb-2' : ''} `}>
                                <a href={content.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <img alt={content.src} src={content.img} className="object-fill w-[60px] h-[60px]" />
                                    <div className="ml-5 text-lg font-semibold font-noto-sans-kr">{content.src} </div>
                                </a>
                            </div>
                        );
                    }
                     else if (content.category === 'File') {
                        return (
                            <div key={index} className={`flex justify-start pl-5 w-full h-[80px] rounded-md bg-white shadow-xl ${index !== lastItem ? 'mb-2' : ''} `}>
                                <a href={content.link} download className="flex items-center">
                                    <img alt={content.src} src={content.img} className="object-fill w-[60px] h-[60px]" />
                                    <div className="ml-5 text-lg font-semibold font-noto-sans-kr">{content.src} </div>
                                </a>
                            </div>
                        );
                    }
                    return null;
                 })}
            </div>
        </div>
    );
}

export default ShowDetail;
