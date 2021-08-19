import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 23rem;
    height: 17rem;
    margin: 1rem;
    padding: 1rem;
    background-color: #8132a8;
    border: 0.1rem solid #444;
    box-shadow: 0 0 0.2rem 0.05rem #444;
    border-radius: 0.7rem;
`

export const Input = styled.input`
    width: 21rem;
    border: none;
    padding: 0.3rem 0.6rem;
    border: 0.01rem solid #000;
    border-radius: 0.5rem;
`

export const Textarea = styled.textarea`
    width: 21rem;
    height: 4rem;
    border: none;
    padding: 0.3rem 0.6rem;
    border: 0.01rem solid #000;
    border-radius: 0.5rem;
    resize: none;
`

export const Buttom = styled(Input)`
    height: 2.5rem;
    background-color: #000;
    font-weight: 600;
    color: #FFF;
    cursor: pointer;
    margin: 2rem 0 0.2rem 0;
    border: 0.1rem solid #FFF;
    box-shadow: 0 0.3rem 0rem 0.1rem #333;

    &:active {
        margin: 2.2rem 0 0rem 0;
        box-shadow: 0 0.1rem 0rem 0.1rem #333;
    }
`