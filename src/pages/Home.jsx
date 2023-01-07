import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import TypeIt from "typeit-react";
import Profile from "../img/profile_emoji.PNG";

const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f5f4f4;
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
    transform:translate(20px,0);
  }
  50%{
    transform:translate(0,50px);
  }
  100%{
    transform:translate(20px,0);
  }
`;

const AnimeBlue = keyframes`
  0%{
    transform:translate(0,0);
  }
  50%{
    transform:translate(50px,150px);
  }
  100%{
    transform:translate(0,0);
  }
`;

const AnimeYellow = keyframes`
  0%{
    transform:translate(0,0);
  }
  50%{
    transform:translate(-50px,100px);
  }
  100%{
    transform:translate(0,0);
  }
`;

const BlurDivPink = styled.div`
  width: 60%;
  height: 50%;
  position: absolute;
  z-index: -1;
  background-color: #edbabb;
  border-radius: 50%;
  filter: blur(50px);
  animation: ${AnimePink} 3s infinite;
`;

const BlurDivBlue = styled.div`
  width: 50%;
  height: 70%;
  position: absolute;
  z-index: -2;
  top: 20%;
  background-color: #caecf6;
  border-radius: 50%;
  filter: blur(50px);
  animation: ${AnimeBlue} 2s infinite;
`;

const BlurDivYellow = styled.div`
  width: 30%;
  height: 60%;
  position: absolute;
  z-index: -2;
  left: 20%;
  top: 15%;
  background-color: #e9cfa7;
  border-radius: 50%;
  filter: blur(50px);
  animation: ${AnimeYellow} 2s infinite;
`;

const TextDiv = styled.div`
  width: 50%;
  padding-left: 10%;
  padding-top: 15%;
  font-size: 3rem;
  color: #061d35;
  font-family: edu;
`;

const ProfileEmoji = styled.img`
  position: absolute;
  width: 35%;
  right: 20%;
  top: 15%;
`;

const IntroduceDiv = styled.div`
  margin-top: 4%;
`;
const Introduce = styled.div`
  -webkit-text-stroke: 1.5px #061d35;
  padding-top: 2%;
  font-size: 2.5rem;
  font-family: edu;
  letter-spacing: 1px;
  color: transparent;
`;

function Home(props, ref) {
  return (
    <BackgroundDiv {...props} ref={ref}>
      <BlurDiv>
        <BlurDivPink></BlurDivPink>
        <BlurDivBlue></BlurDivBlue>
        <BlurDivYellow></BlurDivYellow>
      </BlurDiv>
      <TextDiv>
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type("안녕하세요. ")
              .pause(750)
              .delete()
              .type("성취하며 느낀 행복을")
              .break()
              .type("오랫동안 기억하는")
              .pause(750)
              .delete()
              .type("꾸준한 성장을 지향하는")
              .pause(750)
              .delete()
              .type("프론트엔드 개발자")
              .break()
              .type("<i>이현지</i> 입니다.");
            return instance;
          }}
        ></TypeIt>
        <IntroduceDiv>
          <Introduce>
            Computer Science <br />
            &amp; Engineering
          </Introduce>
          <Introduce>Front-End</Introduce>
          <Introduce>AI</Introduce>
        </IntroduceDiv>
      </TextDiv>
      <ProfileEmoji src={Profile}></ProfileEmoji>
    </BackgroundDiv>
  );
}

export default forwardRef(Home);
