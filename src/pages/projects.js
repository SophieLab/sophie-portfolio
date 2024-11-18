import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

// Image imports
import html from "../../public/images/svgs/html.svg";
import css from "../../public/images/svgs/css.svg";
import javascript from "../../public/images/svgs/js.svg";
import react from "../../public/images/svgs/react.svg";
import typescript from "../../public/images/svgs/ts.svg";
import tailwind from "../../public/images/svgs/tailwind.svg";
import github from "../../public/images/svgs/github.svg";
import docker from "../../public/images/svgs/docker.svg";
import figma from "../../public/images/svgs/figma.svg";
import expressjs from "../../public/images/svgs/express.svg";
import mongodb from "../../public/images/svgs/mongodb.svg";

// Project images
import proj1 from "../../public/images/projects/projet1.webp";
import proj2 from "../../public/images/projects/projet2.png";
import proj3 from "../../public/images/projects/projet3.png";
import proj4 from "../../public/images/projects/projet4.png";
import proj5 from "../../public/images/projects/projet5.png";
import proj6 from "../../public/images/projects/projet6.png";
import proj7 from "../../public/images/projects/projet7.png";
import proj8 from "../../public/images/projects/projet8.png";

// Motion for Image
const FramerImage = motion(Image);

// FeaturedProject Component
const FeaturedProject = ({ type, title, summary, challenges, img, link, technologies }) => (
    <article className="relative flex w-full flex-wrap items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-8 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-6 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
        <Link href={link} target="_blank" className="w-full lg:w-3/4 cursor-pointer overflow-hidden rounded-lg">
            <FramerImage
                src={img}
                alt={title}
                className="h-auto w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
        </Link>
        <div className="flex flex-col w-full lg:w-3/4 text-dark dark:text-light items-start justify-between pl-4 lg:pl-0 lg:pt-4">
            <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">{type}</span>
            <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
                <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl xs:text-xl">{title}</h2>
            </Link>
            <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
            <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm"><strong>Défis: </strong>{challenges}</p>
            <div className="mt-2 flex flex-wrap items-center">
                <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base" aria-label="Découvrir le projet">
                    Découvrir le projet
                </Link>
                <div className="ml-4 flex flex-wrap space-x-2 space-y-2 sm:space-x-1">
                    {technologies.map((tech, index) => (
                        <Image key={index} src={tech} alt="Technology Icon" width={25} height={25} />
                    ))}
                </div>
            </div>
        </div>
    </article>
);


// Project Component
const Project = ({ title, type, summary, challenges, img, link, technologies }) => (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg -dark xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
        <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
            <FramerImage
                src={img}
                alt={title}
                className="h-auto w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </Link>
        <div className="mt-4 flex w-full text-dark dark:text-light flex-col items-start justify-between">
            <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
            <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
                <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
            </Link>
            {summary && 
              <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
              <strong>Description: </strong>{summary}
          </p>}
            <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm"><strong>Défis: </strong>{challenges}</p>
            <div className="flex w-full items-center justify-between">
                <Link href={link} target="_blank" className="rounded text-lg font-medium underline md:text-base" aria-label={title}>
                    Découvrir le projet
                </Link>
            </div>
            <div className="mt-2 flex space-x-4">
                {technologies.map((tech, index) => (
                    <Image key={index} src={tech} alt="Technology Icon" width={30} height={30} />
                ))}
            </div>
        </div>
    </article>
);

