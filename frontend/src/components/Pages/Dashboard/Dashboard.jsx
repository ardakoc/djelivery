// React Hooks
import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Custom Components
import VendorDashboard from "./VendorDashboard";
import CustomerDashboard from "./CustomerDashboard";
import Homepage from "../Homepage/Homepage";

export default function Dashboard() {
  // token check
  const token = localStorage.getItem("token");
  const isAuthenticated = token !== null;
  if (token !== null) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    axios.defaults.headers.common["Content-type"] = "application/json";
  }

  // state definitions
  const [userRole, setUserRole] = useState("");

  axios
    .get("http://127.0.0.1:8000/api/v1/user/current")
    .then((response) => {
      if (response.data.role === 1) {
        setUserRole("Vendor");
      } else if (response.data.role === 2) {
        setUserRole("Customer");
      }
    })
    .catch((error) => {
      console.log(error.response.data.error);
    });

  return (
    <Router>
      <Switch>
        {!isAuthenticated && (
          <>
            <Route path="/" render={() => <Homepage />} />
            <Redirect to="/" />
          </>
        )}
        {userRole === "Vendor" && <VendorDashboard />}
        {userRole === "Customer" && <CustomerDashboard />}
      </Switch>
    </Router>
  );
}
