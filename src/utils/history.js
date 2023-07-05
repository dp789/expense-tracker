import { createBrowserHistory } from "history";
export const baseUrl = () =>
  process.env.NODE_ENV === "production" ? "./" : "/";
const history = createBrowserHistory({ basename: baseUrl() });
export default history;
