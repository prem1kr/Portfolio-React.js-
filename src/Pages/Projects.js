import React from 'react';
import './style.css';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

import img1 from '../Pages/img/img1.png';
import img2 from '../Pages/img/img2.png';
import img4 from '../Pages/img/img4.png';
import img5 from '../Pages/img/img5.png';

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">Recent <span>Projects</span></h1>
        </div>
        <div className="all-projects">
          <div className="project-item">
            <div className="project-info">
              <h1>Project 1
                <a href="https://github.com/prem1kr/Ecommerce-Admin-and-Cashier-Dashboard-page.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red" /> </a>
              </h1>
              <h2>WhatsApp Clone (React Native)</h2>
              <p>A full-stack WhatsApp-like messaging application that enables seamless real-time communication between users.
                It supports one-to-one chats, dynamic group conversations, and instant message delivery using Socket.IO.
                The frontend is built with React Native (Expo), providing a smooth and responsive cross-platform mobile experience.
                The backend is powered by Node.js and Express, ensuring scalable APIs and efficient server-side handling.
                Media sharing features allow users to send images and files, creating a complete and interactive messaging platform..</p>
            </div>
            <div className="project-img">
              <img src={img1} alt="img" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h1>
                Project 2
                <a
                  href="https://github.com/prem1kr/Full-Stack-Ai-integrated-Chat-Support-web-App.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red" />
                </a>
              </h1>
              <h2>AI intergrate chat support (MERN STACK)</h2>
              <p>AI Customer Support Chat Platform is a modern, intelligent helpdesk solution built using the MERN stack and powered by Google’s Gemini API, It enables businesses to offer fast, accurate, and human-like responses to customer queries in real time, The platform features a clean, responsive chat interface where users can interact seamlessly across desktop and mobile devices, An integrated admin dashboard allows support teams to monitor active conversations, manage users, and fine-tune AI behavior Conversations are stored securely in MongoDB, enabling analytics, history tracking, and follow-up actions Built with Expressjs and Nodejs on the backend.</p>
            </div>
            <div className="project-img">
              <img src={img2} alt="img" />

            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h1>Project 3
                <a href="https://github.com/prem1kr/Finance-Tracker-NextJS.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red" /> </a>

              </h1>
              <h2>Personal Finance Manager (Next.js + MongoDB) </h2>
              <p>This Personal Finance Manager is a full‑stack web app built with Next.js (App Router + API routes) and MongoDB for reliable, scalable data storage.
                It lets users securely track income, expenses, and overall transactions with authentication to protect personal financial data.
                The app supports Google login for faster onboarding and a smoother sign‑in experience.
                Users can personalize their profile using avatar upload, making the dashboard feel more tailored and engaging.​</p>
            </div>
            <div className="project-img">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fuserupload%2F10286722%2Ffile%2Foriginal-7962a56b257ac246285fdf37eb87c582.jpg%3Fcrop%3D0x0-2880x2160%26resize%3D1600x1200&f=1&nofb=1&ipt=95f043cd4d8c5c7c050f3c15da8ba2ee46eb912a4471d63dbb082155abff4bb0" alt="img" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h1>Project 4
                <a href="https://github.com/prem1kr/CyberSecurity-Web-Application.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red" /> </a>

              </h1>
              <h2>Cybersecurity Company Website (MERN STACK)</h2>
              <p>Cyber0Web is a professionally designed and fully responsive React-based website UI created for a cybersecurity company.
                It features a modern, clean, and visually appealing layout tailored to reflect security and trust.
                The design highlights cybersecurity services, solutions, and company expertise in a structured format.
                It includes well-organized sections such as hero banners, service showcases, about, and contact areas.
                The interface is optimized for seamless performance across desktop, tablet, and mobile devices.
                Built with React.js, it ensures smooth navigation and dynamic user interaction.
                The UI follows modern design principles with proper spacing, typography, and color consistency.
                Interactive components enhance user engagement and overall browsing experience.
                The layout is structured to support lead generation and strong brand presentation.
              </p>
            </div>
            <div className="project-img">
              <img src={img4} alt="img" />
            </div>
          </div>

          <div className="project-item">
            <div className="project-info">
              <h1>Project 5
                <a href="https://github.com/prem1kr/Full-Stack-Chat-and-Video-Chat-application-.git" target="_blank" rel="noopener noreferrer" > <FaGithub size={24} color="red" /> </a>

              </h1>
              <h2>Text Chat App and Video Chat app (MERN STACK)</h2>
              <p>Text Chat App and Video Chat App built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) enables real-time communication. It includes features like instant messaging, group chats, video calls, typing indicators, online status, and media sharing. Technologies used include WebSockets (Socket.io) for real-time updates, WebRTC for video calls, JWT authentication for security, and MongoDB for efficient data storage. The UI is built with React.js and Tailwind CSS, ensuring a responsive and interactive experience. The backend, powered by Node.js and Express.js, manages authentication, chat history, and real-time interactions seamlessly.</p>
            </div>
            <div className="project-img">
              <img src={img5} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
