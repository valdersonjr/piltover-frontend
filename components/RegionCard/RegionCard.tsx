import React from "react";
import { options } from "./service";

export const RegionCard:React.FC = () => {
    return( 
        <div className="w-80 h-[400px] border-slate-700 border-2 flex flex-col items-center gap-4 justify-between">
            <h3 className="mt-4 text-2xl text-slate-700">Escolha sua região:</h3>
            <img width={200} src="../../assets/diannaChibi.png" alt="img of dianna chibi" />
                <select className="mb-14 border-2 border-slate-700 w-40">
                    {options.map((option) => (
                        <option key={option.key} >{option.name}</option>
                    ))}
                </select>
        </div>
    )
}