import styled from "styled-components";
import photo from "../../../assets/photo/foto-resume.jpg";
import {Button} from "../../../components/buttons/Button.tsx";
import {WrapperContainer} from "../../../components/wrapper/WrapperContainer.tsx";
import {theme} from "../../../styles/Theme.ts";
import Typewriter from 'typewriter-effect';

export const Main = () => {
    return (
        <StyledMain>
            <WrapperContainer>
                <StyledMainContent>
                    <StyledInfo>
                        <StyledProfession>
                            <p>Front End Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Front End Developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </StyledProfession>
                        <StyledAboutMe>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                        </StyledAboutMe>
                        <Button textButton={"Let’s Begin"}/>
                    </StyledInfo>
                    <StyledContainerPhoto>
                        <StyledPhoto src={photo} alt="photo"/>
                    </StyledContainerPhoto>

                </StyledMainContent>
            </WrapperContainer>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    background-color: ${theme.colors.primaryBg};
    display: flex;
`;

const StyledMainContent = styled.div`
    margin: 125px 0;
    display: flex;
    justify-content: space-between;
    @media ${theme.media.tablet} {
       flex-direction: column-reverse;
        align-items: center;
    }
`;

const StyledInfo = styled.div`
    width: 60%;
    @media ${theme.media.desktop} {
        width: 335px;
    }
    
`;

const StyledContainerPhoto = styled.div`
    width: 380px;
    height: 450px;
    background: ${theme.colors.linear};
    border-radius: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${theme.media.desktop} {
        width: 335px;
        height: 400px;
    }
`

const StyledPhoto = styled.img`
    width: 98%;
    height: 98%;
    object-fit: cover;
    border-radius: 45px 0;
`;

const StyledProfession = styled.h1`
    font-weight: 600;
    font-size: 54px;
    margin-top: 75px;
    @media ${theme.media.desktop} {
        margin-top: 0;
        font-size: 48px;
    }
    @media ${theme.media.desktop} {
        font-size: 36px;
    }
    p {
        display: none;
    }
`;

const StyledAboutMe = styled.div`
    margin-top: 15px;
    margin-bottom: 60px;
`;
