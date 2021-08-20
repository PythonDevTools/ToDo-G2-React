import styled from "styled-components"

export const StyledButton = styled.button`
    background-color: ${props => props.edit ? "orange" : "red"};
    color: #FFF;
    font-size: 0.7rem;
    border: 0.01rem solid #FFF;
    border-radius: 0.2rem;
    box-shadow: 0.1rem 0.1rem 0.3rem 0 rgba(255, 255, 255, 0);
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    margin-left: 0.8rem;

    &:hover {
        transition-duration: 100ms;
        box-shadow: 0.1rem 0.1rem 0.3rem 0 rgba(255, 255, 255, 0.25);
    }
`