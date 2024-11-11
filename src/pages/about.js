import Layout from "@/components/Layout";
import Head from "next/head";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import certification from "@/components/Certification";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Certification from "@/components/Certification";

function AnimatedNumberFramerMotion({ value }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, value, isInView]);

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0);
                }
            }),
        [springValue, value]
    );

    return <span ref={ref} />;
}

export default function About() {
    return (
        <>
            <Head>
                <title>À Propos</title>
                <meta
                    name="description"
                    content="Learn more."
                />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout>
                    <Skills />
                    <Certification />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
}
