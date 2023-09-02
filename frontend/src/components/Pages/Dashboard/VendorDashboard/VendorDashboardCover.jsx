import { useState } from "react";

// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import Logo from "../../../Logo/Logo";
import CoverImage from "../../../../assets/img/vendor/cover-photo/cover-photo01.jpg";

export default function VendorDashboardCover() {
  return (
    <>
      <Col xs={12} className="text-center">
        <div
          className="dashboard-cover"
          style={{
            filter: "brightness(40%)",
            backgroundImage: `url(${CoverImage})`,
          }}
        ></div>
      </Col>{" "}
      <Container>
        <Row>
          <Col xs={12} className="restaurant-info">
            <Row>
              <Col xs={5} md={4}>
                <Logo
                  photo="https://upload.wikimedia.org/wikipedia/commons/2/2e/Burger_King_logo_2020.png"
                  background="#fff"
                />
              </Col>
              <Col xs={7} md={8} className="restaurant-details">
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
