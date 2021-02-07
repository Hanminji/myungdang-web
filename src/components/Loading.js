import React from 'react';
import ReactLoading from 'react-loading';
function Loader() {
   return (
      <div style={{ position: "absolute", top: "220px", left: "40%", width: "100%" }}>
         <ReactLoading type={"bubbles"} color={"#FF363C"} height={'20%'} width={'20%'} />
      </div>
   );
}
export default Loader;