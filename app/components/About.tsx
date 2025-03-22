"use client";
import Image from "next/image";
import book from "../assets/book.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import pc from "../assets/pc.png";

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto" id="about">

            <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4">
                About <span className="text-orange-400">Me</span></h1>

            <div className="grid grid-cols-8 gap-6 place-items-center">

                <div className="w-full col-span-5 relative [bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={book} alt="book" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">Education</h2>
                            <p className="text-lg text-white/70 mt-2">I hold a Bachelor of Computer Science Degree and I am currently focusing on web application technologies like NextJS and Tailwind CSS</p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-3 relative [bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={finance} alt="finance" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">Problem-Solving</h2>
                            <p className="text-lg text-white/70 mt-2">I approach problems from a range of views, occupied with a logical mindset and a bit of creativity.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-3 relative [bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={card} alt="card" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">Experience</h2>
                            <p className="text-lg text-white/70 mt-2">I have have a diverse portfolio of projects.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-5 relative [bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden]">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={pc} alt="pc" className="w-auto h-[130px]" />
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80">Technical Skills</h2>
                            <p className="text-lg text-white/70 mt-2">I specialise in Java, Python, NextJS, Tailwind CSS</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About