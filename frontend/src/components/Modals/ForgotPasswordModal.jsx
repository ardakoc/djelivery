// Bootstrap Components
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

// Custom Components
import ForgotPasswordForm from "../Forms/ForgotPasswordForm";

// Icons
import ModalLink from "../Link/ModalLink";

export default function ForgotPasswordModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Reset Your Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>        
        <ForgotPasswordForm
          onClickForgotPassword={props.onClickForgotPassword}
          onClickRegister={props.onClickRegister}
        />        
        <Nav>
          <ModalLink
            text="Back to login page here"
            onClick={props.onClickBackToLoginPage}
            style={{ color: "#000", padding: "0", fontSize: "14px" }}
          />
        </Nav>
      </Modal.Body>
    </Modal>
  );
}