// Projects Page Component
const Projects = () => {
    // Array of technologies for each project
    const technologies1 = [html, react, typescript, tailwind, docker, github, figma];
    const technologies2 = [html, css, javascript, github];
    const technologies3 = [html, css, javascript, github];
    const technologies4 = [html, css, javascript, github];
    const technologies5 = [html, css, react, github];
    const technologies6 = [html, react, javascript, expressjs, mongodb, github];
    const technologies7 = [figma];
    const technologies8 = [figma];

    return (
        <>
            <Head>
                <title>Modern Portfolio Built with Nextjs | Projects Page</title>
                <meta name="description" content="Discover the latest webapp projects created by SophieLab" />
            </Head>
            <TransitionEffect />
            <main className="mb-16 w-full flex flex-col items-center justify-center dark:text-dark pb-24 sm:pb-32">
                <Layout className="pt-32 sm:pt-40 xs:pt-56">
                    <AnimatedText 
                        text="Mes projets" 
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Développement Web et UI/UX Design"
                                title="Gaelo Flow"
                                summary="Dans le cadre de la refonte d'une application web d'imagerie médicale destinée aux professionnels de santé, j'ai pris en charge la conception et le développement de la partie front-end. À partir des maquettes UX/UI définies, je les ai implémentées en utilisant React, Typescript et Tailwind CSS pour offrir une interface fluide et performante."
                                challenges="Lors du développement de l'application, plusieurs défis ont été rencontrés. Le premier a été de garantir une expérience utilisateur fluide et intuitive, en veillant à ce que l'interface soit à la fois agréable et facile à utiliser pour les professionnels de santé. Un autre défi important a été d'assurer un design responsive, capable de s'adapter à différents appareils et résolutions d'écran, afin de garantir une expérience optimale, quelle que soit la plateforme utilisée."
                                img={proj1}
                                link="https://github.com/Pixilib/GaelO_Flow_Frontend"
                                technologies={technologies1}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Optimisation SEO"
                                title="Nina Carducci"
                                summary="L'objectif de la mission était d'optimiser le référencement, la performance et l'accessibilité du site portfolio de la photographe Nina Carducci. J'ai mis en œuvre des techniques de SEO pour améliorer la visibilité du site sur les moteurs de recherche, en travaillant sur les balises, les images et la structure des liens internes. En parallèle, j'ai appliqué les règles d'accessibilité afin de rendre le site accessible. Pour ce faire, j'ai utilisé des outils tels que Lighthouse et Wave pour auditer la performance et l’accessibilité du site, et ainsi proposer des améliorations concrètes."
                                challenges="Les principaux défis rencontrés étaient les problèmes de chargement et de vitesse, nécessitant l'identification des éléments ralentissant le site et la mise en place de solutions pour améliorer ses performances. Un autre défi a été de résoudre les bugs et dysfonctionnements, en analysant le code source pour corriger les erreurs d'affichage et assurer un fonctionnement optimal du site."
                                img={proj2}
                                link="https://github.com/SophieLab/Nina-Carducci-Dev"
                                technologies={technologies2}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Web"
                                title="Sophie Bluel - Portfolio d'architecte"
                                summary="Dans le cadre de ma mission en tant que développeur front-end pour l'agence ArchiWebos, j'ai été chargé de développer plusieurs fonctionnalités pour le site portfolio d'une architecte d’intérieur. Parmi mes principales missions, j'ai créé la page de présentation des travaux à partir du code HTML fourni, ainsi que la page de connexion pour l'administrateur du site, en développant le code front-end de zéro. De plus, j'ai mis en place une modale permettant d'uploader de nouveaux médias, en écrivant le code nécessaire from scratch."
                                challenges="Les principaux défis rencontrés ont été la compréhension de l'API, notamment pour interpréter sa documentation et les réponses renvoyées. Une fois les données récupérées, leur manipulation pour les trier, filtrer et afficher correctement sur le site a posé des difficultés. De plus, la gestion de l'authentification a été complexe, avec des problèmes liés à la gestion des sessions utilisateur et à la protection des zones restreintes de l'application."
                                img={proj3}
                                link="https://github.com/SophieLab/Portfolio-architecte-sophie-bluel"
                                technologies={technologies3}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Web"
                                title="Booki, agence de voyage"
                                summary="Dans le cadre de mon alternance chez la start-up Booki, j'ai été chargé d'intégrer l'interface du site permettant de trouver des hébergements et des activités. Pour ce faire, j'ai utilisé du HTML et du CSS en suivant la maquette fournie sur Figma. J'ai construit le squelette HTML du site et utilisé Flexbox pour la mise en page, ce qui m'a permis de créer une structure flexible et facilement adaptable. J'ai également intégré des media queries pour rendre le site responsive et adapté à tous les types d'écrans."
                                challenges="Les défis rencontrés étaient liés à l'utilisation du Flexbox, notamment pour l'alignement des éléments, la gestion de l'espace entre eux, l'ordre d'affichage et la gestion des dimensions. Ces aspects ont nécessité une bonne maîtrise des différentes propriétés de Flexbox pour obtenir un rendu cohérent et fonctionnel dans la mise en page."
                                img={proj4}
                                link="https://github.com/SophieLab/Portfolio-architecte-sophie-bluel"
                                technologies={technologies4}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Web"
                                title="Kasa, spécialiste de la location entre particuliers en France"
                                summary="Pour la refonte du site Kasa, j'ai développé une application de location immobilière en React. L'application suit une architecture Single Page Application (SPA), avec le routage géré par React Router. J'ai créé des composants réutilisables pour chaque fonctionnalité, ce qui permet une gestion modulaire et flexible de l'application. L'objectif était de garantir une interface fluide et dynamique, tout en assurant une bonne organisation du code pour faciliter son évolution future."
                                challenges="Dans ce projet, les principaux enjeux rencontrés ont été la gestion du routage avec React Router, la présentation et manipulation des données issues d'un fichier JSON, ainsi que le respect du design et des animations. L'utilisation de Sass a également posé quelques défis, notamment pour organiser et maintenir les styles de manière efficace."
                                img={proj5}
                                link="https://github.com/SophieLab/kasa"
                                technologies={technologies5}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Back-end"
                                title="Mon Vieux Grimoire"
                                summary="Dans le cadre de ce projet freelance, j'ai développé le back-end du site Mon Vieux Grimoire pour la chaîne de librairies. J'ai utilisé Node.js et Express pour créer l'API et gérer une base de données MongoDB. L'architecture du projet a été pensée de manière modulaire, avec une séparation claire entre la logique métier, le routage et les middlewares. J'ai sécurisé l'application à l'aide de solutions comme Helmet et Bcrypt. Enfin, pour respecter les bonnes pratiques du Green Code, j'ai optimisé les images téléchargées par les utilisateurs grâce à un middleware utilisant la bibliothèque Sharp."
                                challenges="J'ai fait face à plusieurs défis, notamment la création d'un système de connexion sécurisé, ce qui m'a permis d'approfondir mes connaissances en authentification et chiffrement. J'ai également rencontré des difficultés avec la gestion de la base de données MongoDB et des problèmes de débogage avec Express. Ces expériences ont renforcé mes compétences techniques et ma résilience en développement web."
                                img={proj6}
                                link="https://github.com/SophieLab/mon-vieux-grimoire"
                                technologies={technologies6}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="UI/UX Design"
                                title="Refonte du site internet pour la Maison Des Bibie's"
                                summary="J'ai participé à la refonte du site internet et à la création des supports de communication pour la Maison des Bibies, un réseau de micro-crèches à Montauban. L'objectif était de moderniser des supports obsolètes. Durant six mois, en collaboration avec les porteurs de projet, j'ai intégré le pôle communication, contribuant à l'identité visuelle et à la réalisation des prototypes du site. Cette expérience m'a permis de mettre en pratique mes compétences en UI/UX design."
                                challenges="L'enjeu de ce projet fût de concilier les attentes des utilisateurs avec les contraintes techniques, tout en garantissant une expérience utilisateur fluide et intuitive. J'ai dû effectuer plusieurs itérations de prototypes basées sur les retours des utilisateurs pour optimiser l'interface."
                                img={proj7}
                                link="https://lamaisondesbibies.fr/"
                                technologies={technologies7}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Web"
                                title="Création d'un prototype pour l'application MADI"
                                summary="Dans le cadre d'un projet d'étude, j'ai réalisé un prototypage pour l'application MADI, une intelligence artificielle couplée à l'implant Neuralink. L'objectif était de créer un prototype rassurant pour l'utilisateur. J'ai créé les wireframes et prototypes de l'application, en suivant un scénario utilisateur et une charte graphique donnée. J'ai également rédigé et réalisé les protocoles de tests utilisateurs pour valider l'expérience."
                                challenges="Le plus grand défi a été de rendre le prototype rassurant pour l'utilisateur, tout en respectant un thème graphique donné. Cela a nécessité une attention particulière à l'esthétique et à l'ergonomie, afin de garantir confiance et confort aux utilisateurs face à une technologie innovante comme l'intelligence artificielle couplée à l'implant Neuralink."
                                img={proj8}
                                link="https://"
                                technologies={technologies8}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;