import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;


const Wrapper = styled.section`
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BgDots = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(232, 232, 240, 0.6) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.8;
  pointer-events: none;
`;

const BgGlow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.09) 0%, transparent 70%);
  top: -120px;
  right: -120px;
  pointer-events: none;
`;

const BgGlow2 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(108, 99, 255, 0.06) 0%, transparent 70%);
  bottom: -80px;
  left: -80px;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const Eyebrow = styled.span`
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text);
  margin: 0;
  line-height: 1.15;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, var(--accent), #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Divider = styled.div`
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #a78bfa);
  border-radius: 999px;
`;


const AboutWrapper = styled(Wrapper)`
  min-height: auto;

  @media (max-width: 900px) {
    padding: 100px 24px 40px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  animation: ${fadeUp} 0.8s ease both;
  max-width: 700px;
  margin: 0 auto;
`;

const AboutBio = styled.p`
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
`;


const SkillsWrapper = styled(Wrapper)`
  min-height: auto;
  padding: 60px 60px 120px;

  @media (max-width: 900px) {
    padding: 40px 24px 80px;
  }
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  animation: ${fadeUp} 0.8s 0.15s ease both;
`;

const SkillsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
`;

const SkillsSubtitle = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 900px;
`;

const SkillCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  box-shadow: var(--card-shadow);

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 8px 32px rgba(108, 99, 255, 0.12);
    transform: translateY(-4px);
  }
`;

const SkillIcon = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 48px;
    line-height: 1;
  }
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.3px;
`;


const SKILLS = [
  { name: "HTML5",       icon: "devicon-html5-plain colored" },
  { name: "CSS3",        icon: "devicon-css3-plain colored" },
  { name: "JavaScript",  icon: "devicon-javascript-plain colored" },
  { name: "TypeScript",  icon: "devicon-typescript-plain colored" },
  { name: "React",       icon: "devicon-react-original colored" },
  { name: "Tailwind",    icon: "devicon-tailwindcss-plain colored" },
  { name: "Git",         icon: "devicon-git-plain colored" },
  { name: "Node.js",     icon: "devicon-nodejs-plain colored" },
  { name: "Python",      icon: "devicon-python-plain colored" },
  { name: "Vite",        icon: "devicon-vitejs-plain colored" },
];

const About = () => {
  return (
    <>
      
      <AboutWrapper id="about">
        <BgDots />
        <BgGlow />
        <BgGlow2 />
        <Container>
          <AboutContent>
            <Eyebrow>About Me</Eyebrow>
            <Title>
              I'm a <Highlight>Software Developer</Highlight>
              <br />based in Harare, Zimbabwe
            </Title>
            <Divider />
            <AboutBio>
              I build modern digital products — from sleek frontends to functional backends.
              That dual focus sharpens how I think about systems, structure, and solving real problems.
            </AboutBio>
          </AboutContent>
        </Container>
      </AboutWrapper>

      
      <SkillsWrapper id="skills">
        <BgDots />
        <BgGlow />
        <BgGlow2 />
        <Container>
          <SkillsContent>
            <SkillsHeader>
              <Eyebrow>Skills</Eyebrow>
              <Title>Technologies I <Highlight>Work With</Highlight></Title>
              <SkillsSubtitle>Tools and languages I've mastered along the way</SkillsSubtitle>
            </SkillsHeader>

            <SkillsGrid>
              {SKILLS.map(({ name, icon }) => (
                <SkillCard key={name}>
                  <SkillIcon>
                    <i className={icon} />
                  </SkillIcon>
                  <SkillName>{name}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SkillsContent>
        </Container>
      </SkillsWrapper>
    </>
  );
};

export default About;