// Bootstrap Components
import ListGroup from "react-bootstrap/ListGroup";

// Custom Components
import DashboardMenuItem from "../../DashboardMenuItem";

// Icons
import DashboardIcon from "../../../../Icons/Dashboard/DashboardIcon";
import OrdersIcon from "../../../../Icons/Dashboard/OrdersIcon";
import ProfileSettingsIcon from "../../../../Icons/Dashboard/ProfileSettingsIcon";
import ChangePasswordIcon from "../../../../Icons/Dashboard/ChangePasswordIcon";
import LogoutIcon from "../../../../Icons/Dashboard/LogoutIcon";

export default function CustomerDashboardMenu() {
  return (
    <ListGroup defaultActiveKey="#link1">
      <DashboardMenuItem title="Dashboard" icon={<DashboardIcon />} href="#link1" />
      <DashboardMenuItem title="My Orders" icon={<OrdersIcon />} href="#link2" />
      <DashboardMenuItem title="Profile Settings" icon={<ProfileSettingsIcon />} href="#link3" />
      <DashboardMenuItem title="Change Password" icon={<ChangePasswordIcon />} href="#link4" />
      <DashboardMenuItem title="Logout" icon={<LogoutIcon />} href="#link5" />
    </ListGroup>
  );
}
