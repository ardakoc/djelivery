// Bootstrap Components
import { Tab, Container, Card, Row, Col } from "react-bootstrap";
import OrdersTable from "./OrdersTable";
import OverviewCard from "./OverviewCard";

export default function DashboardMenuContent() {
  return (
    <Tab.Pane
      eventKey="#overview"
      style={{ border: "1px solid #a8e9d5", backgroundColor: "#e6fcf5" }}
    >
      <Container className="m-4">
        <h6>OVERVIEW</h6>
      </Container>
      <Container className="mx-4 pb-4">
        <Row>
          <OverviewCard
            title="Total Orders"
            content="124"
            contentRoute="#total-orders"
          />
          <OverviewCard
            title="Total Revenue"
            content="$3200"
            contentRoute="#total-revenue"
          />
          <OverviewCard
            title="This Month"
            content="$165"
            contentRoute="#this-month"
          />
        </Row>
      </Container>
      <Container className="px-4">
        <OrdersTable />
      </Container>
    </Tab.Pane>
  );
}
