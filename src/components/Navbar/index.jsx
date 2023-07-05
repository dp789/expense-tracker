/**
 *
 * NavBar
 *
 */

import styled from "@emotion/styled";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Menu as MenuIcon, ArrowBack } from "@mui/icons-material";

// import { LogoutMenu } from "@/features/LogoutMenu/components";
import SideBar from "../SiderBar";
import logo from "../../assets/logo.png";

const NavHeading = styled(Toolbar)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.65rem 1rem;
  }
`;
const LogoImage = styled.img`
  height: 3rem;
  margin-left: 15px;
`;

const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
  background-color:black;
  display: flex;
  justify-content: space-between;
  z-index: ${theme.zIndex.drawer + 1};
`
);

// eslint-disable-next-line react/prop-types
export default function NavBar({ drawerToggleFn, sidebarOpen }) {
  return (
    <>
      <StyledAppBar position="fixed">
        <NavHeading>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="primary" edge="start" onClick={drawerToggleFn}>
              {sidebarOpen ? <ArrowBack /> : <MenuIcon />}
            </IconButton>
            <LogoImage src={logo} />
          </Box>
        </NavHeading>
      </StyledAppBar>
      <SideBar handleDrawerToggle={drawerToggleFn} sideBarOpen={sidebarOpen} />
    </>
  );
}
