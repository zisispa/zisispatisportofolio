import styled from "styled-components";

// primary-color: #0c0ead;
// secondary-color: #4b5dab;
//background-color-secondary: #ecedf7;
//black-color: #090810;

export const InfoSec = styled.div`
  color: #fff;
  padding: 130px 0px 80px 0px;
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
  flex-direction: "row";
  justify-content: center;
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
  margin-bottom: 24px;
  font-size: 100px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#090810" : "#1c2237")};
  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, #4b5dab 80%); */
  /* transition: 300ms ease-in-out;  */
  /* animation: scroll-down 1s ease; */

  /* @keyframes scroll-down {
    0% {
      /* top:20%; */
  /* background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 100%,
        #4b5dab 80%
      );
    } */
  /* 30% {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 90%,
        #4b5dab 80%
      );
    }
    60% {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 80%,
        #4b5dab 80%
      );
    }
    100% {
      top: 90%;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 80%,
        #4b5dab 80%
      );
    } */
  /* }  */

  @media screen and (max-width: 768px) {
    font-size: 90px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;
