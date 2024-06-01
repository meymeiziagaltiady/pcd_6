import React, { useEffect, useState } from "react";
import Axios from "axios";

// IMPORT BOOTSTRAP
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';

function Histogram({ customKey }) {
  const [histogramCreated, setHistogramCreated] = useState(false);

  useEffect(() => {
    Axios.post("http://localhost:5000/histogram_rgb")
      .then((response) => {
        console.log("create histogram succeed");
        setHistogramCreated(true);
      })
      .catch((error) => {
        console.error("create histogram failed: ", error);
      });
  }, [customKey]);

  useEffect(() => {
    setHistogramCreated(false);
  }, [customKey]);

  return histogramCreated ? <HistogramDisplay />
    : (
      <div className="d-flex align-items-center">
        <Spinner animation="border" variant="success" />
      </div>
    );
}

function HistogramDisplay({ customKey }) {
  console.log("histogram display");

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    Axios
      .get("http://localhost:5000/get_histograms")
      .then((response) => {
        setImageData(response.data.images);
      })
      .catch((error) => {
        console.log("Failed to load images:", error);
      });
  }, [customKey]);

  return (
    <div>
      {imageData.map((image, index) => (
        <div key={index}>
          <Image
            src={`data:image/jpeg;base64,${image.data}`}
            alt={image.filename}
            fluid
          />
        </div>
      ))}
    </div>
  );
}

export default Histogram;
