import styled from "styled-components";

const Input = styled.input`
padding: 10px;
margin: 5px 10px;
border: 1px solid #ddd;

&::placeholder{
    color: ${({ theme }) => theme.color.silver};
}
`;

export default Input;