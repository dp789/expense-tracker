/**
 *
 * Layout
 *
 */

import { useState } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

import NavBar from "../NavBar/index";
import { colors } from "../../themes/index";

const ChildrenWrapper = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  display: "grid",
  placeItems: "center",
  padding: theme.spacing(2),
  backgroundColor: `${colors.primaryWhite}`,
  paddingTop: theme.spacing(10),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

// eslint-disable-next-line react/prop-types
const Layout = ({ children, ...props }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleDrawerToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <NavBar drawerToggleFn={handleDrawerToggle} sidebarOpen={sidebarOpen} />
      <Box
        component="main"
        sx={() => ({
          backgroundColor: `${colors.primaryWhite}`,
          flexGrow: 1,
          width: "100%",
        })}
        {...props}
      >
        <ChildrenWrapper open={sidebarOpen}>{children}</ChildrenWrapper>
      </Box>
    </Box>
  );
};

export default Layout;
