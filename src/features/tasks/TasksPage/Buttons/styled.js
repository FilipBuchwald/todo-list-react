import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.teal};
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: transparent;    

    &:hover {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        filter: none;
    }

    @media(max-width: 767px) {
         display: flex;
         flex-basis: 100%;
         flex-wrap: wrap;
         justify-content: center;
        }
`;
