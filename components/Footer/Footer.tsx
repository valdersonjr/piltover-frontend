import React from "react";

export const Footer:React.FC = () => {
    return(
        <div className="w-screen h-10 bg-slate-700 absolute bottom-0 flex flex-col justify-center text-center">
            <span className="h-6 inline text-white">Copyright © <a className="hover:text-slate-300" href="">Piltover Services</a> 2023.</span>
        </div>
    )
}