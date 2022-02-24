import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Qrcode = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader {...props}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default Qrcode;