import { StyledButton } from './index.styled'

const Button = ({ edit, text }) => {
    // const handleClick = () => {

    // }

    return(
        <StyledButton edit={edit}>{text}</StyledButton>
    )
}

export default Button;