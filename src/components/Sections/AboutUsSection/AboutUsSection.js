import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../../GlobalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./AboutUsSection.elements";

const AboutUsSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  descriptionEmail,
  headline,
  topLine,
  img,
  start,
  alt,
  section_id,
}) => {
  return (
    <InfoSec lightBg={lightBg} id={section_id}>
      <Container>
        <InfoRow>
          <Heading lightText={lightText}>{headline}</Heading>
        </InfoRow>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Subtitle lightTextDesc={lightTextDesc}>
                {descriptionEmail}
              </Subtitle>
              <Link to="#about-us">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default AboutUsSection;
