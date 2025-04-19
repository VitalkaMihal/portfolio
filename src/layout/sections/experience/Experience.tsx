import styled from "styled-components";
import {Title} from "../../../components/title/Title.tsx";
import {ExperienceCard} from "../../../components/experienceCard/ExperienceCard.tsx";
import {theme} from "../../../styles/Theme.ts";
import {WrapperContainer} from "../../../components/wrapper/WrapperContainer.tsx";

export const Experience = () => {
    return (
        <StyledExperience>
            <WrapperContainer>
                <Title title={"Experience"} size={"46px"}/>
                <StyledExperienceContainer>
                    <ExperienceCard
                        year={"2021"}
                        experience={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
                        }
                        // line={<StyledExperienceLine/>}
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
            </WrapperContainer>
        </StyledExperience>
    );
};

export const StyledExperience = styled.div`
    background: ${theme.colors.secondaryBg};
    display: flex;
    text-align: center;
    padding: 100px 0;
`;

export const StyledExperienceContainer = styled.div`
    text-align: center;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${theme.media.mobile} {
        justify-content: center;
    }
`;

export const StyledExperienceText = styled.div`
    font-weight: 500;
    font-size: 18px;
`;

// const StyledExperienceLine = styled.div`
//     margin: 0 auto;
//     border-radius: 83px;
//     width: 80%;
//     height: 4px;
//     background: ${theme.colors.linear};
//     position: absolute;
//     top: 50px;
// `;
