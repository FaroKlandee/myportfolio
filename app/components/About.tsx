"use client";
import { motion } from "framer-motion";
import { FiFigma } from "react-icons/fi";

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-24 relative" id="about">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16 text-center"
                >
                    <h2 className="heading-lg mb-6">
                        I'm all about crafting <span className="accent-text">stunning</span> products that don't just look good — they actually make people's lives easier and better
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        className="card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <p className="text-white/50 text-sm uppercase mb-2">Experience</p>
                        <p className="text-3xl font-bold">5+ years</p>
                        <p className="mt-4 text-white/70">
                            With over half a decade under my belt, I've been busy collaborating with brands, shaping digital products, and designing immersive experiences that truly connect.
                        </p>
                    </motion.div>

                    <motion.div
                        className="card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <p className="text-white/50 text-sm uppercase mb-2">Location</p>
                        <p className="text-3xl font-bold">Australia</p>
                        <p className="mt-4 text-white/70">
                            Currently based in Australia, I work with clients globally. I'm comfortable with remote collaboration and different time zones.
                        </p>
                    </motion.div>

                    <motion.div
                        className="card"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <p className="text-white/50 text-sm uppercase mb-2">Education</p>
                        <p className="text-3xl font-bold">Computer Science</p>
                        <p className="mt-4 text-white/70">
                            I hold a Bachelor of Computer Science Degree with a focus on web application technologies like NextJS and Tailwind CSS.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                >
                    <h3 className="heading-md mb-8">My Stacks</h3>
                    <p className="text-white/70 mb-8 max-w-2xl">
                        Commitment to staying updated with the latest design trends and techniques. These are the tools I use daily to create exceptional digital experiences.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <FiFigma className="text-4xl mr-4" />
                            <div>
                                <h4 className="font-medium">Figma</h4>
                                <p className="text-sm text-white/50">UI/UX Design & Prototyping</p>
                            </div>
                        </a>

                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="text-4xl mr-4 w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Next.js</h4>
                                <p className="text-sm text-white/50">React Framework</p>
                            </div>
                        </a>

                        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="text-4xl mr-4 w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Tailwind CSS</h4>
                                <p className="text-sm text-white/50">Utility-First CSS</p>
                            </div>
                        </a>

                        <a href="https://neon.tech/" target="_blank" rel="noopener noreferrer" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="text-4xl mr-4 w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Neon Postgres</h4>
                                <p className="text-sm text-white/50">Serverless SQL Database</p>
                            </div>
                        </a>

                        <a href="https://next-auth.js.org/" target="_blank" rel="noopener noreferrer" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="text-4xl mr-4 w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.041 4.2c.85.002 1.653.374 2.2 1.009.533.628.759 1.45.624 2.264a2.86 2.86 0 0 1-1.228 1.98 2.836 2.836 0 0 1-2.273.42 2.86 2.86 0 0 1-1.98-1.229 2.835 2.835 0 0 1-.42-2.273 2.86 2.86 0 0 1 1.228-1.98 2.835 2.835 0 0 1 1.849-.19zm6.772 3.448a.868.868 0 0 1 .913.817c.01.08.011.16.003.24-.046.46-.236.885-.54 1.198a14.85 14.85 0 0 1-2.812 2.107c-.116.063-.232.125-.348.185a.872.872 0 0 1-.83.045.866.866 0 0 1-.542-.649.873.873 0 0 1 .32-.975c.132-.092.268-.176.405-.265.91-.592 1.746-1.305 2.467-2.122.195-.22.402-.43.626-.622.112-.096.235-.179.37-.237a.87.87 0 0 1 .968.278zm-8.306 3.97c2.08 0 3.768 1.687 3.768 3.766 0 2.08-1.688 3.766-3.768 3.766-2.08 0-3.767-1.687-3.767-3.766 0-2.08 1.688-3.767 3.767-3.767zm8.309 1.603c.85.002 1.653.374 2.2 1.009.533.628.759 1.45.624 2.264a2.86 2.86 0 0 1-1.228 1.98 2.836 2.836 0 0 1-2.273.42 2.86 2.86 0 0 1-1.98-1.229 2.835 2.835 0 0 1-.42-2.273 2.86 2.86 0 0 1 1.228-1.98 2.835 2.835 0 0 1 1.849-.19z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">NextAuth</h4>
                                <p className="text-sm text-white/50">Authentication Solution</p>
                            </div>
                        </a>

                        <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="text-4xl mr-4 w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Stripe</h4>
                                <p className="text-sm text-white/50">Payment Processing</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
