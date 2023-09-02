import { useState } from "react";

// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import Logo from "../../../Logo/Logo";
import CoverImage from "../../../../assets/img/users/cover_photos/freddy-castro-u3ajSXhZM_U-unsplash.jpg";
import ProfilePhoto from "../../../../assets/img/users/profile_pictures/picofme.png"

export default function CustomerDashboardCover() {
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
          <Col xs={12} className="customer-info">
            <Row>
              <Col xs={5} md={4}>
                <Logo
                  photo={ProfilePhoto}
                  background="#fff"
                />
              </Col>
              <Col xs={7} md={8} className="customer-details ps-4">
                <h2>Name Surname</h2>
                <p>+0 123 456 78 90</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
