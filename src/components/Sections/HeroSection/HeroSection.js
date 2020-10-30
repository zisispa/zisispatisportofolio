import React from "react";
import { Button, Container } from "../../../GlobalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./HeroSection.elements";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  section_id,
  lightTopLineBorderButton,
}) => {
  return (
    <InfoSec lightBg={lightBg} id={section_id}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine
                lightTopLine={lightTopLine}
                lightTopLineBorderButton={lightTopLineBorderButton}
              >
                {topLine}
              </TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <a href="#about-us">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </a>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
