import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-auto-columns: minmax(60px, auto);
    grid-gap: 10px 10px;
    align-content: center;
    grid-template-rows: auto;
    padding: 10px;
`;

export const Header = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    margin: -4px 0px;

    @media(max-width: 767px) {
         grid-template-columns: 1fr;    
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 18px;
    padding: 5px;
    margin: 5px 10px;
`;

export const Body = styled.div `
    background-color: #fff;
    padding: 10px;
    margin: -4px 0px;   
`;