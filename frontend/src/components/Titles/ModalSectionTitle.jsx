// Bootstrap Components
import Modal from "react-bootstrap/Modal";

export default function ModalSectionTitle(props) {
  return (
    <Modal.Title
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #ccc",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
        paddingTop: "16px",
        fontSize: "16px",
        fontWeight: "700",
      }}
    >
      <span style={{ background: "#fff", padding: "0 10px" }}>{props.text}</span>
    </Modal.Title>
  );
}
