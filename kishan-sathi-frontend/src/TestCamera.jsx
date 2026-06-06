import { useEffect, useRef } from "react";

const TestCamera = () => {

  const videoRef = useRef(null);

  useEffect(() => {

    const startCamera = async () => {

      try {

        const stream =
          await navigator.mediaDevices.getUserMedia({

            video: true,
            audio: true

          });

        videoRef.current.srcObject =
          stream;

      } catch (err) {

        console.log(err);

      }

    };

    startCamera();

  }, []);

  return (

    <div>

      <h1>Camera Test</h1>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "500px",
          height: "400px",
          background: "black"
        }}
      />

    </div>

  );

};

export default TestCamera;