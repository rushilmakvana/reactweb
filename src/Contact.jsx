import React, { useEffect } from "react";
import "./contact.css";
import "aos/dist/aos.css";
import Aos from "aos";
// import MailIcon from "@material-ui/icons/Mail";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="contact">
      <h1 className="contact-h1" data-aos="fade-in">
        Any Queries ?
      </h1>
      <div className="contact-det" data-aos="fade-in">
        <div className="section">
          <h2 className="contact-h2">Email us on </h2>
          <h4 className="ch4">
            <div className="ic">
              <i class="fas fa-envelope"></i>&nbsp;
              <a
                className="l"
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjsmQFCKbdCLJdzjzlQmNPLwqcFHGClfsnkBjLFHdHblwDpkGlBPQJpczFKDgxvMmMWcxG"
                target="_blank"
              >
                vasantmakvana1988@gmail.com
              </a>
            </div>
          </h4>
          <h4 className="ch4">
            <div className="ic">
              <i class="fas fa-envelope"></i>&nbsp;
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGsVlPSHFlWSvCCKDPJcRmxsxpbnflbttfrrnSSZRXRBSnwwLTCpKDglxHqcnHRWMlqrW"
                className="l"
                target="_blank"
              >
                tirupatitailors@gmail.com
              </a>
            </div>
          </h4>
        </div>
        <div className="section">
          <h2 className="contact-h2">Whatsapp us on </h2>
          <h4 className="ch4">
            <div className="ic">
              <i class="fab fa-whatsapp"></i>&nbsp;
              <a
                href="https://wa.me/+919879130044"
                target="_blank"
                className="l"
              >
                +91 98791 30044
              </a>
            </div>
          </h4>
          <h4 className="ch4">
            <div className="ic">
              <i class="fab fa-whatsapp"></i>&nbsp;
              <a
                href="https://wa.me/+918849623752"
                target="_blank"
                className="l"
              >
                +91 88496 23752
              </a>
            </div>
          </h4>
        </div>
        <div className="section">
          <h2 className="contact-h2">Follow us on </h2>
          <h4 className="ch4">
            <div className="ic">
              <i class="fab fa-instagram"></i>&nbsp;
              <a
                href="https://www.instagram.com/tirupati_tailors_surat/"
                className="l"
              >
                instagram
              </a>
            </div>
          </h4>
          <h4 className="ch4">
            <div className="ic">
              <i class="fab fa-facebook"></i>&nbsp;
              <a
                href="https://www.facebook.com/vasant.makwana.3388"
                className="l"
              >
                facebook
              </a>
            </div>
          </h4>
        </div>
        <div className="section">
          <h2 className="contact-h2">
            <i class="fas fa-map-marker-alt"></i>&nbsp;Reach us
          </h2>
          <h4 className="ch4">
            <a
              href="https://www.google.com/maps/place/Tirupati+Ladies+Tailor/@21.2004186,72.8476555,16.84z/data=!4m12!1m6!3m5!1s0x3be04e55612a9bf7:0x7ad92cf1870775f8!2sTirupati+Ladies+Tailor!8m2!3d21.2014871!4d72.8498656!3m4!1s0x3be04e55612a9bf7:0x7ad92cf1870775f8!8m2!3d21.2014871!4d72.8498656"
              className="l"
              target="_blank"
            >
              Shop-No. 4, Tirupati Ladies Tailors, swastik Society, Near Radha
              Krishna Temple, L.H Road, Surat
            </a>
          </h4>
        </div>
        {/* <h1 data-aos="fade-in"> Any Queries ? </h1>
        <h2 data-aos="fade-in">email us on </h2>
        <h4 data-aos="fade-in">
          <a href=""> vasantmakvana1988@gmail.com</a>
        </h4>
        <h4 data-aos="fade-in">
          <a href=""> tirupatitailors@gmail.com</a>
        </h4>
        <br />
        <h3 data-aos="fade-in">OR</h3>
        <br />
        <h2 data-aos="fade-in">whatsapp us on </h2>
        <h4 data-aos="fade-in">
          <a href=""> +91 98791 30044</a>
        </h4>
        <br />
        <h3 data-aos="fade-in">AND</h3>
        <br />
        <h2 data-aos="fade-in">
          Also follow us on instagram to stay updated with new patterns..
        </h2>
        <br />
        <h3 data-aos="fade-in">
          <a
            href="https://www.instagram.com/tirupati_tailors_surat/"
            target="_blank"
          >
            Click Here to visit our instagram handle
          </a>
        </h3>
        <br />
        <br />
        <h3 data-aos="fade-in">
          <a href="">
            meet us at Shop-No. 4, Tirupati Ladies Tailors, swastik Society,
            Near Radha Krishna Temple, L.H Road, Surat
          </a>
        </h3> */}
      </div>
      <div className="footer">
        for website Development,&nbsp;<i class="fas fa-envelope"></i>&nbsp;
        <a
          style={{ color: "rgb(216,210,210)" }}
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfpsJDMjpZMLsHCVzPDxsQPMQrmqQLspXCtCPtwGVZqKCBrwGwGscpGDWdkTCzrcHrsrJB"
          target="_blank"
        >
          rushilmakvana@gmail.com
        </a>{" "}
        or &nbsp;<i class="fas fa-phone-alt"></i>&nbsp;
        <a
          href="https://wa.me/+918849623752"
          target="_blank"
          style={{ color: "rgb(216,210,210)" }}
        >
          +918849623752{" "}
        </a>
      </div>
    </div>
  );
};

export default Contact;
