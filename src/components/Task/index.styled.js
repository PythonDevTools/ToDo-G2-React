import styled from 'styled-components'

export const StyledTask = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0.2rem solid #8132a8;
    border-radius: 0.5rem;
    background-color: #333;
    box-shadow: 0 0 0.4rem 0.115rem #ccc;
    width: 22rem;
    height: auto;
    margin: 1.2rem;
    padding: 1rem;
    font-family: 'Lato', sans-serif;
    font-size: 0.9rem;
    color: #fff;

    .task-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .wrapper-due {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.7rem;
        margin-top: 0.7rem;

        .task-done {

            span {
                font-size: 0.8rem;
                cursor: pointer;
            }
        }
    }
`