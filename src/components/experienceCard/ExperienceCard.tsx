import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {JSX} from "react";

type ExperienceCardPropsType = {
  year: string;
  experience: string;
  line?: JSX.Element;
};

export const ExperienceCard = ({
  year,
  experience,
    line
}: ExperienceCardPropsType) => {
  return (
    <StyledExperienceCard>
      <StyledYear>{year}</StyledYear>
      <StyledCircle>
          {line}
      </StyledCircle>
      {experience}
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled.div`
  width: 20%;
    position: relative;
    
    @media ${theme.media.desktop} {
        width: 40%;
    }

    @media ${theme.media.mobile} {
        width: 80%;
        margin-bottom: 30px;
        text-align: left;
    }
`;

const StyledYear = styled.div`
  font-weight: 600;
  font-size: 26px;
`;

const StyledCircle = styled.div`
  margin: 0 auto 20px auto;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: ${theme.colors.font};
    @media ${theme.media.mobile} {
        position: absolute;
        top: 7px;
        left: -30px;
    }
`;

