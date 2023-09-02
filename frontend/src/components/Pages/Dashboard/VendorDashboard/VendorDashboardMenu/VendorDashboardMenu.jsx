// Bootstrap Components
import ListGroup from 'react-bootstrap/ListGroup';

// Custom Components
import VendorDashboardMenuItem from './VendorDashboardMenuItem';

export default function VendorDashboardMenu() {

  return (
    <ListGroup defaultActiveKey="#link1">
      <VendorDashboardMenuItem title="Dashboard" href="#link1" />
      <VendorDashboardMenuItem title="My Restaurant" href="#link2" />
      <VendorDashboardMenuItem title="Menu Builder" href="#link3" />
      <VendorDashboardMenuItem title="Orders" href="#link4" />
      <VendorDashboardMenuItem title="Earnings" href="#link5" />
      <VendorDashboardMenuItem title="Statement" href="#link6" />
      <VendorDashboardMenuItem title="Change Password" href="#link7" />
      <VendorDashboardMenuItem title="Logout" href="#link8" />
    </ListGroup>
  );
}