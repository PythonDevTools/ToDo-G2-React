import { StyledError } from './index.styled'

const Message = ({ msg }) => {
    return(
        <StyledError>
            {msg}
        </StyledError>
    )
}

export default Message;