import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 13vh;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: black;
`;

//dfgdfdsfdg

const Logo = styled.h1`
  font-size: 35px;
  color: white;
  padding-left: 10px;
  display: inline-block;
  font-weight: 700;
  z-index: 150;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 320px) {
    font-size: 25px;
    padding-left: 0 px;
  }
  @media (max-width: 768px) {
    text-decoration: none;
    padding-left: 0px;
  }
  @media (max-width: 720px) {
    padding-left: 0px;
    font-size: 30px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  z-index: 100;
  li:nth-child(2) {
    margin: 0px 80px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  font-size: 20px;
`;

const LinkText = styled.span`
  color: white;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  z-index: 100;
  text-shadow: -0.25px -0.25px 0 rgba(0, 0, 0, 0.8),
    0.25px 0.25px rgba(0, 0, 0, 0.8);
  &:hover {
    color: rgb(231, 100, 174);
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 100;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: white;
  transition: width 0.4s ease-in-out;
  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "100vh" : 0)};
  width: 800px;
  background: black;
  transition: height 0.4s ease-in-out;
  position: fixed;
  z-index: 90;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
  li:nth-child(2) {
    margin: 60px 0px;
  }
`;

const Header = () => {
  const tothetop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const [toggle, toggleNav] = useState(false);

  return (
    <>
      <Nav>
        <HashLink to="#home">
          <Logo onClick={tothetop}>an</Logo>
        </HashLink>
        <Menu>
          <Item onClick={handleClick}>
            <a href="#about">
              <LinkText>About</LinkText>
            </a>
          </Item>
          <Item onClick={handleClick}>
            <HashLink to="#projects">
              <LinkText>Projects</LinkText>
            </HashLink>
          </Item>
          <Item onClick={handleClick}>
            <HashLink to="#contact">
              <LinkText>Contact</LinkText>
            </HashLink>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <HashLink to="#about">
              <LinkText style={{ fontSize: 30 }}>About</LinkText>
            </HashLink>
          </Item>
          <Item>
            <HashLink to="#projects">
              <LinkText style={{ fontSize: 30 }}>Projects</LinkText>
            </HashLink>
          </Item>
          <Item>
            <HashLink to="#contact">
              <LinkText style={{ fontSize: 30 }}>Contact</LinkText>
            </HashLink>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
