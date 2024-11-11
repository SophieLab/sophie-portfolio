import { motion } from "framer-motion";
import Head from "next/head";
import BackgroundGradientAnimation from "../components/BackgroundGradientAnimation";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function Articles() {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta name="description" content="contact me" />
      </Head>

      <main className="w-full h-screen relative">
        {/* L'élément de fond animé qui est placé en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation />
        </div>

        {/* Section avec le texte par-dessus le fond animé */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center text-white z-10 p-10 rounded-xl"
        >
          <h3 className="text-5xl text-accent mb-4">Travaillons ensemble</h3>
        </motion.section>

        {/* Section avec les boutons de contact */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.4, ease: "easeIn" } }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 justify-center z-10"
        >
          <a
            href="tel:+33670398936"
            className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            <FaPhoneAlt className="text-xl" />
            <span className="text-lg">Par téléphone</span>
          </a>
          <a
            href="mailto:labytophie@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-lg">Par mail</span>
          </a>
        </motion.section>
      </main>
    </>
  );
}
