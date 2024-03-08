import {React,useEffect} from "react";
import "../Contact/Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhoneAlt,
  faEnvelopeOpen,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 data-aos="fade-down">GET IN TOUCH</h1>

          <div className="col-12 col-md-3" data-aos="fade-up">
            <div className="c-location">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                size="2x"
                className="c-diadiem"
              />

              <div>
                3,Huynh Van Nghe,Phu Loi <br />
                Thu Dau Mot
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3" data-aos="fade-up">
            <div className="c-location">
              <FontAwesomeIcon
                size="2x"
                icon={faPhoneAlt}
                className="c-diadiem"
              />
              <div>0364 464 373</div>
            </div>
          </div>

          <div className="col-12 col-md-3" data-aos="fade-up">
            <div className="c-location">
              <FontAwesomeIcon
                size="2x"
                icon={faEnvelopeOpen}
                className="c-diadiem"
              />
              <div>origami@origami.com</div>
            </div>
          </div>

          <div className="col-12 col-md-3" data-aos="fade-up">
            <div className="c-location">
              <FontAwesomeIcon size="2x" icon={faClock} className="c-diadiem" />
              <div>Time work: 8 am to 5 pm</div>
              <div>From Monday to Sunday</div>
            </div>
          </div>
        </div>
      </div>
      <div className="khung">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 col-md-6 c-img-fluid" data-aos="fade-up">
              <div id="image"></div>
            </div>
            <div className="col-12 col-md-6" data-aos="fade-up">
              <div className="map">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7154763816293!2d106.67362117363247!3d10.984835389176856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d12077b81a69%3A0x42b8d9088f1b6e8b!2zMyBIdeG7s25oIFbEg24gTmdo4buHLCBQaMO6IEzhu6NpLCBUaOG7pyBE4bqndSBN4buZdCwgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1709739968860!5m2!1svi!2s"
                  style={{
                    border: "0",
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                    width: "100%",
                    height: "400px",
                  }}
                ></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
