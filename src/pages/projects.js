import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

// Image imports
import html from "../../public/images/svgs/html.svg";
import css from "../../public/images/svgs/css.svg";
import javascript from "../../public/images/svgs/js.svg"; // Chemin corrigé
import react from "../../public/images/svgs/react.svg";
import typescript from "../../public/images/svgs/ts.svg";
import tailwind from "../../public/images/svgs/tailwind.svg";
import github from "../../public/images/svgs/github.svg";
import docker from "../../public/images/svgs/docker.svg";
import Figma from "../../public/images/svgs/figma.svg";

// Project images
import proj1 from "../../public/images/projects/projet1.png";
import proj2 from "../../public/images/projects/projet2.png";
import proj3 from "../../public/images/projects/projet3.png";
import proj4 from "../../public/images/projects/projet4.png";
import proj5 from "../../public/images/projects/projet5.png";
import proj6 from "../../public/images/projects/projet6.png";
import proj7 from "../../public/images/projects/projet7.png";
import proj8 from "../../public/images/projects/projet8.png";

// Motion for Image
const FramerImage = motion(Image);

// Featured Project Component
const FeaturedProject = ({ type, title, summary, img, link, github, technologies }) => (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
        <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
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
        <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
            <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">{type}</span>
            <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
                <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">{title}</h2>
            </Link>
            <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
            <div className="mt-2 flex items-center">
                <Link href={github} target="_blank" className="w-10" aria-label="GitHub link">
                    <GithubIcon />
                </Link>
                <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base" aria-label="Visit Project">
                    Visit Project
                </Link>
                <div className="ml-4 flex space-x-4">
                    {technologies.map((tech, index) => (
                        <Image key={index} src={tech} alt="Technology Icon" width={30} height={30} />
                    ))}
                </div>
            </div>
        </div>
    </article>
);

// Project Component
const Project = ({ title, type, summary, img, link, github, technologies }) => (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
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
        <div className="mt-4 flex w-full flex-col items-start justify-between">
            <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
            <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
                <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
            </Link>
            {summary && <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">{summary}</p>}
            <div className="flex w-full items-center justify-between">
                <Link href={link} target="_blank" className="rounded text-lg font-medium underline md:text-base" aria-label={title}>
                    Visit
                </Link>
                <Link href={github} target="_blank" className="w-8 md:w-6" aria-label={title}>
                    <GithubIcon />
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
    const technologies1 = [html, react, typescript, tailwind, docker, github, Figma];
    const technologies2 = [html, css, javascript, github];
    const technologies3 = [html, css, javascript, github];
    const technologies4 = [html, css, javascript, github];
    const technologies5 = [html, css, react, github];
    const technologies6 = [html, react, typescript, tailwind, github, docker];
    const technologies7 = [html, react, tailwind, github];
    const technologies8 = [html, react, typescript, tailwind, github, docker];

    return (
        <>
            <Head>
                <title>Modern Portfolio Built with Nextjs | Projects Page</title>
                <meta name="description" content="Discover the latest webapp projects created by SophieLab" />
            </Head>
            <TransitionEffect />
            <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Mes projets" className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                type="Développement Web et UI/UX Design"
                                title="Gaelo Flow"
                                summary="Dans le cadre de la refonte d'une application web d'imagerie médicale destinée aux professionnels de santé, j'ai pris en charge la conception et le développement de la partie front-end. À partir des maquettes UX/UI définies, je les ai implémentées en utilisant React, Typescript et Tailwind CSS pour offrir une interface fluide et performante."
                                img={proj1}
                                link="https://github.com"
                                github="https://github.com"
                                technologies={technologies1}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Optimisation SEO"
                                title="Nina Carducci"
                                summary="L'objectif de la mission était d'optimiser le référencement, la performance et l'accessibilité du site portfolio de la photographe Nina Carducci. J'ai mis en œuvre des techniques de SEO pour améliorer la visibilité du site sur les moteurs de recherche, en travaillant sur les balises, les images et la structure des liens internes. En parallèle, j'ai appliqué les règles d'accessibilité afin de rendre le site accessible. Pour ce faire, j'ai utilisé des outils tels que Lighthouse et Wave pour auditer la performance et l’accessibilité du site, et ainsi proposer des améliorations concrètes."
                                img={proj2}
                                link="https://github.com"
                                github="https://github.com/SophieLab/Nina-Carducci-Dev"
                                technologies={technologies2}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Web"
                                title="Sophie Bluel - Portfolio d'architect"
                                summary="Dans le cadre de ma mission en tant que développeur front-end pour l'agence ArchiWebos, j'ai été chargé de développer plusieurs fonctionnalités pour le site portfolio d'une architecte d’intérieur. Parmi mes principales missions, j'ai créé la page de présentation des travaux à partir du code HTML fourni, ainsi que la page de connexion pour l'administrateur du site, en développant le code front-end de zéro. De plus, j'ai mis en place une modale permettant d'uploader de nouveaux médias, en écrivant le code nécessaire from scratch."
                                img={proj3}
                                link="https://github.com"
                                github="https://github.com/SophieLab/Portfolio-architecte-sophie-bluel"
                                technologies={technologies3}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Web"
                                title="Booki, agence de voyage"
                                summary="Dans le cadre de mon alternance chez la start-up Booki, j'ai été chargé d'intégrer l'interface du site permettant de trouver des hébergements et des activités. Pour ce faire, j'ai utilisé du HTML et du CSS en suivant la maquette fournie sur Figma. J'ai construit le squelette HTML du site et utilisé Flexbox pour la mise en page, ce qui m'a permis de créer une structure flexible et facilement adaptable. J'ai également intégré des media queries pour rendre le site responsive et adapté à tous les types d'écrans."
                                img={proj4}
                                link="https://github.com"
                                github="https://github.com"
                                technologies={technologies4}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Front-end"
                                title="Kasa, spécialiste de la location entre particuliers en France"
                                summary="Pour la refonte du site Kasa, j'ai développé une application de location immobilière en React. L'application suit une architecture Single Page Application (SPA), avec le routage géré par React Router. J'ai créé des composants réutilisables pour chaque fonctionnalité, ce qui permet une gestion modulaire et flexible de l'application. L'objectif était de garantir une interface fluide et dynamique, tout en assurant une bonne organisation du code pour faciliter son évolution future."
                                img={proj5}
                                link="https://github.com"
                                github="https://github.com/SophieLab/booki-starter-codehttps://github.com/SophieLab/booki-starter-code"
                                technologies={technologies5}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Back-end"
                                title="Mon Vieux Grimoire"
                                img={proj6}
                                link="https://github.com"
                                github="https://github.com"
                                technologies={technologies6}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Front-end"
                                title="App React"
                                img={proj7}
                                link="https://github.com"
                                github="https://github.com"
                                technologies={technologies7}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Développement Web"
                                title="Dev Dreaming"
                                img={proj8}
                                link="https://"
                                github="https://github.com"
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
