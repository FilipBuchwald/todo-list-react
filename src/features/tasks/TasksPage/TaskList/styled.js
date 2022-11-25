import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 1px solid #ddd;
    align-items: center;
    padding: 10px;
    font-weight: 400;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    transition: 1s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.green};
        color: ${({ theme }) => theme.color.white};

        &:hover {
            filter:brightness(120%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};
        color: ${({ theme }) => theme.color.white};

        &:hover {
            filter: brightness(120%);
        }
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.color.black};
`;