import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Web Application',
      description: '🚨This project is under development and will be available soon🚨',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      githubUrl: 'https://github.com/kamalcherala/',
      liveUrl: 'https://github.com/kamalcherala/',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI']
    },
    {
      id: 2,
      title: 'Full Stack Commany Standard Web Application(Beta)',
      description: 'Dealzy 2.0 is a full-stack B2B coupon rewards platform featuring a robust front-end and back-end architecture. It supports three distinct panels—Merchant, Client, and Consumer—to streamline digital loyalty and promotional engagement',
      image: 'https://dealzy.app/opengraph-image.png',
      githubUrl: 'https://github.com/kamalcherala/Rewards_Platform/',
      liveUrl: 'https://rewards-platform.vercel.app/',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express.js','Postman','CSS', 'HTML', 'JavaScript','Vercel','react']
    },
    {
      id: 3,
      title: 'My Current Portfolio',
description: "🔧 This Portfolio is a high-performance, animated, and interactive web application built with React, TypeScript, and Tailwind CSS. Powered by Vite for lightning-fast development and optimized builds, it features clean architecture, scalable styling, and modern tooling like ESLint, PostCSS, and Lucide Icons—all packed into a downloadable, responsive portfolio experience.",
image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400',
      githubUrl: 'https://github.com/',
      liveUrl: 'https://github.com/',
      technologies: ['D3.js', 'React', 'Python', 'Pandas']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Browse My Recent</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;