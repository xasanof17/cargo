import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    cursor: pointer;
  }
`;

export const NavbarBlock = styled.div`
  margin-left: 100px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavList = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
  &:nth-of-type(1) {
    padding-left: 0;
  }
`;
export const NavbarLink = styled.a`
  padding: 0px 17px;
  font-weight: 400;
  font-size: 18px;
  line-height: 146%;
  color: var(--white);
  transition: .2s ease;
  &:hover{
  color: var(--hillLands);
  }
`;
