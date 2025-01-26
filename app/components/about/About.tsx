import React from 'react';
import Image from 'next/image';
import { Code, Linkedin, Mail, Github, Briefcase } from 'lucide-react';
import Link from "next/link";

const About: React.FC = () => {
    const skills = [
        'React', 'Next.js', 'Tailwind CSS',
        'TypeScript', 'JavaScript', 'Frontend Development'
    ];

    const experiences = [
        {
            title: 'ALX Software Engineering Student',
            period: '2023 - Present',
            description: 'Intensive software engineering program focusing on full-stack development and modern web technologies.'
        },
        {
            title: 'Freelance Frontend Developer',
            period: '2022 - Present',
            description: 'Developing responsive and performant web applications for various clients.'
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-4">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center mb-16 bg-gray-800 rounded-2xl p-8 shadow-2xl">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-12">
                        <Image
                            src="/images/IMG_0801-EDIT.jpg"
                            alt="Profile Picture"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-2 text-blue-400">Emanuele Merveille</h1>
                        <p className="text-xl text-gray-300">ALX Software Engineer | Frontend Developer</p>
                        <div className="flex space-x-4 mt-4">
                            <Link href="/pages/contact" className="text-blue-500 hover:text-blue-300">
                                <Mail className="inline mr-2" />Contact Me
                            </Link>
                            <Link href="https://linkedin.com/in/emanueleemerveille" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
                                <Linkedin className="inline mr-2" />LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Skills and Experience */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Skills Section */}
                    <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-400">
                            <Code className="mr-3" /> Technical Skills
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-400">
                            <Briefcase className="mr-3" /> Professional Experience
                        </h2>
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-6 border-l-4 border-blue-500 pl-4">
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <p className="text-gray-400 mb-2">{exp.period}</p>
                                <p className="text-gray-300">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Me Section */}
                <div className="bg-gray-800 rounded-2xl p-8 shadow-xl mt-8">
                    <h2 className="text-2xl font-bold mb-6 text-blue-400">About Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Passionate software engineer with a strong focus on frontend development.
                        I create responsive, efficient, and user-friendly web applications using cutting-edge technologies.
                        Committed to continuous learning and solving complex problems through innovative solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;