import { StyledButton } from './index.styled'

const BtnDelete = ({ id, edit, deleteTask }) => {
    return(
        <StyledButton id={id} edit={edit} onClick={() => deleteTask(id)}>💥</StyledButton>
    )
}

export default BtnDelete;