"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiTwitter } from "react-icons/fi";

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Error state
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Form submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    // Validate form
    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                // The form uses getform.io for submission
                const formDataToSend = new FormData();
                formDataToSend.append("name", formData.name);
                formDataToSend.append("email", formData.email);
                formDataToSend.append("message", formData.message);

                const response = await fetch("https://getform.io/f/bllywqlb", {
                    method: "POST",
                    body: formDataToSend
                });

                if (response.ok) {
                    setSubmitSuccess(true);
                    setFormData({
                        name: "",
                        email: "",
                        message: ""
                    });
                } else {
                    alert("Something went wrong. Please try again later.");
                }
            } catch (error) {
                alert("Something went wrong. Please try again later.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-24 relative" id="contact">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-6xl">✉️</span>
                    </div>
                    <h2 className="heading-lg mb-6">Got an idea? Share with me</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Ready for a design adventure, or need product design advice? Ping me for fun collaboration.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <div className="card p-8">
                            <h3 className="heading-md mb-6">Contact Info</h3>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <p className="text-white/50 text-sm uppercase mb-1">Email</p>
                                    <a href="mailto:patiphakklandee@gmail.com" className="text-lg hover:text-accent transition-colors">
                                        patiphakklandee@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-white/50 text-sm uppercase mb-1">Phone</p>
                                    <a href="tel:+61421959295" className="text-lg hover:text-accent transition-colors">
                                        +61 421 959 295
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="text-white/50 text-sm uppercase mb-4">Social</p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        <FiTwitter size={20} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/patiphak-klandee-425a7a195/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        <FaLinkedinIn size={20} />
                                    </a>
                                    <a
                                        href="mailto:patiphakklandee@gmail.com"
                                        className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        <FiMail size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <div className="card p-8">
                            <h3 className="heading-md mb-6">Drop a message</h3>

                            {submitSuccess ? (
                                <div className="bg-accent/10 p-6 rounded-lg text-white">
                                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                                    <p className="mb-4">Thank you for reaching out. I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setSubmitSuccess(false)}
                                        className="btn-primary"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                    <div>
                                        <label htmlFor="name" className="block text-white/70 mb-2">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`bg-black/30 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 w-full focus:outline-none focus:border-accent`}
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-white/70 mb-2">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`bg-black/30 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 w-full focus:outline-none focus:border-accent`}
                                            placeholder="Your email"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-white/70 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`bg-black/30 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 w-full focus:outline-none focus:border-accent`}
                                            placeholder="Your message"
                                            rows={5}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
