import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f4f4;
  position: relative;
  z-index: -3;
`;

const BlurDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: absolute;
`;

const AnimePink = keyframes`
  0%{
    transform:translate(-30px,0);
  }
  50%{
    transform:translate(30px,100px);
  }
  100%{
    transform:translate(-30px,0);
  }
`;

const AnimeBlue = keyframes`
  0%{
    transform:translate(0,30px);
  }
  50%{
    transform:translate(350px,0px);
  }
  100%{
    transform:translate(0,30px);
  }
`;

const AnimeYellow = keyframes`
  0%{
    transform:translate(0,0);
  }
  50%{
    transform:translate(-300px,100px);
  }
  100%{
    transform:translate(0,0);
  }
`;

const AnimePurple = keyframes`
0%{
  transform:translate(0,30px);
}
50%{
  transform:translate(350px,0px);
}
100%{
  transform:translate(0,30px);
}
`;
const BlurDivPink = styled.div`
  width: 30%;
  height: 50%;
  position: absolute;
  z-index: -1;
  background-color: #edbabb;
  border-radius: 50%;
  filter: blur(50px);
  animation: ${AnimePink} 3s infinite;
`;

const BlurDivBlue = styled.div`
  width: 30%;
  height: 50%;
  position: absolute;
  z-index: -2;
  top: 40%;
  right: 15%;
  background-color: #caecf6;
  border-radius: 50%;
  filter: blur(50px);
  animation: ${AnimeBlue} 3s infinite;
`;

const BlurDivYellow = styled.div`
  width: 30%;
  height: 40%;
  position: absolute;
  z-index: -2;
  left: 20%;
  background-color: #e9cfa7;
  border-radius: 50%;
  filter: blur(50px);
  animation: ${AnimeYellow} 3s infinite;
`;

const BlurDivPurple = styled.div`
  width: 30%;
  height: 50%;
  position: absolute;
  z-index: -2;
  top: 40%;
  left: 10%;
  background-color: #c2b9d8;
  border-radius: 50%;
  filter: blur(50px);
  animation: ${AnimeBlue} 3s infinite;
`;

const SkillDiv = styled.div`
  width: 100%;
  padding-top: 110px;
  color: #061d35;
`;

const Skills = styled.div`
  width: 20%;
  height: 80px;
  overflow: scroll;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 10px 20px;
  text-align: center;
  font-family: edu;
  letter-spacing: 1px;
`;

const SkillFlexThree = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;
const SkillFlexTwo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SkillTitle = styled.p`
  font-size: 1.5rem;
`;

const SkillDetail = styled.p``;

function Skill(props, ref) {
  return (
    <Div {...props} ref={ref}>
      <BlurDiv>
        <BlurDivPink></BlurDivPink>
        <BlurDivBlue></BlurDivBlue>
        <BlurDivYellow></BlurDivYellow>
        <BlurDivPurple></BlurDivPurple>
      </BlurDiv>
      <SkillDiv>
        <SkillFlexThree>
          <Skills>
            <SkillTitle>React.js</SkillTitle>
            <SkillDetail></SkillDetail>
          </Skills>
          <Skills>
            <SkillTitle>HTML/CSS</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>TypeScript</SkillTitle>
          </Skills>
        </SkillFlexThree>
        <SkillFlexTwo>
          <Skills style={{ marginRight: "6%" }}>
            <SkillTitle>Django</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>Django Rest Framework</SkillTitle>
          </Skills>
        </SkillFlexTwo>
        <SkillFlexThree>
          <Skills>
            <SkillTitle>Python</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>JavaScript</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>C</SkillTitle>
          </Skills>
        </SkillFlexThree>
        <SkillFlexTwo>
          <Skills style={{ marginRight: "6%" }}>
            <SkillTitle>Sklearn</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>Torch</SkillTitle>
          </Skills>
        </SkillFlexTwo>
      </SkillDiv>
    </Div>
  );
}

export default forwardRef(Skill);
