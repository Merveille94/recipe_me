import React from 'react';
import Image from 'next/image';
import { Code, Mail, Phone, Github } from 'lucide-react';

const Contact = () => {
    const skills = [
        "React", "Next.js", "Tailwind CSS",
        "JavaScript", "TypeScript", "Frontend Development"
    ];

    const socialLinks = [
        {
            icon: Mail,
            text: "emanueleguehi@gmail.com",
            link: "mailto:emanueleguehi@gmail.com"
        },
        {
            icon: Phone,
            text: "(+233) 050-323-5762",
            link: "tel:+233503235762"
        },
        {
            icon: Github,
            text: "GitHub Profile",
            link: "https://github.com/Merveille94"
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* Profile Header */}
                <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden mb-12">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-12 text-center">
                        <div className="relative w-48 h-48 mx-auto mb-6 rounded-full border-4 border-white overflow-hidden">
                            <Image
                                src="/images/IMG_0801-EDIT.jpg"
                                alt="Emanuel Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h1 className="text-4xl font-bold mb-2">Emanuele Merveille</h1>
                        <p className="text-xl text-gray-200">ALX Software Engineer | Frontend Developer | Merveille94 - repo</p>
                    </div>

                    {/* About Section */}
                    <div className="p-8 text-center">
                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Passionate ALX Software Engineering graduate specializing in frontend development.
                            Experienced in creating responsive, performant web applications using modern
                            technologies like React, Next.js, and Tailwind CSS.
                        </p>
                    </div>
                </div>


                {/* Skills & Contact */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Skills Section */}
                    <div className="bg-gray-800 shadow-2xl rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
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

                    {/* Contact Section */}
                    <div className="bg-gray-800 shadow-2xl rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">Contact Me</h2>
                        <div className="space-y-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <link.icon className="mr-3" />
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;