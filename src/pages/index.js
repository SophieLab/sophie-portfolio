import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Photo from "@/components/Photo";
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

      {/* Main article with background image */}
      <article
        className="flex min-h-screen items-center justify-center text-light bg-cover bg-center bg-no-repeat sm:items-start overflow-x-hidden"
        style={{ backgroundImage: "url('/background4.webp')", backgroundSize: 'cover' }}
      >
        <Layout className="!pt-0 md:!pt-12 sm:!pt-8 px-6 max-w-full overflow-x-hidden">
          <div className="flex w-full items-start justify-between md:flex-col-reverse">

            {/* Left Section (Text Content) with more right margin */}
            <div className="flex w-2/2 max-w-full flex-col items-start self-center lg:w-full lg:text-center lg:items-center lg:px-8 pl-24 ml-auto">
              <AnimatedText
                text="Sophie Labyt."
                className="text-white !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 max-w-full text-base font-medium md:text-sm sm:!text-xs lg:text-center lg:px-4">
                Créatrice d’expériences numériques, je transforme vos projets en interfaces intuitives et attrayantes.
              </p>
              <div className="mt-4 flex flex-col items-start lg:items-center lg:self-center lg:px-4">
                {/* CV Link */}
                <div className="flex items-center mb-4">
                  <Link
                    href="/CV-SophieLabyt.pdf"
                    target="_blank"
                    className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base sm:px-3 sm:text-sm"
                    download
                  >
                    Mon CV <LinkArrow className="ml-1 !w-6 md:!w-4 sm:!w-3" />
                  </Link>
                </div>

                {/* HireMe Component */}
                <div className="w-48 h-auto flex items-center justify-center relative md:w-36 sm:w-28">
                  <HireMe />
                </div>
              </div>
            </div>

            {/* Right Section (Photo) */}
            <div className="relative w-full max-w-full lg:w-1/2 md:w-full sm:w-full overflow-x-hidden">
              <Photo />
            </div>

          </div>
        </Layout>
      </article>
    </>
  );
}
