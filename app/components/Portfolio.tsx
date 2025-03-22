"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import project1 from "../assets/proj1.jpg";
import project2 from "../assets/proj2.jpg";
import project3 from "../assets/proj3.png";

const projects = [
    {
        title: "Elite Companions",
        description: "Website to appoint members seeking companionship services. Support scheduling, payments, login and authentication.",
        devStack: "NextJS, Neon Postgre, Vercel, NextAuth, Tailwind CSS",
        link: "https://elegence-six.vercel.app/",
        git: "#",
        src: project1
    },

    {
        title: "Paul Rudd Concreting",
        description: "Website for users to inquire about conreting services. Support scheduling, payments, phone and emailing inquiries.",
        devStack: "NextJS, Neon Postgre, Vercel, NextAuth, Tailwind CSS",
        link: "https://paul-rudd-concreting.vercel.app/",
        git: "#",
        src: project2
    },

    {
        title: "Portfolio",
        description: "It is this website that you are currently browsing to showcase myself. Take a look around and any thoughts let me know!",
        devStack: "NextJS, Vercel, Tailwind CSS",
        link: "#",
        git: "#",
        src: project3
    }
]


const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

            <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
                Selected <span className="text-orange-400">Projects</span></h1>

            <div className="max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`mt-12 flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
                    >
                        <div className="space-y-2 max-2-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.description}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a>
                            </div>

                        </div>

                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700" />
                        </div>

                    </motion.div>

                ))}

            </div>
        </div>
    )
}

export default Portfolio