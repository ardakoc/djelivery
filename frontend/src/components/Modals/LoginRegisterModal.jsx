// Bootstrap Components
import Modal from "react-bootstrap/Modal";
import LoginForm from "../Forms/LoginForm";

export default function LoginRegisterModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Login To Your Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
      <Modal.Footer>
        <p>Login With... Section</p>
      </Modal.Footer>
    </Modal>
  );
}
