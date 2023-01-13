import React from "react";

import Link from "next/link";
import { useRouter } from 'next/router';

import { sections } from "./service";


export const Header:React.FC = () => {
    const { pathname } = useRouter();

    return(
        <div className="w-full h-20 flex flex-col bg-slate-700 items-center">
            <div className="w-[50%] h-[100%] flex flex-row text-white items-center justify-around text-2xl font-bold">
                {sections.map((section) => (
                    <Link key={section.key} href={section.path}>
                        <button className={`hover:text-slate-300 hover:text-[25px] ${pathname === section.path ? "text-slate-400" : ""}`}>{section.name.toUpperCase()}</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}