// Bootstrap Components
import Modal from "react-bootstrap/Modal";

// Custom Components
import LoginForm from "../Forms/LoginForm";
import SocialAuthModalSection from "./ModalSections/SocialAuthModalSection";
import ModalInfoText from "../Texts/InfoText";

export default function LoginModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Login To Your Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.signedUp && (
          <ModalInfoText msg="You have successfully registered. You can login now." />
        )}
        <LoginForm
          onClickForgotPassword={props.onClickForgotPassword}
          onClickRegister={props.onClickRegister}
        />
        <SocialAuthModalSection />
      </Modal.Body>
    </Modal>
  );
}
