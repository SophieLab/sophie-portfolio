import React, {useRef} from "react";
import {motion, useScroll,} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}{" "}
                    <a
                        className="capitalize text-primary dark:text-primaryDark"
                        href={companyLink}
                        target={"_blank"}
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
                <p className="font-medium w-full md:text-sm"> {work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (

        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Expériences
            </h2>

            <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
                <motion.div
                    className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
                    style={{scaleY: scrollYProgress}}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Développeuse Front-end & UX/UI Designer"
                        company="CHU Toulouse"
                        time="2023-maintenant"
                        address="Toulouse"
                        work={
                            <ul className="list-disc pl-5">
                                <li>Chargée de la refonte d'une application web d'imagerie médicale à destination de
                                    professionnels de santé.
                                </li>
                                <li>Recueil et analyse des besoins, résultant sur la conception de maquettes UX/UI.</li>
                                <li>Développement front-end (React, Typescript, Tailwind CSS) et des microservices (API
                                    REST, Axios).
                                </li>
                                <li>Gestion du versioning (Git, GitHub) pour la collaboration avec les développeurs du
                                    projet.
                                </li>
                            </ul>
                        }
                    />


                    <Details
                        position="Chargée de webdesign et marketing digital"
                        company="Kallisto"
                        time="Octobre 2020 - Septembre 2022"
                        address="Toulouse"
                        work={
                            <ul className="list-disc pl-5">
                                <li>Refonte et optimisation du site e-commerce Prestashop.</li>
                                <li>Personnalisation de l'interface utilisateur via des modifications HTML et CSS en
                                    back-office.
                                </li>
                                <li>Optimisation SEO/SEA et gestion du contenu de la marque via HubSpot avec la mise en
                                    place de campagnes ciblées.
                                </li>
                                <li>Analyse des données marketing avec Analytics et Google Ads, afin d'ajuster les
                                    stratégies marketing et maximiser l'impact des campagnes.
                                </li>
                            </ul>
                        }
                    />


                    <Details
                        position="Chargée des archives électroniques"
                        company="Académie de Toulouse"
                        time="Avril 2019 - Juin 2019"
                        address="Toulouse"
                        work={
                            <ul className="list-disc pl-5">
                                <li>Stagiaire pour la préparation à la transition vers des archives dématérialisées.
                                </li>
                                <li>Collecte, analyse et indexation des archives électroniques (10 Go).</li>
                                <li>Mise en place d'une solution d'archivage numérique avec la DSI.</li>
                                <li>Formation des utilisateurs et accompagnement du changement.</li>
                            </ul>
                        }
                    />


                    <Details
                        position="Assistante en communication digitale et SEO"
                        company="LMC"
                        time="Juin 2018"
                        work={
                            <ul className="list-disc pl-5">
                                <li>Amélioration des performances de référencement naturel en optimisant les codes
                                    HTML/CSS des pages web.
                                </li>
                                <li>Mise en œuvre de bonnes pratiques SEO pour augmenter la visibilité des contenus en
                                    ligne.
                                </li>
                                <li>Réalisation d'une veille concurrentielle pour identifier les meilleures pratiques et
                                    adapter la stratégie de contenu de l'entreprise.
                                </li>
                                <li>Création de templates de newsletters via l'outil Sarbacane, en assurant une
                                    cohérence visuelle et éditoriale.
                                </li>
                                <li>Conception de visuels attractifs et conformes à la charte graphique de l’entreprise
                                    en utilisant Photoshop.
                                </li>
                            </ul>
                        }
                    />

                    <Details
                        position="Webmaster"
                        company="Association M.D.S.P"
                        time="Octobre 2017"
                        address="Angres"
                        work={
                            <ul className="list-disc pl-5">
                                <li>Création d’un site web : webdesign, ergonomie, intégration HTML/CSS, conception
                                    graphique.
                                </li>
                            </ul>
                        }
                    />


                </ul>
            </div>
        </div>
    );
};

export default Experience;
