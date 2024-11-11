import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

// Détail de chaque certification
const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <AboutIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
                <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};

// Composant Certifications
const Certifications = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    // Utilisation d'un état pour ne rendre les éléments que côté client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // Lorsque le composant est monté sur le client, on met à jour l'état
    }, []);

    if (!isClient) {
        return null;  // Rendu vide tant que le composant n'est pas monté côté client
    }

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Certifications</h2>

            <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
                <motion.div
                    className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        type="Certification Opquast Maîtrise de la qualité en projet web"
                        time="2021"
                        place="Opquast"
                    />
                    <Details
                        type="Attestation de suivi MOOC l'Atelier RGPD"
                        time="2020"
                        place="CNIL"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Certifications;
