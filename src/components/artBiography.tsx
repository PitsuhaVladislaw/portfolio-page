import React from "react";

type ArtBlock = {
    title: string;
    text1: string;
    text2: string;
};

const arrayArtBlock: ArtBlock[] = [
    {
        title: "Personal Information",
        text1: "My name is Vladislav, and I'm a web developer with over 6 months of experience. I specialize in creating modern web applications using React, Next.js, and TypeScript. My journey in development began with a fascination for technology and a desire to create something useful for people. Growing up in a small town, I was always curious about how websites and applications worked, which led me to pursue a career in web development.",
        text2: "I'm passionate about creating user-friendly interfaces and optimizing web application performance. My approach to work is based on the principles of clean code, responsive design, and attention to detail. I constantly study new tools and techniques to improve the quality of my work. This dedication has allowed me to quickly adapt to new technologies and contribute effectively to various projects, from small business websites to complex web applications."
    },
    {
        title: "Professional Goals",
        text1: "My main professional goal is to become a senior full-stack developer within the next five years. To achieve this, I'm focusing on deepening my knowledge of backend technologies such as Node.js and Express, as well as expanding my expertise in cloud services like AWS and Azure. I believe that a comprehensive understanding of both frontend and backend technologies is crucial for creating efficient, scalable web solutions.",
        text2: "I'm also keen on mastering advanced React patterns and state management techniques. Currently, I'm working on improving my skills in Redux and exploring the potential of GraphQL for more efficient data handling. Additionally, I'm learning about DevOps practices and CI/CD pipelines to ensure smooth deployment and maintenance of web applications."
    }
];

const ArtBiography = () => {
    return(
        <article className="flex justify-between relative h-96 overflow-hidden w-full gap-10">
            {arrayArtBlock.map((obj, index) => (
                <div
                    key={index}
                    className="flex flex-col items-start justify-center w-full bg-gray-700 p-5 rounded-md shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {obj.title}
                    </h3>
                    {[obj.text1, obj.text2].map((text, textIndex) => (
                        <React.Fragment key={textIndex}>
                            {textIndex > 0 && <br />}
                            <p className="text-white">
                                {text}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </article>
    )
}

export default ArtBiography;