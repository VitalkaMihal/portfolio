import styled from "styled-components";
import {Title} from "../../../components/title/title";
import {Card} from "../../../components/card/card";
import {WrapperContainer} from "../../../components/wrapper/WrapperContainer.tsx";

export const Projects = () => {
    return (
        <StyledProject>
            <WrapperContainer>
                <Title title={"Projects"} size={"46px"}/>
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

export const StyledProject = styled.section`
    background: #161d2a;
    display: flex;
`;


export const StyledProjectCards = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 140px;
`;
