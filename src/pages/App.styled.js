import styled from 'styled-components'

export const StyledApp = styled.div`
    display: flex;

    .sidebar {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .task-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-left: 25rem;
    }
`