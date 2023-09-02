// Bootstrap Components
import ListGroup from "react-bootstrap/ListGroup";

// Custom Components
import VendorDashboardMenuItem from "./VendorDashboardMenuItem";

// Icons
import DashboardIcon from "../../../../Icons/VendorDashboard/DashboardIcon";
import EarningsIcon from "../../../../Icons/VendorDashboard/EarningsIcon";
import MenuBuilderIcon from "../../../../Icons/VendorDashboard/MenuBuilderIcon";
import MyRestaurantIcon from "../../../../Icons/VendorDashboard/MyRestaurantIcon";
import OrdersIcon from "../../../../Icons/VendorDashboard/OrdersIcon";
import StatementIcon from "../../../../Icons/VendorDashboard/StatementIcon";
import ChangePasswordIcon from "../../../../Icons/VendorDashboard/ChangePasswordIcon";
import LogoutIcon from "../../../../Icons/VendorDashboard/LogoutIcon";

export default function VendorDashboardMenu() {
  return (
    <ListGroup defaultActiveKey="#link1">
      <VendorDashboardMenuItem title="Dashboard" icon={<DashboardIcon />} href="#link1" />
      <VendorDashboardMenuItem title="My Restaurant" icon={<MyRestaurantIcon />} href="#link2" />
      <VendorDashboardMenuItem title="Menu Builder" icon={<MenuBuilderIcon />} href="#link3" />
      <VendorDashboardMenuItem title="Orders" icon={<OrdersIcon />} href="#link4" />
      <VendorDashboardMenuItem title="Earnings" icon={<EarningsIcon />} href="#link5" />
      <VendorDashboardMenuItem title="Statement" icon={<StatementIcon />} href="#link6" />
      <VendorDashboardMenuItem title="Change Password" icon={<ChangePasswordIcon />} href="#link7" />
      <VendorDashboardMenuItem title="Logout" icon={<LogoutIcon />} href="#link8" />
    </ListGroup>
  );
}
