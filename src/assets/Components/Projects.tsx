import styled, { keyframes } from "styled-components";
import ProjectCard from "./ProjectsCard";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;


const Wrapper = styled.section`
  padding: 100px 60px;
  background: var(--bg);
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 80px 24px;
  }
`;

const BgDots = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(232, 232, 240, 0.6) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.35;
  pointer-events: none;
`;

const BgGlow = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(26, 26, 110, 0.08) 0%, transparent 70%);
  bottom: -120px;
  left: -120px;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeUp} 0.8s ease both;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  display: block;
  margin-bottom: 14px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text);
  margin: 0 0 16px;
`;

const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 1rem;
  max-width: 640px;
  margin: 0 auto 36px;
  line-height: 1.75;
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #1a1a6e, #6c63ff);
  border-radius: 2px;
  margin: 0 auto;
`;



const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  animation: ${fadeUp} 0.8s 0.2s ease both;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


const projects = [
  {
    id: 1,
    image: "/images/dash.png",
    title: "Software Student Dashboard",
    description: "A comprehensive dashboard for managing student activities and performance.",
    technologies: ["Html", "CSS", "JavaScript"],
    github: "https://thembiencube08-dotcom.github.io/student-dashboard",
    demo: "#",
    category: "Web",
  },
  {
    id: 2,
    image: "/images/project-dwello.png",
    title: "Dwello Real Estate",
    description: "Modern real estate listing platform with advanced house search and interactive map.",
    technologies: ["JavaScript", "Html", "CSS" ],
    github: "https://thembiencube08-dotcom.github.io/Real-Estate",
    demo: "#",
    category: "Web",
  },
  {
    id: 3,
    image: "/images/project-furniro.png",
    title: "Furniro Furniture",
    description: "E-commerce store for modern furniture, showcasing a wide range of stylish and functional pieces.",
    technologies: ["Html", "CSS", "JavaScript"],
    github: "https://github.com/thembiencube08",
    demo: "#",
    category: "Web",
  },
  {
    id: 4,
    image: "/images/Screenshot 2026-04-09 120757.png",
    title: "Weather App",
    description: "Real-time weather forecast application, shocasing current conditions.",
    technologies: ["Html", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    category: "Mobile",
  },
  {
    id: 5,
    image: "/images/Screenshot 2026-06-10 101748.png",
    title: "Portifolio Website",
    description: "Personal portfolio website to showcase my work and skills.",
    technologies: ["Html", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    category: "Web",
  },
  {
    id: 6,
    image: "/images/Design Taska Mobile App Flow.png",
    title: "Aqua Rho App",
    description: "Emergency water supply and delivery application.",
    technologies: ["figma design", "prototyping"],
    github: "https://www.figma.com/make/9l0WEf8TYziux4XmeYT7Ut/Design-Taska-Mobile-App-Flow?t=bMOEPc3VGRILJVyU-1&preview-route=%2Frole",
    demo: "#",
    category: "Web",
  },
];




export const ProjectsSection = () => {

  return (
    <Wrapper id="projects">
      <BgDots />
      <BgGlow />
      <Container>
        <Heading>
          <Eyebrow>My Work</Eyebrow>
          <Title>Featured Projects</Title>
          <Subtitle>
            Selected work that reflects my current skillset and passion for
            building great products.
          </Subtitle>
          <Divider />
        </Heading>

        

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </ProjectsGrid>
      </Container>
    </Wrapper>
  );
};

export default ProjectsSection;