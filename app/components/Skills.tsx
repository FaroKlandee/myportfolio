"use client";
import { motion } from "framer-motion";
import { FaCode, FaFigma, FaMobileAlt } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

const services = [
    {
        icon: <MdOutlineDesignServices size={40} />,
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user experiences that balance aesthetics with functionality."
    },
    {
        icon: <FaFigma size={40} />,
        title: "Design Systems",
        description: "Building scalable design systems that ensure consistency across products and platforms."
    },
    {
        icon: <FaMobileAlt size={40} />,
        title: "Mobile Design",
        description: "Crafting responsive interfaces that provide exceptional experiences on any device."
    },
    {
        icon: <FaCode size={40} />,
        title: "Frontend Development",
        description: "Implementing designs with clean, efficient code using modern frameworks and technologies."
    }
];

const testimonials = [
    {
        quote: "Faro is a highly talented product designer, known for his remarkable creativity and ease in solving complex design challenges.",
        author: "John Smith",
        position: "Director UX (Modus)"
    },
    {
        quote: "His commitment to design is evident and eagerness to tackle the toughest problems makes him an invaluable asset to any team.",
        author: "Sarah Johnson",
        position: "Senior Advocacy Amazon"
    }
];

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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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
                    <h3 className="heading-md mb-8">Testimonials From Peers & Coworkers</h3>
                    <p className="text-white/70 mb-12 max-w-2xl">
                        Here are a few kind words people have to say about collaborating and solving problems with me.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="card p-8">
                                <div className="text-4xl text-white/20 mb-4">"</div>
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
                    <h3 className="heading-md mb-6">Some brands I've worked with...</h3>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        <div className="bg-white/5 px-6 py-3 rounded-lg">Microsoft</div>
                        <div className="bg-white/5 px-6 py-3 rounded-lg">Modus Create</div>
                        <div className="bg-white/5 px-6 py-3 rounded-lg">Bitsika</div>
                        <div className="bg-white/5 px-6 py-3 rounded-lg">Tangerine</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
