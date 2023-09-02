import { useState } from "react";

// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import RestaurantLogo from "../../Homepage/Content/RestaurantsSection/RestaurantLogo";
import CoverImage from "../../../../assets/img/vendor/cover-photo/cover-photo01.jpg";

export default function VendorDashboardCover() {
  return (
    <>
      <Col xs={12} className="text-center">
        <div
          className="vendor-dashboard-cover"
          style={{
            filter: "brightness(40%)",
            backgroundImage: `url(${CoverImage})`,
          }}
        ></div>
      </Col>{" "}
      <Container>
        <Row>
          <Col xs={12} className="restaurant-info">
            <Row className="align-items-center">
              <Col xs={4} md={3}>
                <RestaurantLogo
                  photo="https://upload.wikimedia.org/wikipedia/commons/2/2e/Burger_King_logo_2020.png"
                  width="80px"
                  height="80px"
                  background="#fff"
                />
              </Col>
              <Col xs={8} md={9} className="restaurant-details">
                <h2>Restaurant Name</h2>
                <p>Restaurant Address</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
