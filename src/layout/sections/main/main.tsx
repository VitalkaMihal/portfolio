import styled from "styled-components";
import photo from "../../../assets/photo/foto-resume.jpg";
import {Button} from "../../../components/button/button";
import {WrapperContainer} from "../../../components/wrapper/WrapperContainer.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <WrapperContainer>
                <StyledMainContent>
                    <StyledInfo>
                        <StyledProfession>Front End Developer</StyledProfession>
                        <StyledAboutMe>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                        </StyledAboutMe>
                        <Button textButton={"Let’s Begin"}/>
                    </StyledInfo>
                    <StyledPhoto src={photo} alt="photo"/>
                </StyledMainContent>
            </WrapperContainer>
        </StyledMain>
    );
};

export const StyledMain = styled.div`
    background-color: #0f1624;
    display: flex;
`;

export const StyledMainContent = styled.div`
    margin: 125px 0;
    display: flex;
    justify-content: space-between;
`;

export const StyledInfo = styled.div`
    color: #fff;
    margin: 80px 90px 80px 0;
`;

export const StyledPhoto = styled.img`
    border-radius: 50px 0;
    width: 380px;
    height: 450px;
    object-fit: cover;
    border: 2px solid linear;
`;

export const StyledProfession = styled.h1`
    font-weight: 600;
    font-size: 54px;
    margin: 0;
`;

export const StyledAboutMe = styled.div`
    width: 80%;
    margin-top: 15px;
    margin-bottom: 60px;
`;
