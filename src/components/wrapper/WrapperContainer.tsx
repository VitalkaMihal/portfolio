import styled from "styled-components";

export const WrapperContainer = ({children}:any) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`