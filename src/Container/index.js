import styled from "styled-components";

export const Main = styled.main`
    max-width: 900px;
    margin: auto;
`;

const Container = ({children}) => (
    <Main>
        {children}
    </Main>
);

export default Container;