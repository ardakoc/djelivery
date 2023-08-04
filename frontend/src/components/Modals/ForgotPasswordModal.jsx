// Bootstrap Components
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

// Custom Components
import BlockButton from "../Buttons/BlockButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

// Icons
import Email from "../Icons/Email";
import ModalLink from "../Link/ModalLink";

export default function ForgotPasswordModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Reset Your Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Enter your email address below and we'll send you an email with
        instructions on how to change your password.
        <InputWithIcon
          icon={<Email />}
          placeholder="Enter your email address"
          type="email"
          className="mb-2 mt-2"
        />
        <BlockButton text="SUBMIT" className="btn-success fw-bold mt-2 mb-4" />
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
