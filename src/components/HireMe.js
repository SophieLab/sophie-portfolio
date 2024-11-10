import Link from "next/link";
import React from "react";
import { TextCircular } from "./Icons";

export const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0
      overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-20">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                <TextCircular
                    className={"fill-dark dark:fill-light animate-spin-slow duration-200"}
                />
                <Link
                    href="mailto:labytsophie@gmail.com"
                    className="flex items-center justify-center absolute inset-0 m-auto shadow-md border border-solid
            bg-dark rounded-full text-white w-20 h-20 font-semibold text-xs text-center hover:bg-light hover:border-dark hover:text-dark
            dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:shadow-light/25
            md:w-12 md:h-12 md:text-[10px]"
                >
                    Travaillons Ensemble
                </Link>
            </div>
        </div>
    );
};
