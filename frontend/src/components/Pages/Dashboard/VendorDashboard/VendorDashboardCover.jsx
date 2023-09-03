import { useState } from "react";

// Bootstrap Components
import { Container, Row, Col, Table } from "react-bootstrap";

// Custom Components
import Logo from "../../../Logo/Logo";
import CoverImage from "../../../../assets/img/vendor/cover-photo/cover-photo01.jpg";

export default function VendorDashboardCover(props) {
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
        <Table className="restaurant-info">
          <tbody>
            <tr>
              <td>
                <Logo
                  photo="https://upload.wikimedia.org/wikipedia/commons/2/2e/Burger_King_logo_2020.png"
                  background="#fff"
                />
              </td>
              <td className="restaurant-details">
                <h2>{props.restaurantName}</h2>
                <p>{props.restaurantAddress}</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
