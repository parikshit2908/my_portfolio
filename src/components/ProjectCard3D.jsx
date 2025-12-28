import { motion } from "framer-motion";
import Motion3D from "./Motion3D";

const ProjectCard3D = ({ title, description, points, stack }) => {
  return (
    <Motion3D>
      <motion.div
        className="project-3d-card"
        initial={{ opacity: 0, y: 80, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2>{title}</h2>
        <p>{description}</p>

        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <span>{stack}</span>
      </motion.div>
    </Motion3D>
  );
};

export default ProjectCard3D;
