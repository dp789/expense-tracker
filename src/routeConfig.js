import NotFound from "./containers/NotFoundPage/index";
import HomeContainer from "./containers/HomeContainer/index";
import Transactions from "./containers/Transactions";
import routeConstants from "./utils/routeConstants";
export const routeConfig = {
  home: {
    component: HomeContainer,
    ...routeConstants.home,
  },
  transactions: {
    component: Transactions,
    ...routeConstants.transactions,
  },
  notFoundPage: {
    component: NotFound,
    route: "/not-found",
  },
};
