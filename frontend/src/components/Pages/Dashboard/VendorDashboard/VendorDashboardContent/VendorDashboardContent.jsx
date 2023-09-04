// Bootstrap Components
import Tab from "react-bootstrap/Tab";

// Custom Components
import DashboardMenuContent from "./DashboardMenuContent/DashboardMenuContent";

export default function VendorDashboardContent() {
  return (
    <>
      <DashboardMenuContent />
      <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
      <Tab.Pane eventKey="#link3">Tab pane content 3</Tab.Pane>
      <Tab.Pane eventKey="#link4">Tab pane content 4</Tab.Pane>
      <Tab.Pane eventKey="#link5">Tab pane content 5</Tab.Pane>
      <Tab.Pane eventKey="#link6">Tab pane content 6</Tab.Pane>
      <Tab.Pane eventKey="#link7">Tab pane content 7</Tab.Pane>
      <Tab.Pane eventKey="#link8">Tab pane content 8</Tab.Pane>
    </>
  );
}
