// Bootstrap Components
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

// Icons
import StarRegular from "./StarRegular";
import StarFilled from "./StarFilled";

export default function Rating() {
  return (
    <Card
      className="card-border-none"
      style={{ display: "flex", flexDirection: "row", gap: "8px" }}
    >
      <div>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarRegular />
      </div>
      <Card.Text style={{ color: "#777"}}>(28)</Card.Text>
    </Card>
  );
}
