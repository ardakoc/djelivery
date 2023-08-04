// Bootstrap Components
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";

// Custom Components
import BlockButton from "../Buttons/BlockButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

// Icons
import Email from "../Icons/Email";

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
        <BlockButton text="SUBMIT" className="btn-success fw-bold mt-2" />
        <Nav>
            <Nav.Link
              style={{ color: "#000", padding: "0 0 16px 0" }}
              onClick={props.onClickBackToLoginPage}
              className="mt-4 pb-0"
            >
              Back to login page here
            </Nav.Link>
          </Nav>
      </Modal.Body>
    </Modal>
  );
}
