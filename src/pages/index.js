import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Photo from "@/components/Photo";  // Assurez-vous d'importer le composant Photo
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
      <>
        <Head>
          <title>Sophie Labyt Portfolio</title>
          <meta
              name="description"
              content="Explore SophieLab Next.js developer portfolio and discover the latest webapp projects."
          />
        </Head>

        <TransitionEffect />
        <article
            className="flex min-h-screen items-center text-light sm:items-start bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/background4.webp')" }}
        >
          <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
            <div className="flex w-full items-start justify-between md:flex-col-reverse">

              {/* Left Section Text */}
              <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                    text="Sophie Labyt."
                    className=" text-white !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                  Créatrice d’expériences numériques, je transforme vos projets en interfaces intuitives et attrayantes
                </p>
                <div className="mt-2 flex flex-col items-center self-start lg:self-center">
                  {/* CV and Contact Links */}
                  <div className="flex items-center">
                    <Link
                        href="/CV-SophieLabyt.pdf"
                        target={"_blank"}
                        className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                md:p-2 md:px-4 md:text-base`}
                        download
                    >
                      Mon CV <LinkArrow className="ml-1 !w-6 md:!w-4" />
                    </Link>

                  </div>

                  {/* HireMe Component Below the Buttons */}
                  <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                    <HireMe />
                  </div>
                </div>
              </div>

              {/* Right Section Photo with Floating Icons */}
              <div className="relative w-1/2 lg:hidden md:inline-block md:w-full">
                <Photo />
              </div>

            </div>
          </Layout>
        </article>
      </>
  );
}