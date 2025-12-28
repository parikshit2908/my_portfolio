import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import "./About.css";

const About = () => {
  return (
    <PageTransition>
      <section className="about section">
        <Reveal>
          <h1>About Me</h1>
          <p className="about-intro">
            I’m a final-semester B.Tech student and full-stack developer who
            focuses on building real, maintainable systems — not just interfaces.
          </p>
        </Reveal>

        <div className="about-cards">
          <Reveal delay={0.05}>
            <div className="about-card">
              <h3>How I Build</h3>
              <ul className="about-list">
                <li>I start by understanding the problem, not the UI.</li>
                <li>I design structure first, then refine visuals.</li>
                <li>I prefer simple, readable solutions over clever hacks.</li>
                <li>I care about performance, edge cases, and scalability.</li>
                <li>I build things I can confidently explain line by line.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="about-card">
              <h3>What I Work On</h3>
              <p>
                My work includes full-stack applications using React and
                Supabase, real-time collaboration systems with WebRTC, and
                production frontend rebuilds under real constraints.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="about-card">
              <h3>What I’m Looking For</h3>
              <p>
                I’m actively looking for entry-level software development roles
                where I can work on real products, learn from experienced
                engineers, and grow as a full-stack developer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
