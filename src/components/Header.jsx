import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: translateY(${props => props.hide ? '-100%' : '0'});
`;

const Nav = styled.nav`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '⚡';
    -webkit-text-fill-color: initial;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--background-dark);
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
`;

const MenuItem = styled.a`
  font-weight: 500;
  color: var(--text-color-secondary);
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--text-color);
    &:after {
      width: 100%;
    }
  }
`;

const ContactButton = styled.a`
  padding: 0.5rem 1rem;
  background: var(--accent-gradient);
  color: white;
  border-radius: 6px;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--primary-color);
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <HeaderContainer hide={hideHeader}>
      <Nav>
        <Logo href="#home">Alvin Gawai</Logo>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '×' : '☰'}
        </MenuButton>
        <MenuItems isOpen={isMenuOpen}>
          <MenuItem href="#about">About</MenuItem>
          <MenuItem href="#skills">Skills</MenuItem>
          <MenuItem href="#projects">Projects</MenuItem>
          <ContactButton href="#contact">Contact Me</ContactButton>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
