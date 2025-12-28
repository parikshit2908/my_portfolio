import React from "react";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import "../Contact.css";

const Contact = () => {
  return (
    <PageTransition>
      <section className="contact">
        <div className="contact-left">
          <Reveal>
            <h1 className="contact-title">Contact</h1>
          </Reveal>

          <Reveal>
            <p className="contact-intro">
              I’m currently open to full-time software development roles and meaningful projects.
              If you’d like to discuss an opportunity, collaborate, or just have a technical
              conversation, feel free to reach out.
            </p>
          </Reveal>

          <Reveal>
            <a
              href="mailto:parikshit.ranka2908@gmail.com"
              className="contact-cta"
            >
              Let’s Work Together →
            </a>
          </Reveal>

          <div className="contact-cards">
            <Reveal>
              <a href="mailto:parikshit.ranka2908@gmail.com" className="contact-card">
                <h3>Email</h3>
                <p>parikshit.ranka2908@gmail.com</p>
              </a>
            </Reveal>

            <Reveal>
              <a
                href="https://github.com/parikshit2908"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <h3>GitHub</h3>
                <p>github.com/parikshit2908</p>
              </a>
            </Reveal>

            <Reveal>
              <a
                href="https://www.linkedin.com/in/parikshit-ranka"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/parikshit-ranka</p>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="contact-right">
          <div className="tech-orbit">
            React · Java · Firebase · Supabase · WebRTC
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
