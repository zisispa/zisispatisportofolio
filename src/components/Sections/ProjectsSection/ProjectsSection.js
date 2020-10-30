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
  ImgWrapper,
  Img,
  TopLineTitle,
  NavIconLink,
  NavIconSource,
  SubtitleLangues,
  ButtonWrapper,
} from "./ProjectsSection.elements";

const AboutUsSection = ({
  lightBg,
  lightText,
  headline,
  section_id,
  lightTopLineBorderButton,
  project_details,
}) => {
  return (
    <InfoSec lightBg={lightBg} id={section_id}>
      <Container>
        <InfoRow>
          <Heading lightText={lightText}>{headline}</Heading>
        </InfoRow>
        {project_details.map((project, index) => {
          return (
            <InfoRow imgStart={project.imgStart} key={index}>
              <InfoColumn>
                <ImgWrapper start={project.start}>
                  <Img src={project.img} alt={project.alt} />
                </ImgWrapper>
              </InfoColumn>
              <InfoColumn>
                <TextWrapper>
                  <TopLineTitle>{project.title}</TopLineTitle>
                  <TopLine lightTopLine={project.lightTopLine}>
                    {project.topLine}
                  </TopLine>
                  <Subtitle lightTextDesc={project.lightTextDesc}>
                    {project.description}
                  </Subtitle>
                  <SubtitleLangues>{project.descriptionEmail}</SubtitleLangues>
                  <ButtonWrapper>
                    {project.buttons.map((button, index) => {
                      return (
                        <a
                          href={button.link}
                          key={button.id}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            primary={button.primary}
                            big={button.big}
                            fontBig={button.fontBig}
                          >
                            {button.icon === "link" ? (
                              <NavIconLink />
                            ) : (
                              <NavIconSource />
                            )}
                            {button.label}
                          </Button>
                        </a>
                      );
                    })}
                  </ButtonWrapper>
                </TextWrapper>
              </InfoColumn>
            </InfoRow>
          );
        })}
      </Container>
    </InfoSec>
  );
};

export default AboutUsSection;
