"use client"

import Image from "next/image";
import { useState } from "react";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    // Error state
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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

        // Validate first name
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        // Validate last name
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
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

        // Validate phone (optional but must be valid if provided)
        if (formData.phone.trim()) {
            const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
            if (!phoneRegex.test(formData.phone)) {
                newErrors.phone = "Please enter a valid phone number";
                isValid = false;
            }
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
                formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`);
                formDataToSend.append("email", formData.email);
                formDataToSend.append("phone", formData.phone);
                formDataToSend.append("message", formData.message);

                const response = await fetch("https://getform.io/f/bllywqlb", {
                    method: "POST",
                    body: formDataToSend
                });

                if (response.ok) {
                    setSubmitSuccess(true);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
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
    return (
        <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">
            <div className='flex justify-center items-center'>
                <ul className='space-y-4'>
                    <li className='flex items-center'>
                        <Image src={phone} alt="phone" className='h-[110px] w-auto mr-6' />
                        <p className='text-xl'>+61 421 959 295</p>
                    </li>
                    <li className='flex items-center'>
                        <Image src={mail} alt="mail" className='h-[110px] w-auto mr-6' />
                        <p className='text-xl'>patiphakklandee@gmail.com</p>
                    </li>
                </ul>
            </div>

            <div className='bg-white/10 p-6 rounded-xl max-w-[500px]'>
                <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let&apos;s connect</h2>
                <p className='text-white/70 mb-6'>Send me a message and let&apos;s schedule a call!</p>

                {submitSuccess ? (
                    <div className="bg-green-500/20 p-4 rounded-xl text-white">
                        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                        <p>Thank you for reaching out. I'll get back to you soon.</p>
                        <button
                            onClick={() => setSubmitSuccess(false)}
                            className="mt-4 bg-orange-700 text-white px-4 py-2 rounded-xl hover:bg-orange-500"
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form className='space-y-4' onSubmit={handleSubmit} noValidate>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 ${errors.firstName ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-orange-400'
                                        }`}
                                    placeholder='First Name'
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 ${errors.lastName ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-orange-400'
                                        }`}
                                    placeholder='Last Name'
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 ${errors.email ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-orange-400'
                                        }`}
                                    placeholder='Email'
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 ${errors.phone ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-orange-400'
                                        }`}
                                    placeholder='Phone (optional)'
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 ${errors.message ? 'border-2 border-red-500 focus:ring-red-500' : 'focus:ring-orange-400'
                                    }`}
                                placeholder='Message'
                                rows={4}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className='bg-orange-700 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl hover:bg-orange-500 disabled:bg-gray-500 disabled:cursor-not-allowed'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>

        </div>
    )
}

export default Contact
