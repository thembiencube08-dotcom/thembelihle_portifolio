import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const Wrapper = styled.section`
  height: 100vh;
  background: radial-gradient(circle at top left, rgba(26, 26, 110, 0.08), transparent 28%),
    linear-gradient(180deg, var(--bg) 0%, var(--bg) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 0 24px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeUp} 0.9s ease both;
`;

const HelloText = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.24em;
`;

const NameText = styled.h1`
  font-size: clamp(2.4rem, 6vw, 4.4rem);
  font-weight: 800;
  color: var(--text);
  margin: 0;
  line-height: 1.05;
`;

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 2.2rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const RoleText = styled.span`
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 600;
  color: var(--text);
  line-height: 1.2;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: clamp(1.2rem, 2.2vw, 1.7rem);
  background: var(--text);
  animation: ${blink} 1s step-end infinite;
  vertical-align: middle;
  border-radius: 2px;
`;

const Bio = styled.p`
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 520px;
  margin: 0;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const IconButton = styled.a`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--surface);
  color: var(--text);
  border: 1.5px solid var(--border-strong);
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, color 0.3s;

  &:hover {
    background: var(--accent);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const PrimaryBtn = styled.a`
  padding: 16px 42px;
  background: var(--accent);
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: var(--shadow);

  &:hover {
    background: #6c4cec;
    transform: translateY(-2px);
  }
`;

const OutlineBtn = styled.a`
  padding: 16px 40px;
  background: var(--surface);
  color: var(--text);
  border: 1.5px solid var(--border-strong);
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.3s, transform 0.3s, color 0.3s, background 0.3s;

  &:hover {
    border-color: var(--accent);
    background: var(--surface);
    transform: translateY(-2px);
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeUp} 0.9s 0.2s ease both;

  @media (max-width: 900px) {
    order: -1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 420px;
  height: 520px;
  overflow: hidden;
  background: none;
  border-radius: 220px 220px 160px 160px;

  
  -webkit-mask-image: radial-gradient(
    ellipse 82% 88% at 50% 46%,
    black 50%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 82% 88% at 50% 46%,
    black 50%,
    transparent 100%
  );

  @media (max-width: 900px) {
    margin: 0 auto;
    width: 280px;
    height: 340px;
  }

  @media (max-width: 600px) {
    width: 240px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.4s ease;
    
    filter: saturate(0.85) contrast(1.04);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: color-mix(in srgb, var(--accent, #7c5ce8) 12%, transparent);
    pointer-events: none;
    mix-blend-mode: color;
    border-radius: inherit;
  }
`;

const ROLES = [
  "Software Developer",
  "Backend Developer",
  "Frontend Developer",
  
];

const useTyping = (words: string[], speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
};

const Hero = () => {
  const role = useTyping(ROLES);

  return (
    <Wrapper>
      <Container>
        <Left>
          <div>
            <HelloText>Hello, I'm</HelloText>
            <NameText>Thembelihle</NameText>
            <RoleRow>
              <RoleText>{role}</RoleText>
              <Cursor />
            </RoleRow>
          </div>

          <Bio>
            
          I'm a Full-Stack Developer focused on creating responsive frontends and reliable backend solutions.
          </Bio>

          <ButtonGroup>
            <PrimaryBtn href="mailto:thembiencube08@gmail.com">
              Hire Me
            </PrimaryBtn>
            <OutlineBtn href="/images/Thembelihle_Ncube_CV.pdf" download>
              Download CV
            </OutlineBtn>
            <IconButton
              href="https://github.com/thembiencube08-dotcom"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </IconButton>
          </ButtonGroup>
        </Left>

        <Right>
          <ImageWrapper>
            <img src="./images/Frame 17.png" alt="Thembelihle" />
          </ImageWrapper>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Hero;