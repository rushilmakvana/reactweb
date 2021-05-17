import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import Designs from "./Designs";
import Header from "./Header";
import Home from "./Home";
import ScaleLoader from "react-spinners/ScaleLoader";
const Landing = () => {
  const [load, setload] = useState(true);
  const loading = {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(34, 34, 34)",
  };
  useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 3333);
  }, []);

  if (load) {
    return (
      <ScaleLoader
        css={loading}
        // size={200}
        color="rgb(216,210,210)"
      ></ScaleLoader>
    );
  } else {
    return (
      <div>
        <Header />
        <Home />
        <Designs />
        <Contact />
      </div>
    );
  }
};

export default Landing;
