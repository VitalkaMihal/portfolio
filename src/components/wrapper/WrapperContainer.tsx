import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

export const WrapperContainer = ({children}:any) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    @media ${theme.media.desktop}{
        width: 95%;
    }
`