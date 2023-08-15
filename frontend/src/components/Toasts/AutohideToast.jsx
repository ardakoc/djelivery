// React Hooks
import { useState } from "react";

// Bootstrap Components
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function AutohideToast(props) {
  const [show, setShow] = useState(true);
  return (
    <ToastContainer
      className="p-3 mt-5"
      position="top-center"
      style={{ zIndex: 99999 }}
    >
      <Toast
        bg="success"
        onClose={() => setShow(false)}
        show={show}
        delay={4000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">
            {props.title}
          </strong>
        </Toast.Header>
        <Toast.Body style={{ color: "#fff" }}>{props.info}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
