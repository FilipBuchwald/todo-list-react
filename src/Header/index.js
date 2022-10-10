import styled from "styled-components";

const StyledHeader = styled.h1`
    font-size: 25px;
    font-weight: 900;
    margin: 20px 10px 10px;
`;

const Header = ({ title }) => (
    <StyledHeader>
        {title}
    </StyledHeader>
);

export default Header;