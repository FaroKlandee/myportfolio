"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import faroklandee from "../assets/faroklandee.jpg";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="order-2 md:order-1">
                        <motion.div variants={itemVariants}>
                            <h1 className="heading-xl mb-6">
                                <span className="block">Software</span>
                                <span className="block">Solutions Architech</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            className="text-lg text-white/80 mb-8 max-w-xl"
                            variants={itemVariants}
                        >
                            Hello there! I am Faro Klandee — a developer specializing in providing solutions to software development products
                            in FinTech, eCommerce, and SaaS. My craft is to solve software problems employing various method and technologies.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            variants={itemVariants}
                        >
                            <a href="#portfolio" className="btn-primary flex items-center gap-2">
                                View Projects <FiArrowRight />
                            </a>
                            <a href="#contact" className="btn-outline">
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            className="mt-12 flex items-center gap-8"
                            variants={itemVariants}
                        >
                            <div>
                                <p className="text-white/50 text-sm uppercase">Experience</p>
                                <p className="text-xl font-medium">3+ years</p>
                            </div>
                            <div className="h-12 w-px bg-white/10"></div>
                            <div>
                                <p className="text-white/50 text-sm uppercase">Location</p>
                                <p className="text-xl font-medium">Australia</p>
                            </div>
                            <div className="h-12 w-px bg-white/10"></div>
                            <div>
                                <p className="text-white/50 text-sm uppercase">Availability</p>
                                <p className="text-xl font-medium accent-text">Available</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="order-1 md:order-2 flex justify-center"
                        variants={itemVariants}
                    >
                        <div className="relative pb-12">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#333] to-black blur-3xl opacity-50"></div>
                            <Image
                                src={faroklandee}
                                alt="Faro Klandee"
                                className="relative z-10 rounded-full border-4 border-white/5 w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
                                priority
                            />
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 whitespace-nowrap z-20">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                Available for new projects
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Grid overlay effect */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
