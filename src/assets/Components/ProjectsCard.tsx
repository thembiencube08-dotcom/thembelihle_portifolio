import styled from "styled-components";
import type { MouseEvent } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: var(--card-shadow);

  &:hover {
    transform: translateY(-8px);
    border-color: var(--border-strong);
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.12);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
`;

const Description = styled.p`
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tech = styled.span`
  background: var(--surface-strong);
  color: var(--text-muted);
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.25s ease;

  ${Card}:hover & {
    color: var(--text);
    background: var(--surface);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 4px;
`;

const DemoBtn = styled.a`
  flex: 1;
  text-decoration: none;
  padding: 11px 16px;
  background: var(--accent);
  color: #fff;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-align: center;
  transition: opacity 0.3s, transform 0.3s;
  box-shadow: 0 4px 12px rgba(26, 26, 110, 0.12);

  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
  }
`;

const GithubBtn = styled.a`
  flex: 1;
  text-decoration: none;
  padding: 11px 16px;
  background: var(--surface-strong);
  color: var(--text);
  border: 1.5px solid var(--border);
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-align: center;
  transition: border-color 0.3s, color 0.3s, transform 0.3s, background 0.3s;

  &:hover {
    border-color: var(--accent);
    color: var(--text);
    background: var(--surface);
    transform: translateY(-2px);
  }
`;

const DisabledBtn = styled.div`
  flex: 1;
  padding: 11px 16px;
  background: #cbd5e1;
  color: #6b7280;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-align: center;
  opacity: 0.8;
  cursor: not-allowed;
`;

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) => {
  const normalizedDemo = demo && demo !== "#" ? (demo.startsWith("http") ? demo : `https://${demo}`) : "";

  const handleDemoClick = (e: MouseEvent) => {
    if (!normalizedDemo) return;
    e.preventDefault();
    try {
      window.open(normalizedDemo, "_blank", "noopener,noreferrer");
    } catch (err) {
      window.location.href = normalizedDemo;
    }
  };

  return (
    <Card>
      <ImageWrapper>
        <ProjectImage src={image} alt={title} />
        <ImageOverlay />
      </ImageWrapper>

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <TechStack>
          {technologies.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
        </TechStack>

        <Buttons>
          {normalizedDemo ? (
            <DemoBtn
              href={normalizedDemo}
              onClick={handleDemoClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </DemoBtn>
          ) : (
            <DisabledBtn aria-hidden="true">Live Demo</DisabledBtn>
          )}

          <GithubBtn href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </GithubBtn>
        </Buttons>
      </Content>
    </Card>
  );
};

export default ProjectCard;