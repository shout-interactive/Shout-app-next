import React, { useEffect, useRef } from "react";
import styles from "./webcam.module.css";

const WebCam = () => {
  const vidRef = useRef(null);

  const initVideo = async () => {
    const vid = vidRef.current;

    try {
      const constraints = {
        audio: false,
        video: true,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      if ("srcObject" in vid) {
        vid.srcObject = stream;
      } else {
        vid.src = window.URL.createObjectURL(stream);
      }
    } catch (error) {
      console.log("An error has occured", error.name);
      alert(`An error has occured-${error.name}`);
    }
  };

  useEffect(() => {
    console.log("in use effect...");
    initVideo();
  }, []);

  return <video autoPlay className={styles.video} ref={vidRef} id="video"></video>;
};

export default WebCam;
