import React from "react";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowAltCircleRight,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="bg-body-tertiary text-center">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="https://www.facebook.com/"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />
            </a>

            {/* <!-- Twitter --> */}
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="https://twitter.com/?lang=vi"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            {/* <!-- Google --> */}
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="https://www.google.com.vn/?hl=vi"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} size="2x" color="red" />
            </a>

            {/* <!-- Instagram --> */}
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="https://www.instagram.com/"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            {/* <!-- Linkedin --> */}
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="https://www.linkedin.com/"
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="brown" />
            </a>

            {/* <!-- Github --> */}
            <a
              data-mdb-ripple-init
              className="btn btn-outline btn-floating m-1"
              href="https://github.com/"
              role="button"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Form --> */}
          <section className="">
            <form action="">
              {/* <!--Grid row--> */}
              <div className="row d-flex justify-content-center">
                {/* <!--Grid column--> */}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-md-5 col-12">
                  {/* <!-- Email input --> */}
                  <div
                    data-mdb-input-init
                    className="form-outline mb-4 input-block"
                  >
                    <input
                      type="email"
                      id="input-email"
                      className="form-control"
                      name="input-email"
                      required
                      spellcheck="false"
                    />
                    <label className="form-label" for="input-email">
                      Email address
                    </label>
                  </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-auto">
                  {/* <!-- Submit button --> */}
                  <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn btn-outline mb-4 f-btn"
                  >
                    Subscribe
                  </button>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </form>
          </section>
          {/* <!-- Section: Form --> */}

          {/* <!-- Section: Text --> */}
          <section className="mb-4">
            <h4>Life is about giving, not about receiving</h4>
          </section>
          {/* <!-- Section: Text --> */}

          {/* <!-- Section: Links --> */}
          <section className="">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Ours Infomation</h5>

                <ul className="list-unstyled mb-0 f-text-body-address">
                  <li>
                    <a
                      className="text-body"
                      href="https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN"
                    >
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        size="lg"
                        color="brown"
                      />{" "}
                      &ensp;3, Huynh Van Nghe street, Phu Loi Award, Thu Dau Mot
                      .
                    </a>
                  </li>

                  <li>
                    <a className="text-body" href="#!">
                      <FontAwesomeIcon icon={faPhone} size="lg" color="brown" />
                      &ensp; 0364 464 373
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-body"
                      href="https://mail.google.com/mail/u/0/"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="lg"
                        color="brown"
                      />
                      &ensp; origami@origami.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">New For Kids</h5>

                <ul className="list-unstyled mb-0 f-content-kid f-text-body">
                  <li>
                    <a className="text-body" href="/detail-product/3">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Dollar Bill Shirt
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/detail-product/4">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Flying Origami
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/detail-product/13">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Origami Sycee
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/detail-product/9">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Origami Dog
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">New For Aldult</h5>

                <ul className="list-unstyled mb-0 f-content-adult f-text-body">
                  <li>
                    <a className="text-body" href="/detail-product/23">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Origami Rabbit
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/detail-product/21">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Dollar Flower
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/detail-product/24">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Origami Rose
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/detail-product/20">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                     Ball-Kusudame
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Quick Links</h5>

                <ul className="list-unstyled mb-0 f-content-quicklink f-text-body">
                  <li>
                    <a className="text-body" href="/about">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/gallery">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/contact">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />{" "}
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="text-body" href="/feedback">
                      <FontAwesomeIcon icon={faArrowAltCircleRight} size="x" />
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgb(212, 154, 154)" }}
        >
          <FontAwesomeIcon icon={faCopyright} /> Design copyright 2024:
          <a className="text-reset fw-bold" href="/home">
            FPT.Aptech-Group 2
          </a>
        </div>
        {/* <!-- Copyright  https://mdbootstrap.com/--> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}

export default Footer;
