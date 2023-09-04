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
  const [restaurantLogo, setRestaurantLogo] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");

  axios
    .get("http://127.0.0.1:8000/api/v1/vendor/current")
    .then((response) => {
      setRestaurantName(response.data.vendor_name);
      setRestaurantAddress(response.data.user_profile.full_address);
      setRestaurantLogo(response.data.user_profile.profile_picture);
      setCoverPhoto(response.data.user_profile.cover_photo)
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <VendorDashboardCover
        restaurantLogo={restaurantLogo}
        restaurantName={restaurantName}
        restaurantAddress={restaurantAddress}
        coverPhoto={coverPhoto}
      />
      <Container>
        <Tab.Container defaultActiveKey="#overview">
          <Row className="my-5 py-5">
            <Col>
              <ListGroup>
                <VendorDashboardMenu />
              </ListGroup>
            </Col>
            <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={10}>
              <Tab.Content>
                <VendorDashboardContent />
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
