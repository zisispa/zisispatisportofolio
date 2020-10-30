import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";

export const FooterContainer = styled.div`
  background-color: #0c0ead;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  color: #fff;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 30px;
  font-size: 24px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
    margin: 10px auto;
    width: 30%;
    height: 3px;
    background: #fff;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 10%;
    margin: 0px auto;
    width: 90%;
    height: 1px;
    background: #fff;

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      top: 20%;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      top: 20%;
    }
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(BsCodeSlash)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
