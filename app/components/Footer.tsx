import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/10">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <Link href="/" className="text-2xl font-bold">
                            <span className="text-white">FK</span>
                        </Link>
                        <p className="text-white/50 mt-2">Web application achitech & delivery</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:items-center">
                        <nav>
                            <ul className="flex gap-6">
                                <li>
                                    <Link href="#portfolio" className="text-white/70 hover:text-white transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/patiphak-klandee-425a7a195/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/FaroKlandee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5 text-center text-white/50 text-sm">
                    <p>© {currentYear} Faro Klandee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
