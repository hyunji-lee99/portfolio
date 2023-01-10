import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import TypeIt from "typeit-react";
import Profile from "../img/profile_emoji.PNG";

const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #f5f4f4;
  z-index: 0;
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
  animation: ${AnimeBlue} 3s infinite;
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
  animation: ${AnimeYellow} 3s infinite;
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
  padding-left: 10%;
  position: absolute;
  width: 100%;
  bottom: 20%;
  color: #061d35;
`;
const Introduce = styled.div`
  -webkit-text-stroke: 1.5px #061d35;
  padding-top: 2%;
  font-size: 2rem;
  font-family: edu;
  letter-spacing: 1px;
  color: transparent;
`;

const Vibration = keyframes`
0% {
  transform: rotate(1deg);
}
50%{
  transform:rotate(-1deg)
}
100% {
  transform: rotate(1deg);
}
`;

const AboutDiv = styled.div`
  width: 30%;
  overflow: auto;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 3px 3px 3px gray;
  background-color: #f5f4f4;
  border-radius: 15px;
  z-index: 1000;
  &:hover {
    animation: ${Vibration} 0.5s infinite;
  }
`;

const AboutUl = styled.ul`
  list-style: none;
  font-family: edu;
  padding-left: 10px;
`;

const Aboutli = styled.li`
  margin-top: 10px;
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
          options={{ loop: true }}
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
      </TextDiv>
      <IntroduceDiv>
        <Introduce>About Me</Introduce>
        <AboutDiv>
          <AboutUl>
            <Aboutli>📍 Daegu, South Korea</Aboutli>
            <Aboutli>✏️ 경북대학교 컴퓨터학부</Aboutli>
            <Aboutli>🙆🏻‍♀️ Google Developers Student Club FE member</Aboutli>
            <Aboutli>
              🏢 <b>前</b>) DAIB 주식회사 Freelance Developer
            </Aboutli>
          </AboutUl>
        </AboutDiv>
      </IntroduceDiv>
      <ProfileEmoji src={Profile}></ProfileEmoji>
    </BackgroundDiv>
  );
}

export default forwardRef(Home);
