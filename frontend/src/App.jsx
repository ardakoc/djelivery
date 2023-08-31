import "./App.css";

// React Hooks
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Custom Components
import Navigation from "./components/Pages/Navigation/Navigation";
import Homepage from "./components/Pages/Homepage/Homepage";
import Footer from "./components/Pages/Footer/Footer";
import RestaurantRegister from "./components/Pages/RestaurantRegister/RestaurantRegister";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
        <Navigation />
          <Switch>
            <div className="content">
              <Route exact path="/" component={Homepage} />
              <Route
                path="/register-restaurant"
                component={RestaurantRegister}
              />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/reset-password" component={ResetPassword} />
            </div>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
