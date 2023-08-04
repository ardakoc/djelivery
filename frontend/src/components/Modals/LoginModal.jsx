// Bootstrap Components
import Modal from "react-bootstrap/Modal";

// Custom Components
import LoginForm from "../Forms/LoginForm";
import ModalSectionTitle from "../Titles/ModalSectionTitle";

// Icons
import Facebook from "../Icons/Social/Facebook";
import LoginWithButton from "../Buttons/LoginWithButton";
import X from "../Icons/Social/X";
import Google from "../Icons/Social/Google";

export default function LoginModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Login To Your Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
        <ModalSectionTitle text="Login With" />
        <LoginWithButton
          appIcon={<Facebook />}
          appName="Facebook"
          backgroundColor="#4267B2"
          color="#fff"
        />
        <LoginWithButton
          appIcon={<X />}
          appName="X"
          backgroundColor="#25ACED"
          color="#fff"
        />
        <LoginWithButton
          appIcon={<Google />}
          appName="Google"
          backgroundColor="#B63A2B"
          color="#fff"
        />
      </Modal.Body>
    </Modal>
  );
}
