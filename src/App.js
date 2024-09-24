import { useRoutes } from "react-router-dom";
import { routesConfig } from "./config/routesConfig";

const App = () => {  
  const routes = useRoutes(routesConfig);
  return routes;
};

export default App;
