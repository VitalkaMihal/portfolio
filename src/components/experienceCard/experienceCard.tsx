import styled from "styled-components";

type ExperienceCardPropsType = {
  year: string;
  experience: string;
};

export const ExperienceCard = ({
  year,
  experience,
}: ExperienceCardPropsType) => {
  return (
    <StyledExperienceCard>
      <StyledYear>{year}</StyledYear>
      <StyledCircle />
      {experience}
    </StyledExperienceCard>
  );
};

export const StyledExperienceCard = styled.div`
  color: #fff;
  width: 20%;
`;

export const StyledYear = styled.div`
  font-weight: 600;
  font-size: 26px;
`;

export const StyledCircle = styled.div`
  margin: 0 auto;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #fff;
  margin-bottom: 20px;
`;
