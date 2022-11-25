import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  &.active {
    font-weight: bold;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.teal};
  padding: 10px;
  margin: 0px;
`;

export const Li = styled.li`
  margin: 0px 20px;
  list-style: none;
`;