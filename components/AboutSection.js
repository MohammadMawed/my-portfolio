import React from 'react';
import SectionTitle from './SectionTitle';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="mb-20">
    {/* About Section */}
    <section id="about" className="mb-20">
      <SectionTitle icon={User} title="About Me" />
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <p className="text-gray-300 mb-4">
          I'm a computer science student at Saarland University, specializing in Data Science & AI.
          Expected to graduate in 2026, I focus on bridging the gap between tech and real-world applications.
        </p>
            <p className="text-gray-300 mb-4">
              My academic journey has equipped me with a strong foundation in machine learning, big data engineering, and software development.
              I'm particularly interested in leveraging AI and data science techniques to solve complex problems and enhance user experiences.
            </p>
            <p className="text-gray-300">
              Outside of my studies, I'm constantly working on personal projects and participating in hackathons to expand my skills
              and stay at the forefront of technological advancements. I'm excited about the potential of AI and data science to
              transform industries and improve lives, and I'm eager to contribute to this exciting field.
            </p>
          </div>
        </section>


    </section>
  );
};

export default AboutSection;
