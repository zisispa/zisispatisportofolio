import styled from "styled-components";

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

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
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

export const TopLine = styled.h1`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#090810")};
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
`;

export const Heading = styled.h1`
  margin-bottom: 70px;
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
    width: 20%;
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

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
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

export const ScrollBtn = styled.a`
  height: 50px;
  width: 30px;
  border: 2px solid black;
  position: absolute;
  left: 50%;
  bottom: 20px;
  border-radius: 50px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    height: 10px;
    width: 10px;
    transform: translate(-50%, -100%) rotate(45deg);
    border: 2px solid black;
    border-top: transparent;
    border-left: transparent;
    animation: scroll-down 1s ease-in-out infinite;
  }

  &::before {
    top: 30%;
    animation-delay: 0.3s;
    /* animation: scroll-down 1s ease-in-out infinite; */
  }

  @keyframes scroll-down {
    0% {
      /* top:20%; */
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      top: 90%;
      opacity: 0;
    }
  }
`;
