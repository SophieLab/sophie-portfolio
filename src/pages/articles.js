import { motion } from "framer-motion";
import Head from "next/head";
import { BackgroundGradientAnimation } from "@/components/BackgroundGradientAnimation";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Articles() {
    return (
        <>
            <Head>
                <title>Simple Portfolio Built with Nextjs | Articles Page</title>
                <meta name="description" content="contact me" />
            </Head>

            <main className="w-full h-screen relative flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <BackgroundGradientAnimation />
                </div>

                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="z-10 p-10 rounded-xl text-center text-white flex flex-col items-center gap-6"
                >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl text-accent mb-4">Travaillons ensemble</h3>
                    <p className="text-base sm:text-lg lg:text-xl">
                        Si vous avez des questions ou souhaitez échanger davantage, je serai ravie de vous répondre. N'hésitez pas à me contacter.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Link
                            href="tel:+33670398936"
                            className={`flex items-center gap-2 rounded-lg border-2 border-solid bg-dark px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold capitalize text-light 
                                hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark 
                                dark:hover:border-light dark:hover:bg-dark dark:hover:text-light`}
                        >
                            <FaPhoneAlt className="text-lg sm:text-xl" />
                            <span>Par téléphone</span>
                        </Link>
                        <Link
                            href="mailto:labytophie@gmail.com"
                            className={`flex items-center gap-2 rounded-lg border-2 border-solid bg-dark px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold capitalize text-light 
                                hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark 
                                dark:hover:border-light dark:hover:bg-dark dark:hover:text-light`}
                        >
                            <FaEnvelope className="text-lg sm:text-xl" />
                            <span>Par mail</span>
                        </Link>
                    </div>
                </motion.section>
            </main>
        </>
    );
}
