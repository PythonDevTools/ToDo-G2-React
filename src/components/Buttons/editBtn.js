import { StyledButton } from './index.styled'

const BtnEdit = ({ id, edit, editTask }) => {
    return(
        <StyledButton id={id} edit={edit} onClick={() => editTask(id)}>📝</StyledButton>
    )
}

export default BtnEdit;