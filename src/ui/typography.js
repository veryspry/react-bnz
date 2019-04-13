import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, fontSize, fontWeight, zIndex } from "styled-system";

export const StyledLink = styled(Link)`
  ${color};
  text-decoration: none;
  ${fontWeight}
  ${fontSize};
  &:visited {
    color: ${({ color }) => (color ? color : "black")};
  }
  &:hover {
    text-decoration: ${({ textDecoration }) =>
      textDecoration ? textDecoration : "underline"};
    color: ${({ hovercolor }) => (hovercolor ? hovercolor : "black")};
  }
`;

export const StyledAnchor = styled.a`
  ${color}
  text-decoration: none;
  ${fontWeight}
  ${fontSize};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
