// React Hooks
import { useState } from "react";
import axios from "axios";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

// Custom Components
import FoodMenu from "./FoodMenu/FoodMenu";
import PrimaryButton from "../../Buttons/PrimaryButton";
import LoginModal from "../../Modals/LoginModal";
import ForgotPasswordModal from "../../Modals/ForgotPasswordModal";
import RegisterModal from "../../Modals/RegisterModal";

// Logo
import NavLogo from "./NavLogo";

// Icons
import Compass from "../../Icons/Compass";
import Location from "../../Icons/Location/Location";

// API
import api from '../../../api.jsx';

export default function Navigation() {
  // state definitions
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  // state methods
  const handleCloseModal = () => setShowLoginModal(false);
  const handleshowLoginModal = () => {
    setSignedUp(false);
    setShowLoginModal(true);
    setShowForgotPasswordModal(false);
    setShowRegisterModal(false);
  };

  const handleCloseForgotPasswordModal = () =>
    setShowForgotPasswordModal(false);
  const handleShowForgotPasswordModal = () => {
    setSignedUp(false);
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setShowForgotPasswordModal(true);
  };

  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  const handleShowRegisterModal = () => {
    setSignedUp(false);
    setShowLoginModal(false);
    setShowForgotPasswordModal(false);
    setShowRegisterModal(true);
  };

  const setSuccess = () => {
    setSignedUp(true);
    setShowLoginModal(true);
    setShowForgotPasswordModal(false);
    setShowRegisterModal(false);
  };

  // token check
  const token = localStorage.getItem("token");
  const isAuthenticated = token !== null;
  if (token !== null) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  }

  const handleLogout = async (event) => {
    event.preventDefault();
    // await api
    //   .post("/logout/")
    await axios
      .post("http://127.0.0.1:8000/api/v1/logout/")
      .then((response) => {
        localStorage.removeItem("token");
        window.location.href = 'http://localhost:5173/'
      })
      .catch((error) => {
        console.log(error.response.data.detail);
      });
  };

  return (
    <>
      <Navbar expand="lg" className="navbar" sticky="top">
        <Container>
          <NavLogo />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-2"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="fw-bold">
                Restaurants
              </Nav.Link>
              <NavDropdown
                title={
                  <div style={{ display: "inline-block", paddingRight: "8px" }}>
                    <Compass />
                    <span style={{ paddingLeft: "8px" }}>
                      WHAT TO EAT / DRINK?
                    </span>
                  </div>
                }
                id="navbarScrollingDropdown"
                style={{ fontSize: "14px", paddingTop: "2px" }}
              >
                <FoodMenu />
              </NavDropdown>
              <NavDropdown
                title={
                  <div style={{ display: "inline-block", paddingRight: "8px" }}>
                    <Location />
                    <span style={{ paddingLeft: "8px" }}>CHOOSE LOCATION</span>
                  </div>
                }
                id="navbarScrollingDropdown"
                style={{ fontSize: "14px", paddingTop: "2px" }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search locations"
                  aria-label="Search Locations"
                  className="ps-2 me-2 ms-2"
                  style={{
                    width: "auto",
                    height: "32px",
                    fontSize: "12px",
                  }}
                />
                <NavDropdown.Divider />
                <NavDropdown.Header>Popular Locations</NavDropdown.Header>
                <NavDropdown.Item href="#action4">İstanbul</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Ankara</NavDropdown.Item>
                <NavDropdown.Item href="#action6">İzmir</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Antalya</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Bursa</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="d-flex gap-3">
              {isAuthenticated ? (
                <>
                  <PrimaryButton
                    href="/dashboard"
                    text="Dashboard"
                  />
                  <Nav.Link
                    className="fw-bold"
                    style={{
                      color: "#ff0000",
                      fontSize: "14px",
                      letterSpacing: "-0.3px",
                    }}
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="fw-bold"
                    style={{ fontSize: "14px", letterSpacing: "-0.3px" }}
                    onClick={handleshowLoginModal}
                  >
                    LOGIN / REGISTER
                  </Nav.Link>
                  <PrimaryButton
                    href="/register-restaurant"
                    text="REGISTER RESTAURANT"
                  />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        show={showLoginModal}
        onHide={handleCloseModal}
        onClickForgotPassword={handleShowForgotPasswordModal}
        onClickRegister={handleShowRegisterModal}
        signedUp={signedUp}
      />
      <ForgotPasswordModal
        show={showForgotPasswordModal}
        onHide={handleCloseForgotPasswordModal}
        onClickBackToLoginPage={handleshowLoginModal}
      />
      <RegisterModal
        show={showRegisterModal}
        onHide={handleCloseRegisterModal}
        onClickBackToLoginPage={handleshowLoginModal}
        success={setSuccess}
      />
    </>
  );
}
