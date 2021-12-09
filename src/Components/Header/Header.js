import { Wrapper, Heading } from "./Header.styles";


const Header = ({text}) => {
    return (
        <Wrapper>
            <Heading>{text}</Heading>
        </Wrapper>
    )
}

export default Header;