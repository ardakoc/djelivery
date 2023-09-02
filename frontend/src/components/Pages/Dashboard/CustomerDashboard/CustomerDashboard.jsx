// Bootstrap Components
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

// Custom Components
import CustomerDashboardMenu from "./CustomerDashboardMenu/CustomerDashboardMenu";
import CustomerDashboardContent from "./CustomerDashboardContent/CustomerDashboardContent";
import Container from "react-bootstrap/esm/Container";
import CustomerDashboardCover from "./CustomerDashboardCover";

export default function CustomerDashboard() {
  return (
    <>
      <CustomerDashboardCover />
      <Container>
        <Tab.Container defaultActiveKey="#link1">
          <Row className="my-5 py-5">
            <Col>
              <ListGroup>
                <CustomerDashboardMenu />
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
