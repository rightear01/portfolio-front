import SideBar from "../../components/SideBar/Sidebar";

const Introduction = () => {
    return (
        <div className="flex justify-center w-full h-screen mt-16">
            <SideBar />
            <div className="flex flex-col w-[75%]">
                <div className="text-5xl text-white max-xl:text-4xl font-black-han-sans">Introduction</div>
                <div className="w-[100%] h-[2px] bg-white mt-3 animate-slideIn rounded-sm"></div>
            </div>
        </div>
    );
}

export default Introduction;