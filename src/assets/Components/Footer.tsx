import styled from "styled-components";

const Wrapper = styled.footer`
  background: var(--surface);
  color: var(--text);
  padding: 60px 20px 30px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--text);
`;

const Tagline = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ColumnTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const NavLink = styled.a`
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;

  &:hover {
    color: var(--text);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  text-decoration: none;
  transition: background 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: var(--accent);
    color: #fff;
    transform: translateY(-3px);
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0;
`;

const BackToTop = styled.a`
  color: var(--text-muted);
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--text);
  }
`;

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Wrapper>
      <Container>
        <TopRow>
          
          <Brand>
            <Logo>Thembelihle N.</Logo>
            <Tagline>
              Crafting innovative software solutions across web, mobile, and
              desktop platforms. Always open to new opportunities.
            </Tagline>
            <SocialRow>
              
              <SocialIcon href="https://github.com" target="_blank" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </SocialIcon>
              
              <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
              
              <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </SocialIcon>
            </SocialRow>
          </Brand>

          
          <Column>
            <ColumnTitle>Quick Links</ColumnTitle>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Column>

          
          <Column>
            <ColumnTitle>Contact</ColumnTitle>
            <NavLink href="mailto:thembiencube@email.com">
              thembelihle@email.com
            </NavLink>
            <NavLink href="tel:+263000000000">+263 000 000 000</NavLink>
            <NavLink>Harare, Zimbabwe</NavLink>
          </Column>
        </TopRow>

        <BottomRow>
          <Copyright>
            © {new Date().getFullYear()} Thembelihle Ncube. All rights reserved.
          </Copyright>
          <BackToTop onClick={scrollToTop}>
            Back to top
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </BackToTop>
        </BottomRow>
      </Container>
    </Wrapper>
  );
};

export default Footer;