import { useState } from "react";

// Bootstrap Components
import { Container, Row, Col, Table } from "react-bootstrap";

// Custom Components
import Logo from "../../../Logo/Logo";

export default function VendorDashboardCover(props) {
  return (
    <>
      <Col xs={12} className="text-center">
        <div
          className="dashboard-cover"
          style={{
            filter: "brightness(40%)",
            backgroundImage: `url(${props.coverPhoto})`,
          }}
        ></div>
      </Col>{" "}
      <Container>
        <Table className="restaurant-info">
          <tbody>
            <tr>
              <td>
                <Logo
                  photo={props.restaurantLogo}
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
