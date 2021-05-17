import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blouse.css";
import CloseIcon from "@material-ui/icons/Close";
import BeatLoader from "react-spinners/BeatLoader";

const Gown = () => {
  const [load3, set3] = useState(true);
  const [photos, fetch_photos] = useState([]);
  const [temp_photo, source] = useState("");
  const [model, setmodel] = useState(false);
  let [counter, updatecounter] = useState(1);
  let [se, upse] = useState({
    start: "",
    end: "",
  });
  const max = 50;
  useEffect(() => {
    axios.get("https://tirupati-api.herokuapp.com//gown").then((response) => {
      fetch_photos(response.data);
    });
    const val = counter * max;
    upse({
      start: val - max,
      end: val,
    });
    setTimeout(() => {
      set3(false);
    }, 3000);
  }, [counter]);
  const getimg = (src) => {
    source(src);
    setmodel(true);
  };
  const dont_show = () => {
    setmodel(false);
  };
  const loading = {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(34, 34, 34)",
  };
  if (load3) {
    return (
      <BeatLoader css={loading} size={15} color="rgb(216,210,210)"></BeatLoader>
    );
  } else {
    return (
      <>
        <div className="nav">Tirupati Dress Makers</div>
        <div className="all_photos">
          <div className={model ? "model open" : "model"}>
            <img src={temp_photo} alt="image"></img>
            <CloseIcon className="close" onClick={dont_show} />
          </div>
          {photos.slice(se.start, se.end).map((val) => {
            const str =
              "https://tirupati-api.herokuapp.com/static/img/gown/" + val;
            return (
              <img
                src={str}
                alt="photo"
                className="img"
                onClick={() => getimg(str)}
              />
            );
          })}
        </div>
        <div className="btns">
          <button
            className="btn2"
            onClick={() => {
              if (counter === 1) {
                updatecounter(1);
                alert("you are at the first page");
              } else {
                updatecounter(--counter);
              }
            }}
          >
            Previous
          </button>
          <button
            className="btn2"
            onClick={() => {
              if (counter === Math.ceil(photos.length / max)) {
                updatecounter(counter);
                alert("you are at the last page");
              } else {
                updatecounter(++counter);
              }
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  }
};

export default Gown;
