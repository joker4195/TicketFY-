import React from "react";
import "./FooterStyles.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-bootstrap";
const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/kushalgaddamwar4195/"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/kushal_gaddamwar0811/?next=%2F"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/kushal-gaddamwar-966044202/"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="https://github.com/joker4195" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                TicketeFY
              </h6>
              <p>
                Here you can get live updated of any Movies and their Reviews.
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol> */}

            {/* <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <NavLink href="/" className="text-reset">
                Login
              </NavLink>
              <br></br>

              <NavLink href="/concerts" className="text-reset">
                Concerts
              </NavLink>
              <br></br>
              <NavLink href="/movies" className="text-reset">
                Movies
              </NavLink>
              <br></br>

              <NavLink href="/sports" className="text-reset">
                Sports
              </NavLink>
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Jabalpur, 482005
                <p>India</p>
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                kushalgaddamwar4195@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 91
                7887627220
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          TicketeFY.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
