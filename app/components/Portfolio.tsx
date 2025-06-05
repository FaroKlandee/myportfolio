"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import project1 from "../assets/proj1.jpg";
import project2 from "../assets/proj2.jpg";
import project3 from "../assets/proj3.png";

const projects = [
    {
        year: "2024",
        title: "Classified",
        description: "Web application accomodating appointments supporting users information, communication, image, and confidentiality.",
        skills: "NextJS, Neon Postgre, Vercel, NextAuth, Tailwind CSS",
        link: "#",
        category: "Mobile, Web, Website & Admin",
        stats: [
            {
                value: "",
                description: ""
            },
            {
                value: "",
                description: ""
            }
        ],
        image: project1,
        color: "bg-indigo-900", // Deep purple color
        imageBlur: "blur-lg"
    },
    {
        year: "2023",
        title: "Paul Rudd Concreting",
        description: "Website for users to inquire about concreting services. Support scheduling, payments, phone and emailing inquiries.",
        skills: "NextJS, Neon Postgre, Vercel, NextAuth, Tailwind CSS",
        link: "https://paul-rudd-concreting.vercel.app/",
        category: "Mobile, Web",
        stats: [
            {
                value: "",
                description: ""
            },
            {
                value: "",
                description: ""
            }
        ],
        image: project2,
        color: "bg-slate-800" // Dark slate color
    },
    {
        year: "2023",
        title: "Portfolio Website",
        description: "It is this website that you are currently browsing to showcase myself. Take a look around and any thoughts let me know!",
        skills: "NextJS, Vercel, Tailwind CSS",
        link: "#",
        category: "Web, Website",
        stats: [
            {
                value: "100%",
                description: "Satisfaction rate from clients who viewed the portfolio"
            },
            {
                value: "40%",
                description: "Increase in project inquiries after website launch"
            }
        ],
        image: project3,
        color: "bg-blue-900" // Deep blue color
    }
];

const Portfolio = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-24" id="portfolio">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16"
                >
                    <h2 className="heading-lg mb-6">Featured Case Studies</h2>
                    <p className="text-white/70 max-w-2xl">
                        A selection of my recent work. Each project represents a unique challenge and solution.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            className={`card p-0 overflow-hidden ${project.color}`}
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex flex-wrap justify-between items-start mb-8">
                                    <div>
                                        <p className="text-white/50 mb-2">{project.year}</p>
                                        <h3 className="heading-md mb-4">{project.title}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white/50 mb-2">{project.category}</p>
                                        {project.link && project.link !== "#" && (
                                            <a href={project.link} className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors">
                                                View Project <FiArrowRight />
                                            </a>
                                        )}

                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    {project.stats.map((stat, statIndex) => (
                                        <div key={statIndex}>
                                            <p className="text-4xl font-bold mb-2">{stat.value}</p>
                                            <p className="text-white/70">{stat.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-white/70 mb-6">{project.description}</p>

                                <div className="mb-8">
                                    <p className="text-white/50 text-sm uppercase mb-2">Skills</p>
                                    <p className="text-white/90">{project.skills}</p>
                                </div>
                            </div>

                            <div className="relative h-[300px] md:h-[400px] w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={`object-cover ${project.imageBlur ? `filter ${project.imageBlur}` : ''}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
