import styled from "styled-components";
import {Title} from "../../../components/title/Title.tsx";
import {Card} from "../../../components/card/Card.tsx";
import {WrapperContainer} from "../../../components/wrapper/WrapperContainer.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Projects = () => {
    return (
        <StyledProject>
            <WrapperContainer>
                <Title title={"Projects"} size={"46px"} top={"100px"} bottom={"70px"}/>
                <StyledProjectCards>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </StyledProjectCards>
            </WrapperContainer>
        </StyledProject>
    );
};

const StyledProject = styled.section`
    background: ${theme.colors.secondaryBg};
    display: flex;
    position: relative;
`;


const StyledProjectCards = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 140px;
    
    @media ${theme.media.desktop} {
        justify-content: center;
    }
`;
