// Bootstrap Components
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";

export default function RestaurantLogo(props) {
  return (
    <Col>
      <Button
        href="#"
        className="square border rounded-3 d-flex align-items-center justify-content-center"
        style={{
          width: "125px",
          height: "125px",
          gap: "12px",
          background: "none",
        }}
      >
        <Image
          src={props.photo}
          style={{
            maxWidth: "125px",
            maxHeight: "125px",
          }}
        />
      </Button>
    </Col>
  );
}
