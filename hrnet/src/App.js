import EmployeeCreator from "./pages/EmployeeCreator";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Error404 from "./pages/Error404";
import "./style/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={EmployeeCreator} />
        <Route path="/employeeList" exact component={EmployeeList} />
        <Route path="*" exact component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
