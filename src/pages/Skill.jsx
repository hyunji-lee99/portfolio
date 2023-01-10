import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f4f4;
  position: relative;
  z-index: -4;
`;

const BlurDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: -3;
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
    transform:translate(30px,0px);
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
  animation: ${AnimePurple} 3s infinite;
`;

const SkillDiv = styled.div`
  width: 100%;
  color: #061d35;
  margin-top: 50px;
`;

const Vibration = keyframes`
  from{
    transform:rotate(2deg);
  }
  to{
    transform:rotate(-2deg);
  }
`;
const Skills = styled.div`
  width: 20%;
  z-index: 1000;
  height: 80px;
  overflow: scroll;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 10px 20px;
  font-family: edu;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  &:hover {
    animation: ${Vibration} 0.1s infinite;
  }
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

const SkillTitle = styled.span`
  font-size: 2rem;
`;

const ExplainLevelDiv = styled.div`
  width: 30%;
  padding-top: 8%;
  font-family: edu;
  color: #061d35;
  padding-left: 8%;
`;
function Skill(props, ref) {
  return (
    <Div {...props} ref={ref}>
      <BlurDiv>
        <BlurDivPink></BlurDivPink>
        <BlurDivBlue></BlurDivBlue>
        <BlurDivYellow></BlurDivYellow>
        <BlurDivPurple></BlurDivPurple>
      </BlurDiv>
      <ExplainLevelDiv>
        1️⃣ : 개념을 알고, 한 두번 사용해본 정도
        <br /> 2️⃣ : 적당한 구현이 가능한 정도 <br />
        3️⃣ : 능숙하게 사용할 수 있는 정도
      </ExplainLevelDiv>
      <SkillDiv>
        <SkillFlexThree>
          <Skills>
            <SkillTitle>React.js 3️⃣</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>HTML/CSS 3️⃣</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>TypeScript 1️⃣</SkillTitle>
          </Skills>
        </SkillFlexThree>
        <SkillFlexTwo>
          <Skills style={{ marginRight: "6%" }}>
            <SkillTitle>Django 3️⃣</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>Django Rest Framework 3️⃣</SkillTitle>
          </Skills>
        </SkillFlexTwo>
        <SkillFlexThree>
          <Skills>
            <SkillTitle>Python 3️⃣</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>JavaScript 3️⃣</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>C 2️⃣</SkillTitle>
          </Skills>
        </SkillFlexThree>
        <SkillFlexTwo>
          <Skills style={{ marginRight: "6%" }}>
            <SkillTitle>Sklearn 2️⃣</SkillTitle>
          </Skills>
          <Skills>
            <SkillTitle>Torch 2️⃣</SkillTitle>
          </Skills>
        </SkillFlexTwo>
      </SkillDiv>
    </Div>
  );
}

export default forwardRef(Skill);
