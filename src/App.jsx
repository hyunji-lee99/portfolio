import "./App.css";
import styled from "styled-components";
import React, { useRef, useState } from "react";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Footer from "./pages/Footer";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MenuDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  padding-top: 2%;
  position: fixed;
  z-index: 3;
`;

const Menu = styled.span`
  -webkit-text-stroke: 1.5px #061d35;
  font-size: 2rem;
  font-family: edu;
  letter-spacing: 1px;
  color: transparent;
  z-index: 1;
  &:hover {
    color: #061d35;
  }
`;

const MenuActive = styled.span`
  -webkit-text-stroke: 1.5px #061d35;
  font-size: 2rem;
  font-family: edu;
  letter-spacing: 1px;
  color: #061d35;
  z-index: 1;
`;

function App() {
  const [cur, setCur] = useState({
    header: true,
    skill: false,
    project: false,
    footer: false,
  });

  const HomeRef = useRef(null);
  const SkillRef = useRef(null);
  const ProjectRef = useRef(null);
  const FooterRef = useRef(null);

  const onActive = (e) => {
    let arr = Array(4).fill(false);
    arr[e.target.id] = true;
    setCur(arr);
  };

  return (
    <Div>
      <MenuDiv>
        {cur["header"] ? (
          <MenuActive>&lt;HEADER /&gt;</MenuActive>
        ) : (
          <Menu
            id="header"
            onClick={(e) => {
              onActive(e);
              HomeRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            &lt;HEADER /&gt;
          </Menu>
        )}
        {cur["skill"] ? (
          <MenuActive>&lt;SKILL /&gt;</MenuActive>
        ) : (
          <Menu
            id="skill"
            onClick={(e) => {
              onActive(e);
              SkillRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            &lt;SKILL /&gt;
          </Menu>
        )}
        {cur["project"] ? (
          <MenuActive>&lt;PROJECT /&gt;</MenuActive>
        ) : (
          <Menu
            id="project"
            onClick={(e) => {
              onActive(e);
              ProjectRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            &lt;PROJECT /&gt;
          </Menu>
        )}
        {cur["footer"] ? (
          <MenuActive>&lt;FOOTER /&gt;</MenuActive>
        ) : (
          <Menu
            id="footer"
            onClick={(e) => {
              onActive(e);
              FooterRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            &lt;FOOTER /&gt;
          </Menu>
        )}
      </MenuDiv>
      <Home ref={HomeRef}></Home>
      <Skill ref={SkillRef}></Skill>
      <Project ref={ProjectRef}></Project>
      <Footer ref={FooterRef}></Footer>
    </Div>
  );
}

export default App;
