import React from 'react';
import { CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const programmingLanguages = [
    { name: 'C++', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'C', level: 'Basic' },
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'SQL', level: 'Basic' },
  ];

  const toolsAndTechnologies = [
    { name: 'PostgreSQL', level: 'Basic' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Tableau', level: 'Intermediate' },
    { name: 'Power BI', level: 'Intermediate' },
    { name: 'Jupyter Notebook', level: 'Intermediate' },
    { name: 'Anaconda', level: 'Intermediate' },
    { name: 'Google Colab', level: 'Intermediate' },
    { name: 'Postman', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Firebase', level: 'Intermediate' },
  ];

  const frameworksAndLibraries = [
    { name: 'React.js', level: 'Intermediate' },
    { name: 'Vue.js', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'FastAPI', level: 'Intermediate' },
    { name: 'Material UI', level: 'Basic' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'SASS', level: 'Intermediate' },
    { name: 'TensorFlow', level: 'Basic' },
    { name: 'Pandas', level: 'Intermediate' },
    { name: 'NumPy', level: 'Intermediate' },
  ];

  const SkillCard: React.FC<{ title: string; skills: Array<{name: string, level: string}> }> = ({ title, skills }) => (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
      <h3 className="text-xl font-semibold text-white mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
            <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-white font-medium">{skill.name}</h4>
              <p className="text-gray-400 text-sm">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold">Experience & Interests</h2>
        </div>

        <div className="space-y-8">
          {/* Programming Languages */}
          <SkillCard title="Programming Languages" skills={programmingLanguages} />

          {/* Tools & Technologies */}
          <SkillCard title="Tools & Technologies" skills={toolsAndTechnologies} />

          {/* Frameworks & Libraries */}
          <SkillCard title="Frameworks & Libraries" skills={frameworksAndLibraries} />
        </div>
      </div>
    </section>
  );
};

export default Experience;