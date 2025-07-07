import React from 'react';
import myPhoto from '../assets/about-pic.png'; // adjust the path as needed
import { GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Get To Know More</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-3xl bg-gray-800 overflow-hidden">
                  <img 
                    src={myPhoto} 
                    alt="About Cherala Sai Kamal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Experience Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={24} className="text-blue-400" />
                  <h3 className="text-xl font-semibold">Intern</h3>
                </div>
                <p className="text-gray-300">
                  at Adonmo-Dealzy<br />
                  Full Stack Web Development
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={24} className="text-purple-400" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <p className="text-gray-300">
                  Undergraduation at VNRVJIET Major in EIE<br />
                   & Minor in AI & ML
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
Tech enthusiast with expertise in AI/ML, Python, C++, and full-stack development, along with broad exposure to hardware systems from an electronics background. I thrive at the intersection of innovation and practicality, delivering real-world solutions through intelligent system design. Always exploring new technologies, I’m actively seeking impactful opportunities where I can contribute my expertise and help shape future of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;