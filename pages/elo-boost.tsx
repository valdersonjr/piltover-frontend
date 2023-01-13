import React from "react";

import { Header, EloCard, RegionCard, Footer } from "../components";

const EloBoost:React.FC = () => {
    return(
        <div className="w-screen h-screen flex flex-col items-center gap-6">
            <Header/>
            <h2 className="text-slate-700 text-4xl font-semibold">Elo Boost</h2>
            <p className="w-[700px] text-slate-700 text-center">
                No seviço de <b>Elo Boost</b> um jogador <b>mestre+</b> entrará em sua
				conta e colocará você em seu elo merecido. Nós garantimos um serviço
				seguro e livre de risco.
            </p>
            <div className="flex flex-row gap-6">
               <RegionCard/>
               <EloCard/>
               <EloCard/>
            </div>
            <Footer/>
        </div>
    )
}

export default EloBoost;