// React Hooks
import { useState } from "react";
import axios from "axios";

// Bootstrap Components
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// Custom Components
import VendorDashboardMenu from "./VendorDashboardMenu/VendorDashboardMenu";
import VendorDashboardContent from "./VendorDashboardContent/VendorDashboardContent";
import Container from "react-bootstrap/esm/Container";
import VendorDashboardCover from "./VendorDashboardCover";

export default function VendorDashboard() {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");

  axios
    .get("http://127.0.0.1:8000/api/v1/vendor/current")
    .then((response) => {
      setRestaurantName(response.data.vendor_name);
      setRestaurantAddress(response.data.user_profile.full_address);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <VendorDashboardCover
        restaurantName={restaurantName}
        restaurantAddress={restaurantAddress}
      />
      <Container>
        <Tab.Container defaultActiveKey="#link1">
          <Row className="my-5 py-5">
            <Col>
              <ListGroup>
                <VendorDashboardMenu />
              </ListGroup>
            </Col>
            <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={10}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
                <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
                <Tab.Pane eventKey="#link3">Tab pane content 3</Tab.Pane>
                <Tab.Pane eventKey="#link4">Tab pane content 4</Tab.Pane>
                <Tab.Pane eventKey="#link5">Tab pane content 5</Tab.Pane>
                <Tab.Pane eventKey="#link6">Tab pane content 6</Tab.Pane>
                <Tab.Pane eventKey="#link7">Tab pane content 7</Tab.Pane>
                <Tab.Pane eventKey="#link8">Tab pane content 8</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
