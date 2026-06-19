import styled from "styled-components";
import { useTheme } from "../Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--header-bg);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease, border-color 0.3s ease;
`;

const Navbar = styled.nav`
  height: 86px;
  padding: 0 40px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Logo = styled.h1`
  margin: 0;
  color: var(--accent);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
  transition: color 0.3s ease;
`;

const NavlinksGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 16px;
  background: var(--nav-pill-bg);
  border: 1px solid var(--nav-pill-border);
  border-radius: 999px;

  @media (max-width: 768px) {
    gap: 12px;
    overflow-x: auto;
  }
`;

const Navlink = styled.a`
  color: var(--text);
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent);
    background: var(--accent-soft);
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  transition: transform 0.3s ease, opacity 0.3s ease, color 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    color: var(--accent);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Wrapper>
      <Navbar>
        <Logo>T.N</Logo>

        <NavlinksGroup>
          {["About", "Projects", "Contact"].map((item) => (
            <Navlink href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </Navlink>
          ))}
          <ThemeToggle
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </ThemeToggle>
        </NavlinksGroup>
      </Navbar>
    </Wrapper>
  );
};

export default Header;