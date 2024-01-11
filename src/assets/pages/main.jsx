import { SideBar } from "../../components/Sidebar"
import { GrSend } from 'react-icons/gr'
import {BiMenuAltLeft} from 'react-icons/bi'
export const Main = () => {
    return (
        <>
            <div className='h-screen w-screen bg-black flex '>

                <SideBar />
                <div className="w-[100%] h-full lg:w-[83%] flex justify-center items-center">
                    <div className="h-[95%] w-[95%] rounded bg-slate-950 flex flex-col">
                        <div className="block lg:hidden h-8 w-full ">
                            <BiMenuAltLeft className='text-4xl text-white'/>
                        </div>
                        <div className="h-[75%] w-full -500"></div>
                        <div className="h-[25%] w-full  flex justify-center items-center">
                            <div className="min-h-[40%] w-[100%] lg:w-[70%] border border-gray-700 rounded-xl flex">
                                <textarea
                                    className="flex-1 min-h-[20%]  w-[90%] resize-none  p-3   focus:outline-none overflow-auto  max-h-[40%] bg-inherit text-white"
                                    placeholder="Message .dotChat..."
                             
                                    onChange={(e) => {
                                        const isDecreasing = e.target.scrollHeight < e.target.offsetHeight;

                                        if (e.target.scrollHeight < 160||isDecreasing) {
                                            e.target.style.height = 'auto';
                                            e.target.style.height = `${e.target.scrollHeight}px`;
                                        }
                                    }

                                    }
                                ></textarea>
                                <div className="w-[10%] flex justify-center items-center"> <GrSend className="text-2xl text-white" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}