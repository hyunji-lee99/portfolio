import React, { forwardRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtistellaGif from "../img/Artistella.gif";
import "./SliderCssTemp.css";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f4f4;
`;

const ProjectDiv = styled.div`
  height: 500px;
  width: 60%;
  overflow: hidden;
  border-radius: 15px;
  background: linear-gradient(
    171deg,
    rgba(255, 255, 255, 1) 31%,
    rgba(203, 236, 246, 1) 100%
  );
  box-shadow: 3px 3px 3px gray;
`;

const SliderDiv = styled.div`
  padding-top: 10%;
  width: 80%;
  heigth: 60%;
  margin: 0 auto;
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 40%;
`;

const ExplainProject = styled.div`
  width: 100%;
  padding: 20px 20px;
  font-family: edu;
  color: #061d35;
`;

const TitleProject = styled.h2`
  width: 100%;
  text-align: center;
  margin: 0;
  color: transparent;
  -webkit-text-stroke: 1.5px #061d35;
`;

const DetailProject = styled.p`
  letter-spacing: 1px;
  margin-top: 10px;
  line-height: 140%;
`;
function Project(props, ref) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <Div {...props} ref={ref}>
      <SliderDiv>
        <Slider {...settings}>
          <ProjectDiv>
            <ProjectImg src={ArtistellaGif}></ProjectImg>
            <ExplainProject>
              <TitleProject>Artistella</TitleProject>
              <DetailProject>
                "Artistella"는 간단하게 말하면 NFT 마켓 플레이스입니다. phantom
                wallet과 같은 전자 지갑을 연동하여 Artistella 내에서 NFT를
                거래할 수 있습니다. 또, 다양한 NFT 작품을 browsing 할 수
                있습니다. 제가 이 프로젝트에서 맡은 업무는 프론트엔드
                개발입니다. ui는 Zeplin을 이용해서 ux/ui 디자이너와 소통하며
                개발했습니다.
              </DetailProject>
            </ExplainProject>
          </ProjectDiv>
          <ProjectDiv>2</ProjectDiv>
          <ProjectDiv>3</ProjectDiv>
          <ProjectDiv>4</ProjectDiv>
          <ProjectDiv>5</ProjectDiv>
          <ProjectDiv>6</ProjectDiv>
          <ProjectDiv>7</ProjectDiv>
        </Slider>
      </SliderDiv>
    </Div>
  );
}

export default forwardRef(Project);
