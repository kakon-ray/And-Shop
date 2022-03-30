import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  NavDropdown,
  Nav,
  Button,
  Offcanvas,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./HeaderNav.css";
import OffCanvas from "../OffCanvas/OffCanvas";

import { Link } from "react-router-dom";

const HeaderNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="and-shop-navbar">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 d-flex  align-items-center "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="nav-link"
              >
                Home
              </Link>
              <Link
                to="/shop"
                style={{ textDecoration: "none" }}
                className="nav-link"
              >
                Shop
              </Link>

              <NavDropdown
                title="SHOP"
                id="navbarScrollingDropdown"
                className="shopContainer"
              >
                <div className="row shop">
                  <div className="col-md-4">
                    <NavDropdown.Item href="#action3">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </div>
                  <div className="col-md-4">
                    <NavDropdown.Item href="#action3">SHOP</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </div>
                  <div className="col-md-4">
                    <img
                      src="https://andshop-react.netlify.app/static/media/nav_banner.e87f5849.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="FEATURE" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">FEATURE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BLOG" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">BLOG</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PAGEs" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">PAGE</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-shop d-flex flex-nowrap aligen-item-center mb-0 pb-0">
            <Button
              variant=""
              className="navbar-icon   position-relative  pb-0 "
            >
              <FontAwesomeIcon icon={faHeart} size="lg" />
              <span className="position-absolute top-7 start-99 translate-middle badge rounded-pill p-1">
                10<span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon  position-relative  pb-0 "
            >
              <FontAwesomeIcon icon={faShoppingBag} size="lg" />
              <span className="position-absolute top-5 start-99 translate-middle badge rounded-pill p-1">
                10<span className="visually-hidden">unread messages</span>
              </span>
            </Button>
            <Button
              variant=""
              className="navbar-icon pb-0 "
              onClick={handleShow}
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </Button>
            {/* <Button variant="" className="navbar-icon mt-0 pt-0 ">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Button> */}
          </div>
        </Container>
      </Navbar>

      {/* this is offcanvas section */}

      <OffCanvas show={show} onHide={handleClose} placement={"start"} />
    </div>
  );
};

export default HeaderNav;
