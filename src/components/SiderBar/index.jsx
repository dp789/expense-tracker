/* eslint-disable react/prop-types */
/**
 *
 * Sidebar
 *
 */

import {
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { HowToReg, PersonAddAlt1 } from "@mui/icons-material";
import styled from "@emotion/styled";
import routeConstants from "../../utils/routeConstants";
import { useHistory } from "react-router-dom";
import { translate } from "../IntlGlobalProvider/index";
import { colors } from "../../themes/index";

const Heading = styled(Typography)(
  ({ theme }) => `
  && {
    font-weight: ${theme.typography.fontWeightBold};
    margin: 120px 0 40px 20px;
  }
`
);

// eslint-disable-next-line react/prop-types
export default function SideBar({ sideBarOpen }) {
  const history = useHistory();
  const onHandleClickHome = () => {
    history.push(routeConstants.home.route);
    window.location.reload();
  };
  const onHandleClickTransactions = () => {
    history.push(routeConstants.transactions.route);
    window.location.reload();
  };

  return (
    <Drawer
      transitionDuration={10}
      variant="persistent"
      sx={(theme) => ({
        flexShrink: 0,
        backgroundColor: "black",
        width: sideBarOpen
          ? { xs: "100vw", sm: "30%", lg: "27%" }
          : { xs: "auto" },
        boxSizing: "border-box",
        [`& .MuiDrawer-paper`]: {
          boxShadow: theme.shadows[8],
          width: { xs: "100vw", sm: "30%", lg: "27%" },
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      })}
      open={sideBarOpen}
      anchor="left"
    >
      <Heading sx={{ pr: 5 }} variant="h4" align="left">
        {translate("side_bar_heading")}
      </Heading>
      <Divider
        sx={() => ({
          width: "30%",
          ml: 2,
          bgcolor: `${colors.primary}`,
          height: 3,
        })}
      />
      <List>
        <ListItem onClick={onHandleClickHome}>
          <ListItemButton>
            <ListItemIcon>{<HowToReg />}</ListItemIcon>
            {translate("expense_side_menu")}
          </ListItemButton>
        </ListItem>

        <ListItem onClick={onHandleClickTransactions}>
          <ListItemButton>
            <ListItemIcon>{<PersonAddAlt1 />}</ListItemIcon>
            {translate("transactions_side_menu")}
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
