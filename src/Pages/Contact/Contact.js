import SideBar from "../../components/SideBar/Sidebar";
import Content from "./Content";
import ImageLoader from "./ImageLoader";

const Contact = () => {
    return (
        <div className="flex justify-center mt-16 ">
            <SideBar />
            <div className="flex flex-col w-[75%] min-h-[90vh]">
                <div className="text-5xl text-white font-black-han-sans">Contact</div>
                <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
                <div className="w-[100%] flex justify-around items-center h-[60%]">
                    <div className="flex w-[50%] max-md:w-[100%] justify-around">
                        {Content.map((item, index) => {
                            return (
                                <div className="flex flex-col items-center justify-center w-[33%]" key={index}>
                                     <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        <ImageLoader src={item.Img} alt="Instagram"  />
                                    </a>
                                    <div className="text-3xl text-center text-white font-delicious">{item.alt}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="absolute w-[100%] bg-gradient-to-r from-black via-[#1b242f] to-black h-[200px] bottom-0 flex justify-center items-center shadow-lg rounded-t-md flex-col max-sm:h-[200px]">
                <div className="flex text-3xl text-white font-black-han-sans max-sm:text-lg">Copyright 2025.
                    <div className="ml-3 text-4xl leading-5 text-white font-delicious max-sm:text-2xl max-sm:leading-5 ">rightear01@gmail.com</div>
                </div>
                <div className="text-3xl text-white font-black-han-sans max-sm:text-lg">all rights reserved. </div>
            </div>
        </div>
    );
}

export default Contact;
