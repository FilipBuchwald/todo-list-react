import styled from "styled-components";

export const Wrapper = styled.div``;

export const Button = styled.button`
    color: teal;
    margin: -4px 0px;
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: transparent;    

    &:hover {
    color: hsl(180, 100%, 35%);
    }

    &:disabled {
    color: rgb(205, 205, 205)
    }

    @media(max-width: 767px) {
         display: flex;
         flex-basis: 100%;
         flex-wrap: wrap;
         justify-content: center;
        }
`;
