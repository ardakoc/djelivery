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
          width: props.width || "125px",
          height: props.height || "125px",
          background: "none",
        }}
      >
        <Image
          src={props.photo}
          style={{
            maxWidth: props.width || "125px",
            maxHeight: props.width || "125px",
          }}
        />
      </Button>
    </Col>
  );
}
