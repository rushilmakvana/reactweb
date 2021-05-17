import Aos from "aos";
import React, { useEffect } from "react";
import "./home.css";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    const count = document.querySelector(".count");
    count.innerHTML = 0;
    const updatedata = () => {
      const target = 1000;
      const incre = target / 33;
      const s = +count.innerHTML;
      if (s < target) {
        count.innerHTML = Math.round(s + incre);
        setTimeout(updatedata, 40);
      } else {
        count.innerHTML = 1000;
      }
    };
    setTimeout(updatedata, 1000);
    Aos.init({ duration: 1600 });
  }, []);

  return (
    <>
      <div id="home">
        <div className="bg" data-aos="fade-in">
          <div className="sm" data-aos="fade-in">
            <h1 className="hh1" data-aos="fade-in">
              Your welcome...
            </h1>
            <div className="para" data-aos="fade-in">
              <h3>
                We make variety of design patterns, Just choose a Design of your
                choice, That's it , you have done.
              </h3>
            </div>
            <br />
            <div className="inc" data-aos="fade-in">
              <h1 className="count" data-aos="fade-in"></h1>
              <h3> + Designs</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
