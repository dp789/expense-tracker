/**
 *
 * Header
 *
 */

import { AppBar } from "@mui/material";
import styled from "@emotion/styled";
import { injectIntl } from "react-intl";
import { fonts, colors } from "../../themes/index";
import T from "../T";
import logo from "../../assets/react.svg";

const StyledHeader = styled(AppBar)`
  && {
    padding: 0 1rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    background-color: ${colors.primary};
    flex-direction: row;
  }
`;
const Logo = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.height};
  margin-top: 1rem;
`;
const Title = styled(T)`
  && {
    margin-bottom: 0;
    ${fonts.dynamicFontSize(fonts.size.xRegular, 1, 0.5)};
    display: flex;
    align-self: center;
  }
`;
function Header(props) {
  return (
    <StyledHeader position="relative" {...props} data-testid="header">
      <Logo alt="logo" src={logo} width="auto" height="5rem" />
      <Title type="heading" id="app_heading" />
    </StyledHeader>
  );
}

export default injectIntl(Header);
