import React from "react";
import ReactLoading from "react-loading";
function Loader() {
  return (
    <div
      style={{
        top: "260px",
        width: "100%",
        marginLeft: "40%",
        position: "absolute",
      }}
    >
      <ReactLoading
        type={"bubbles"}
        color={"#FF363C"}
        height={"20%"}
        width={"20%"}
      />
    </div>
  );
}
export default Loader;
