import styled from "styled-components"

export const StyledCredits = styled.div`
    width: 23rem;
    text-align: center;
    color: #FFF;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.8rem;

    p {
        margin: 1.5rem 0;

        a {
            color: #34d399;
            font-weight: 700;

            &:hover {
                color: #FFF;
                background-color: #34d399;
            }
        }
    }
`