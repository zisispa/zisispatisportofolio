import styled from "styled-components";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

// primary-color: #0c0ead;
// secondary-color: #4b5dab;
//background-color-secondary: #ecedf7;
//black-color: #090810;

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#ecedf7")};

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;

export const ContainerInfo = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 10px 0px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin: 50px 0px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin: 50px 0px;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.h3`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#090810")};
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
`;

export const TopLineTitle = styled.h1`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#090810")};
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin: 20px auto;
  position: relative;
  display: inline-block;
`;

export const Heading = styled.h1`
  margin-bottom: 80px;
  font-size: 30px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#090810" : "#1c2237")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 1px;
    top: 30px;
    margin: 10px auto;
    width: 30%;
    height: 4px;
    background: #090810;
  }

  /* @media screen and (max-width: 768px) {
    font-size: 90px;
  } */
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const SubtitleLangues = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #4b5dab;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  border-radius: 5px;
  box-shadow: 0 10px 6px -6px #777;
`;

export const NavIconLink = styled(BsLink45Deg)`
  font-size: 22px;
  margin-right: 2px;
`;

export const NavIconSource = styled(AiFillGithub)`
  font-size: 22px;
  margin-right: 2px;
`;

export const ButtonWrapper = styled.div`
  display: block;

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    display: flex;
    align-items: center;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;
