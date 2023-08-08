import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navigation from "./components/Pages/Navigation/Navigation";
import Homepage from "./components/Pages/Homepage/Homepage";
import Footer from "./components/Pages/Footer/Footer";
import RestaurantRegister from "./components/Pages/RestaurantRegister/RestaurantRegister";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>          
          <Route exact path="/" component={Homepage} />
          <Route path="/register-restaurant" component={RestaurantRegister} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
