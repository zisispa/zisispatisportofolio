import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterSubscription>
        <FooterSubHeading>Get it touch</FooterSubHeading>
        <FooterSubText>If you want to talk, you can find me at:</FooterSubText>
        <FooterSubText>zisispatis@gmail.com</FooterSubText>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            ZisisSpatis
          </SocialLogo>
          <WebsiteRights>
            COPYRIGHT © 2020 - Developed by Zisis Spatis
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_black" arial-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_black" arial-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
