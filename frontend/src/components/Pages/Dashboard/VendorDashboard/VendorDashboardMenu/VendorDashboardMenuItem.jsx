import ListGroup from "react-bootstrap/ListGroup";

export default function VendorDashboardMenuItem(props) {
  return (
    <ListGroup.Item
      action
      href={props.href}
      onClick={props.handeClick}
      style={{
        fontSize: "14px",
        backgroundColor: "#f0f0f0",
        color: "#2e3331",
        borderRadius: "0",
      }}
    >
      {props.title}
    </ListGroup.Item>
  );
}
