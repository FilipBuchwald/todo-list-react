import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
    padding: 10px;
    margin: 5px 10px;
    border: 1px solid #ddd;

    &::placeholder{
        color: rgb(179, 176, 176);
    }
`;

export const Button = styled.button`
    background: teal;
    color: white;
    padding: 10px;
    font-size: 15px;
    border: none;
    margin: 5px 10px;
    transition: 1s;
    cursor: pointer;

    &:hover {
    transform: scale(1.1);
    background: hsl(180, 100%, 30%);

    @media(max-width: 767px) {
        transform: none;
    }}
`;