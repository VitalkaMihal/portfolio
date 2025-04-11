import styled from "styled-components";
import { Title } from "../../../components/title/title";
import { ExperienceCard } from "../../../components/experienceCard/experienceCard";

export const Experience = () => {
  return (
    <StyledExperience>
      <Title title={"Experience"} size={"46px"} />
      <StyledExperienceContainer>
        <ExperienceCard
          year={"2021"}
          experience={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
          }
        />
        <ExperienceCard
          year={"2022"}
          experience={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
          }
        />{" "}
        <ExperienceCard
          year={"2023"}
          experience={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
          }
        />{" "}
        <ExperienceCard
          year={"2024"}
          experience={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
          }
        />
      </StyledExperienceContainer>
    </StyledExperience>
  );
};

export const StyledExperience = styled.div`
  background: #161d2a;
  padding: 100px 150px;
  text-align: center;
`;

export const StyledExperienceContainer = styled.div`
  text-align: center;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const StyledExperienceText = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
