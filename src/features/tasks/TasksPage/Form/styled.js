import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
  }
`;

// export const Input = styled.input`
//     padding: 10px;
//     margin: 5px 10px;
//     border: 1px solid #ddd;

//     &::placeholder{
//         color: ${({ theme }) => theme.color.silver};
//     }
// `;

export const Button = styled.button`
    background: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    font-size: 15px;
    border: none;
    margin: 5px 10px;
    transition: 1s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        filter: brightness(120%);

    @media(max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        transform: none;
    }}
`;