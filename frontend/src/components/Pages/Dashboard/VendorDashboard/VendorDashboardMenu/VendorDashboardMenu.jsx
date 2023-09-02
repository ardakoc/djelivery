// Bootstrap Components
import ListGroup from "react-bootstrap/ListGroup";

// Custom Components
import DashboardMenuItem from "../../DashboardMenuItem";

// Icons
import DashboardIcon from "../../../../Icons/Dashboard/DashboardIcon";
import EarningsIcon from "../../../../Icons/Dashboard/EarningsIcon";
import MenuBuilderIcon from "../../../../Icons/Dashboard/MenuBuilderIcon";
import MyRestaurantIcon from "../../../../Icons/Dashboard/MyRestaurantIcon";
import OrdersIcon from "../../../../Icons/Dashboard/OrdersIcon";
import StatementIcon from "../../../../Icons/Dashboard/StatementIcon";
import ChangePasswordIcon from "../../../../Icons/Dashboard/ChangePasswordIcon";
import LogoutIcon from "../../../../Icons/Dashboard/LogoutIcon";

export default function VendorDashboardMenu() {
  return (
    <ListGroup defaultActiveKey="#link1">
      <DashboardMenuItem title="Dashboard" icon={<DashboardIcon />} href="#link1" />
      <DashboardMenuItem title="My Restaurant" icon={<MyRestaurantIcon />} href="#link2" />
      <DashboardMenuItem title="Menu Builder" icon={<MenuBuilderIcon />} href="#link3" />
      <DashboardMenuItem title="Orders" icon={<OrdersIcon />} href="#link4" />
      <DashboardMenuItem title="Earnings" icon={<EarningsIcon />} href="#link5" />
      <DashboardMenuItem title="Statement" icon={<StatementIcon />} href="#link6" />
      <DashboardMenuItem title="Change Password" icon={<ChangePasswordIcon />} href="#link7" />
      <DashboardMenuItem title="Logout" icon={<LogoutIcon />} href="#link8" />
    </ListGroup>
  );
}
