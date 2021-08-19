import { StyledCredits } from "./index.styled"

const Credits = () => {
    return(
        <StyledCredits>
            <p>
                Hecho para el grupo de estudio de Dev Tools en&nbsp;
                <a href="https://frontend.cafe/" alt="Website FEC" target="_blank" rel="noreferrer">FrontendCafé</a>.
            </p>
            <p>
                Ver <a href="https://github.com/PythonDevTools/ToDo-G2-React" alt="Repositorio Frontend" target="_blank" rel="noreferrer">
                    repositorio en GitHub
                </a> 🐱!
            </p>
        </StyledCredits>
    )
}

export default Credits