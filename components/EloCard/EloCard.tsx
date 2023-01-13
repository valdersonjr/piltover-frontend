import React from "react";

import { elos, getPath, tiers } from "./service";

export const EloCard = () => {
    const [currentImagePath, setCurrentImagePath] = React.useState(getPath('Challenger'));

   
    const handleSelectedOption = (event:any) => {
        // console.log(typeof event.target.value);
        setCurrentImagePath(getPath(event.target.value));
        console.log(currentImagePath);
    }

    return( 
        <div className="w-80 h-[400px] border-slate-700 border-2 flex flex-col items-center gap-4 justify-around">
            <img className="w-[200px] h-[200px]" src={currentImagePath} />
            <div className="w-[100%] flex flex-col items-center justify-end gap-1">
                <select className="border-2 border-slate-700 w-40" onChange={(event:any) => handleSelectedOption(event) }>
                    {elos.map((elo) => (
                        <option key={elo.key}>{elo.name}</option>
                    ))}
                </select>
                <select className="border-2 border-slate-700 w-40">
                    {tiers.map((tier) => (
                        <option key={tier.key}>{tier.name}</option>
                    ))}
                </select>                
            </div>
        </div>
    )
}