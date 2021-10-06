import EmployeeCreator from "./pages/EmployeeCreator";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Error404 from "./pages/Error404";
import "react-datetime/css/react-datetime.css";
import "./style/style.css";

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
