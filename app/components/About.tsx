"use client";
import { motion } from "framer-motion";
import { FaJava, FaPython } from "react-icons/fa";

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
                        I&apos;m all about crafting <span className="accent-text">solutions</span> that solves variety of software challenges
                        - By providing these solutions I aim to make people&apos;s lives easier and better
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
                        <p className="text-3xl font-bold">3+ years</p>
                        <p className="mt-4 text-white/70">
                            with more than 3 years of experience, I&apos;ve been delivering solutions to different brands, collaborating and shaping
                            digital solutions to achieve business goals.
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
                            Currently based in Australia, I work with clients globally. I&apos;m comfortable with remote collaboration
                            and different time zones.
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
                            I hold a Bachelor of Computer Science Degree with a focus on multi-platform application
                            technologies like React.js, MongoDB and Tailwind CSS.
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
                        <a href="https://figma.com/" target="_blank" rel="noopener noreferrer nofollow"
                            className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="w-8 h-10 mr-4" viewBox="0 0 1024 1280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M312 840C312 784.772 356.772 740 412 740H512V840C512 895.228 467.228 940 412 940C356.772 940 312 895.228 312 840Z"
                                    fill="#24CB71" />
                                <path d="M512 340V540H612C667.228 540 712 495.228 712 440C712 384.772 667.228 340 612 340H512Z" fill="#FF7237" />
                                <circle cx="611.167" cy="640" r="100" fill="#00B6FF" />
                                <path d="M312 440C312 495.228 356.772 540 412 540H512V340H412C356.772 340 312 384.772 312 440Z" fill="#FF3737" />
                                <path d="M312 640C312 695.228 356.772 740 412 740H512V540H412C356.772 540 312 584.772 312 640Z" fill="#874FFF" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Figma</h4>
                                <p className="text-sm text-white/50">UI/UX Design & Prototyping</p>
                            </div>
                        </a>

                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer nofollow"
                            className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="mr-4" width="32" height="32" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_nextjs" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                                    <circle cx="90" cy="90" r="90" fill="black" />
                                </mask>
                                <g mask="url(#mask0_nextjs)">
                                    <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
                                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                        fill="url(#paint0_linear_nextjs)" />
                                    <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_nextjs)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_nextjs" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_nextjs" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <h4 className="font-medium">Next.js</h4>
                                <p className="text-sm text-white/50">Web development framework</p>
                            </div>
                        </a>


                        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer nofollow"
                            className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="mr-4" width="32" height="20" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#prefix__clip0)">
                                    <path fill="#14B4C6" fillRule="evenodd"
                                        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                                        clipRule="evenodd" />
                                </g>
                                <defs>
                                    <clipPath id="prefix__clip0">
                                        <path fill="#fff" d="M0 0h54v32.4H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div>
                                <h4 className="font-medium">Tailwind CSS</h4>
                                <p className="text-sm text-white/50">Utility-First CSS</p>
                            </div>
                        </a>

                        <a href="https://neon.tech/" target="_blank" rel="noopener noreferrer nofollow" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="mr-4" width="32" height="20" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47705 0 9.99976 0H47.9989C53.5216 0 57.9986 4.47715 57.9986 10V42.3189C57.9986 48.0326 50.7684 50.5124 47.2618 46.0014L36.2991 31.8988V49C36.2991 53.9706 32.2698 58 27.2993 58H9.99976C4.47705 58 0 53.5228 0 48V10ZM9.99976 8C8.89522 8 7.99981 8.89543 7.99981 10V48C7.99981 49.1046 8.89522 50 9.99976 50H27.5993C28.1516 50 28.2993 49.5523 28.2993 49V26.0673C28.2993 20.3536 35.5295 17.8738 39.0361 22.3848L49.9988 36.4874V10C49.9988 8.89543 50.1034 8 48.9988 8H9.99976Z" fill="#12FFF7" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47705 0 9.99976 0H47.9989C53.5216 0 57.9986 4.47715 57.9986 10V42.3189C57.9986 48.0326 50.7684 50.5124 47.2618 46.0014L36.2991 31.8988V49C36.2991 53.9706 32.2698 58 27.2993 58H9.99976C4.47705 58 0 53.5228 0 48V10ZM9.99976 8C8.89522 8 7.99981 8.89543 7.99981 10V48C7.99981 49.1046 8.89522 50 9.99976 50H27.5993C28.1516 50 28.2993 49.5523 28.2993 49V26.0673C28.2993 20.3536 35.5295 17.8738 39.0361 22.3848L49.9988 36.4874V10C49.9988 8.89543 50.1034 8 48.9988 8H9.99976Z" fill="url(#paint0_linear_10558_11777)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47705 0 9.99976 0H47.9989C53.5216 0 57.9986 4.47715 57.9986 10V42.3189C57.9986 48.0326 50.7684 50.5124 47.2618 46.0014L36.2991 31.8988V49C36.2991 53.9706 32.2698 58 27.2993 58H9.99976C4.47705 58 0 53.5228 0 48V10ZM9.99976 8C8.89522 8 7.99981 8.89543 7.99981 10V48C7.99981 49.1046 8.89522 50 9.99976 50H27.5993C28.1516 50 28.2993 49.5523 28.2993 49V26.0673C28.2993 20.3536 35.5295 17.8738 39.0361 22.3848L49.9988 36.4874V10C49.9988 8.89543 50.1034 8 48.9988 8H9.99976Z" fill="url(#paint1_linear_10558_11777)" />
                                <path d="M48.0003 0C53.523 0 58 4.47715 58 10V42.3189C58 48.0326 50.7699 50.5124 47.2633 46.0014L36.3006 31.8988V49C36.3006 53.9706 32.2712 58 27.3008 58C27.8531 58 28.3008 57.5523 28.3008 57V26.0673C28.3008 20.3536 35.5309 17.8738 39.0375 22.3848L50.0002 36.4874V2C50.0002 0.89543 49.1048 0 48.0003 0Z" fill="#B9FFB3" />
                                <defs>
                                    <linearGradient id="paint0_linear_10558_11777" x1="57.9986" y1="58" x2="6.99848" y2="0.00123034" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#B9FFB3" />
                                        <stop offset="1" stop-color="#B9FFB3" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_10558_11777" x1="57.9986" y1="58" x2="23.5492" y2="44.6006" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#1A1A1A" stop-opacity="0.9" />
                                        <stop offset="1" stop-color="#1A1A1A" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <h4 className="font-medium">Neon Postgres</h4>
                                <p className="text-sm text-white/50">Serverless SQL Database</p>
                            </div>
                        </a>


                        <a href="https://next-auth.js.org/" target="_blank" rel="noopener noreferrer nofollow" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="mr-4" width="32" height="28" viewBox="0 0 210 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M208.687 31.859L30.0947 167.73C8.16388 127.966 0.567559 79.9975 0 51.2275V33.6181C0 31.0567 2.7788 29.5628 4.16851 29.1356C33.5617 20.2778 93.2465 2.30524 96.8378 1.28069C100.429 0.256138 103.464 0 104.534 0H104.631C105.7 0 108.735 0.256138 112.327 1.28069C115.918 2.30524 175.603 20.2778 204.996 29.1356C206.03 29.4533 207.832 30.3613 208.687 31.859Z" fill="url(#paint0_linear_128_61)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.0938 167.952L208.686 32.0815C208.981 32.5983 209.164 33.1842 209.164 33.8406V51.45C208.202 100.223 187.038 204.172 110.081 229.786C109.013 230.213 106.49 231.067 104.951 231.067H104.212C102.673 231.067 100.150 230.213 99.0814 229.786C67.5193 219.281 45.3415 195.6 30.0938 167.952Z" fill="url(#paint1_linear_128_61)" />
                                <defs>
                                    <linearGradient id="paint0_linear_128_61" x1="104.582" y1="0" x2="104.582" y2="231.305" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7C3AED" />
                                        <stop offset="1" stop-color="#3B82F6" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_128_61" x1="104.582" y1="0" x2="104.582" y2="231.305" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7C3AED" />
                                        <stop offset="1" stop-color="#3B82F6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <h4 className="font-medium">NextAuth</h4>
                                <p className="text-sm text-white/50">Authentication Solution</p>
                            </div>
                        </a>

                        <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer nofollow"
                            className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="mr-4" width="32" height="32" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" fill="#635bff" d="M0 0h400v400H0z" />
                                <path d="M184.4 155.5c0-9.4 7.7-13.1 20.5-13.1 18.4 0 41.6 5.6 60 15.5v-56.8C244.8 93.1 225 90 205 90c-49.1 0-81.7 25.6-81.7 68.4 0 66.7 91.9 56.1 91.9 84.9 0 11.1-9.7 14.7-23.2 14.7-20.1 0-45.7-8.2-66-19.3v57.5c22.5 9.7 45.2 13.8 66 13.8 50.3 0 84.9-24.9 84.9-68.2-.4-72-92.5-59.2-92.5-86.3z" fillRule="evenodd" clipRule="evenodd" fill="#fff" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Stripe</h4>
                                <p className="text-sm text-white/50">Payment Processing</p>
                            </div>
                        </a>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer nofollow" className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <svg className="w-8 h-8 mr-4" viewBox="0 0 120 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M82.3229 28.5501C71.5367 15.7947 62.2485 2.84006 60.351 0.149477C60.1512 -0.0498257 59.8515 -0.0498257 59.6518 0.149477C57.7542 2.84006 48.4661 15.7947 37.6798 28.5501C-54.9019 146.238 52.2613 225.661 52.2613 225.661L53.1601 226.258C53.959 238.516 55.9565 256.154 55.9565 256.154H59.9514H63.9463C63.9463 256.154 65.9438 238.615 66.7428 226.258L67.6416 225.561C67.7414 225.561 174.905 146.238 82.3229 28.5501ZM59.9514 223.867C59.9514 223.867 55.1576 219.781 53.8592 217.688V217.489L59.6518 89.3375C59.6518 88.9389 60.2511 88.9389 60.2511 89.3375L66.0436 217.489V217.688C64.7453 219.781 59.9514 223.867 59.9514 223.867Z" fill="#00ED64" />
                            </svg>
                            <div>
                                <h4 className="font-medium">MongoDB</h4>
                                <p className="text-sm text-white/50">Versatile Database</p>
                            </div>
                        </a>
                        <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer nofollow"
                            className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <FaJava className="mr-4 w-8 h-8" style={{ color: '#f89820' }} />
                            <div>
                                <h4 className="font-medium">Java</h4>
                                <p className="text-sm text-white/50">OOP language</p>
                            </div>
                        </a>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer nofollow"
                            className="card flex items-center p-4 hover:border-white/30 transition-colors">
                            <FaPython className="mr-4 w-8 h-8" style={{ color: '#3776ab' }} />
                            <div>
                                <h4 className="font-medium">Python</h4>
                                <p className="text-sm text-white/50">Programming Language</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
