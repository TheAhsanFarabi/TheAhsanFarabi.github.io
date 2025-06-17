import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const awards = [
  {
    title: "1st Runner Up – DBMS Poster, Fall 23",
    image: "/images/award1.jpeg",
  },
  {
    title: "2nd Runner Up – Advanced OOP, Fall 24",
    image: "/images/award2.jpeg",
  },
  {
    title: "4th Runner Up – DBMS Project, Fall 23",
    image: "/images/award3.jpeg",
  },
];

const certifications = [
  {
    title: "Machine Learning Specialization – Stanford",
    image: "/images/certificate1.pdf",
  },
  {
    title: "Git & GitHub – Google",
    image: "/images/certificate2.pdf",
  },
  {
    title: "System Analysis and Design Runner Up",
    image: "/images/certificate3.pdf",
  },
  {
    title: "Academic Scholarship Certificate",
    image: "/images/certificate4.pdf",
  },
];

const projects = [
  {
    title: "Emotion Recognition System",
    description:
      "A deep learning project for real-time facial emotion detection using webcam + CNN.",
    image: "/images/emotion-recognition.png",
    link: "https://github.com/TheAhsanFarabi/Emotion-Recognition-System",
  },
  {
    title: "Cyber Bully Detection System",
    description:
      "Classifies toxic comments using NLP & synthetic data augmentation with LLMs.",
    image: "/images/cyber-bully.png",
    link: "https://github.com/TheAhsanFarabi/Cyber-Bully-Detection-System",
  },
  {
    title: "Network Intrusion Detection System",
    description:
      "Ensemble learning for detecting network intrusions with 99% accuracy on NSL-KDD dataset.",
    image: "/images/nids.png",
    link: "https://github.com/TheAhsanFarabi/Network-Intrusion-Detection-System",
  },
  {
    title: "Unisales – B2B Marketplace",
    description:
      "A PHP + JS platform connecting farmers & companies. Includes bidding and logistics modules.",
    image: "/images/unisales.png",
    link: "https://github.com/TheAhsanFarabi/unisales",
  },
  {
    title: "Blogpotro – AI Social Media",
    description:
      "A Laravel + Tailwind AI-enhanced blogging platform with monetization & version control.",
    image: "/images/blogpotro.png",
    link: "https://thefinancialexpress.com.bd/sci-tech/bangladeshi-website-blogpotro-promises-productivity-with-joy-1667038097",
  },
  {
    title: "UIU Platformer Game",
    description:
      "JavaFX-based educational game to help new students explore university life interactively.",
    image: "/images/platformer.png",
    link: "https://github.com/TheAhsanFarabi/University-Platformer-Game",
  },
];
const App = () => {
  const [modalImage, setModalImage] = useState(null);
  return (
    <div className="bg-[#0a192f] text-white min-h-screen font-sans">
      {/* Email (Right side vertical) */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 rotate-90 origin-right text-sm tracking-widest">
        afarabi221266@bscse.uiu.ac.bd
      </div>

      {/* Social Links (Left side vertical) */}
      <div className="fixed left-10 top-1/2 transform -translate-y-1/2 space-y-20">
        <a href="https://github.com/TheAhsanFarabi" className="block rotate-90 origin-left">GitHub</a>
        <a href="https://www.linkedin.com/in/ahsanfarabi/" className="block rotate-90 origin-left">LinkedIn</a>
        <a href="https://leetcode.com/u/AhsanFarabi/" className="block rotate-90 origin-left">Leetcode</a>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-20 space-y-24">
        {/* Hero Section */}
        <section id="hero">
          <p className="text-teal-400">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold">Ahsan Farabi.</h1>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-400">I love computer vision</h2>
          <p className="mt-4 max-w-xl text-gray-300">
            I'm a full-stack developer passionate about NLP and creating innovative web experiences. Currently exploring research and building impactful projects.
          </p>
          <a href="/Ahsan_Farabi_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 px-6 py-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] transition rounded">
            Download Resume
          </a>
        </section>

        {/* About Section */}
        <section id="about">
          <h3 className="text-teal-400 text-lg font-medium">01. About Me</h3>
          <p className="mt-4 text-gray-300">
            I’m Ahsan, currently studying CSE at UIU. I enjoy creating things that live on the internet.
            I’m particularly interested in NLP and web development.
          </p>
          <p className="mt-2 text-gray-300">Here are a few technologies I've been working with:</p>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-gray-400">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Laravel</li>
            <li>Python</li>
            <li>Tailwind</li>
            <li>Node.js</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h3 className="text-teal-400 text-lg font-medium">02. Work Experience</h3>
          <ul className="mt-4 text-gray-300">
            <li>
              <strong>Undergraduate Teaching Assistant</strong> @ UIU (2024 – Present)
              <p className="text-gray-400 text-sm">Graded assignments, helped with lab sessions and supported students before exams.</p>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h3 className="text-teal-400 text-lg font-medium">03. Projects</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h4 className="text-xl font-semibold mt-4 text-teal-400">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-sm text-teal-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for enlarged award image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✕
            </button>
            <img src={modalImage} alt="Award" className="max-w-full max-h-screen rounded" />
          </div>
        </div>
      )}

{/* Awards Section */}
        <section id="awards">
          <h3 className="text-teal-400 text-lg font-medium mb-4">04. Awards</h3>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            className="mt-6"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-[#112240] rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => setModalImage(award.image)}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center text-sm text-gray-300">
                    {award.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <h3 className="text-teal-400 text-lg font-medium mb-4">05. Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#112240] p-4 rounded-lg shadow">
                <h4 className="text-teal-400 text-md font-semibold mb-2">
                  {cert.title}
                </h4>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 underline hover:text-teal-400"
                >
                  View Certificate (PDF)
                </a>
              </div>
            ))}
          </div>
        </section>


        {/* Blogs Section */}
        <section id="blogs">
          <h3 className="text-teal-400 text-lg font-medium">05. Blogs</h3>
          <p className="mt-2 text-gray-400">Coming soon...</p>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h3 className="text-teal-400 text-lg font-medium">06. Contact Me</h3>
          <p className="text-gray-300 mt-2">Let's connect! Feel free to reach out via LinkedIn or email.</p>
        </section>
      </div>
    </div>
  );
};

export default App;