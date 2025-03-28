"use client";
import { motion } from "framer-motion";
import { FaDesktop } from 'react-icons/fa';
import { FaFlaskVial } from "react-icons/fa6";

const services = [
    {
        icon: <FaFlaskVial size={40} />,
        title: "Testing",
        description: "Implementing comprehensive test strategies with Tosca, Postman, and React Testing Library for robust, bug-free applications."
    },
    {
        icon: <FaDesktop size={40} />,
        title: "Web Application",
        description: "Building performant, accessible web applications with React, Next.js, and responsive design best practices."
    },
];

// Empty testimonials array that can be populated later
interface Testimonial {
    quote: string;
    author: string;
    position: string;
}

const testimonials: Testimonial[] = [];

const Skills = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-24 relative">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16 text-center"
                >
                    <h2 className="heading-lg mb-6">What I Do</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        I specialize in creating user-centered digital experiences that solve real problems and deliver measurable results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            className="card flex flex-col items-center text-center p-8"
                        >
                            <div className="text-accent mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-white/70">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    {/* <h3 className="heading-md mb-8">Testimonials From Peers & Coworkers</h3>
                    <p className="text-white/70 mb-12 max-w-2xl">
                        Here are a few kind words people have to say about collaborating and solving problems with me.
                    </p> */}

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="card p-8">
                                {/*Line for quotation marks*/}
                                <div className="text-4xl text-white/20 mb-4"></div>
                                <p className="text-lg mb-6">{testimonial.quote}</p>
                                <div>
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-white/50 text-sm">{testimonial.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    className="mt-24 text-center"
                >
                    <h3 className="heading-md mb-6">Some brands I&apos;ve worked with...</h3>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        <a href="https://www.bingoindustries.com.au/" target="_blank" rel="noopener noreferrer" className="bg-white/5 px-6 py-3 rounded-lg">Bingo Industries</a>
                        <a href="https://www.netlinkz.com/" target="_blank" rel="noopener noreferrer" className="bg-white/5 px-6 py-3 rounded-lg">Netlinkz</a>
                        <a href="https://www.telstra.com.au/" target="_blank" rel="noopener noreferrer" className="bg-white/5 px-6 py-3 rounded-lg">Telstra</a>
                        <a href="https://www.optus.com.au/" target="_blank" rel="noopener noreferrer" className="bg-white/5 px-6 py-3 rounded-lg">Optus</a>
                        <a href="https://dipolegroup.com/" target="_blank" rel="noopener noreferrer" className="bg-white/5 px-6 py-3 rounded-lg">Dipole Group</a>
                        <a href="https://exogee.com/" target="_blank" rel="noopener noreferrer" className="bg-white/5 px-6 py-3 rounded-lg">Exogee</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
