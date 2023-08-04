// Bootstrap Components
import Modal from "react-bootstrap/Modal";

// Custom Components
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import SocialAuthModalSection from "./ModalSections/SocialAuthModalSection";

export default function RegisterModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegisterForm onClickBackToLoginPage={props.onClickBackToLoginPage} />
        <SocialAuthModalSection />
      </Modal.Body>
    </Modal>
  );
}
