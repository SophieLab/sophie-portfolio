import Link from "next/link";
import React from "react";
import { TextCircular } from "./Icons";

export const HireMe = () => {
    return (
        <div className="fixed right-4 bottom-2 flex flex-col items-center justify-center z-10">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                <TextCircular
                    className={"fill-white dark:fill-light animate-spin-slow duration-200"}
                />
                <Link
                    href="mailto:labytsophie@gmail.com"
                    className="flex items-center justify-center absolute inset-0 m-auto shadow-md border border-solid
                    bg-dark rounded-full text-white w-20 h-20 font-semibold text-xs text-center hover:bg-light hover:border-dark hover:text-dark
                    dark:text-dark dark:bg-light dark:hover:bg-white  dark:hover:border-light dark:shadow-light/25
                    md:w-12 md:h-12 md:text-[10px]"
                >
                    Travaillons Ensemble
                </Link>
            </div>
        </div>
    );
};
