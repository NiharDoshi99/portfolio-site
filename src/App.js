import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Sun, Moon, Github, Linkedin } from "lucide-react";
import "./index.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const topRef = useRef(null);

  const roles = ["Full-Stack Engineer", "Backend Engineer", "AI Enthusiast"];

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Dark mode toggle + local storage persistence
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "#resume" }
  ];

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Skills grouped
  const skillSections = {
    "Core Languages": [
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Go", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "C/C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    "Web & Data Technologies": [
      { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    "Tools & Platforms": [
      { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Bash", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Gemini", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
      { name: "ChatGPT", img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      { name: "Cursor", img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png" },
      { name: "Ubuntu", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
    ],
  };

  return (
    <div
      className="font-sans bg-white dark:bg-gray-900 dark:text-white transition-colors duration-500"
      ref={topRef}
    >
      {/* Background Animation */}
      <Background darkMode={darkMode} />

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* <h1
            onClick={scrollToTop}
            className="text-2xl font-bold cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Nihar Doshi
          </h1> */}
          {/* <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-2xl font-bold cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Nihar Doshi
          </a> */}
          {/* <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Nihar Doshi
          </button> */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-2xl font-bold cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Nihar Doshi
          </a>

          <div className="flex gap-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // prevent default jump
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" }); // smooth scroll
                  }
                }}
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="https://github.com/NiharDoshi99" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 hover:text-gray-500 transition-colors" />
            </a>
            <a
              href="https://in.linkedin.com/in/nihar-doshi-15a8901a0"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            4+ years of experience building secure, scalable, and high-performing applications.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-20" id="about">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p>
          I’m a full-stack engineer with a strong backend focus, experienced in Python, Go, Node.js, React, and Next.js. 
          I enjoy solving complex technical challenges, optimizing systems for performance and compliance, 
          and bringing intelligence into enterprise products with LLMs and AI-driven workflows.
        </p>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20" id="experience">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Experience</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow">
              <h4 className="text-xl font-semibold">Software Engineer @ Deuex Solution Pvt Ltd</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">July 2022 - Present</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  Currently working on{" "}
                  <a
                    className="underline"
                    href="https://www.getjavelin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Javelin
                  </a>{" "}
                  – secure, scalable LLM access platform.
                </li>
                <li>Designed alert and auditing features to improve compliance and observability.</li>
                <li>Enhanced SDK with Pydantic validation for strong data handling.</li>
                <li>Led backend microservices using Golang, Kafka, and Redis.</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow">
              <h4 className="text-xl font-semibold">System Analyst @ National Stock Exchange</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">June 2021 - July 2022</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Optimized core trading systems by rewriting legacy C code to C++ and Python, improving speed by 15%.</li>
                <li>Implemented a load balancer to reduce broadcasting by 20%.</li>
                <li>Automated India-wide file transfer using Python SFTP protocol.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-20" id="projects">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow">
            <h4 className="text-xl font-semibold">Clapperly</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Built a property booking platform with features like recce booking, search/filter, and Razorpay integration.
              Optimized backend APIs using multithreading to reduce response times by 40%.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow">
            <h4 className="text-xl font-semibold">GiverBox</h4>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Developed a platform for Instagram creators to manage giveaways with rule checks, dashboards, and third-party coupon integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-20" id="skills">
        <h3 className="text-3xl font-bold mb-8">Skills</h3>
        {Object.entries(skillSections).map(([category, skills]) => (
          <div key={category} className="mb-10">
            <h4 className="text-xl font-semibold mb-4">{category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-md transition-shadow"
                >
                  <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-2" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-800 px-6 py-20 text-center" id="contact">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="mb-4">Let's collaborate on exciting projects or discuss opportunities.</p>
        <a
          href="mailto:nihardoshi22@gmail.com"
          className="px-6 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
        >
          Email Me
        </a>
      </section>

      {/* Resume Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center" id="resume">
        <h3 className="text-3xl font-bold mb-6">Resume</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Download my resume or view it directly in your browser.
        </p>

        <div className="flex justify-center gap-4">
          {/* View Resume Button */}
          <a
            href="/nihar_doshi_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-2xl shadow hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
          >
            View Resume
          </a>

          {/* Download Resume Button */}
          <a
            href="/nihar_doshi_resume.pdf"
            download="Nihar_Doshi_Resume.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>


      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm">© {new Date().getFullYear()} Nihar Doshi. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Background({ darkMode }) {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-dark"
            : "bg-gradient-to-br from-blue-100 via-pink-100 to-purple-200 animate-gradient-light"
        }`}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              darkMode ? "bg-gray-500" : "bg-gray-300"
            } animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}