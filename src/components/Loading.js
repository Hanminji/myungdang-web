import React from 'react';
import ReactLoading from 'react-loading';
function Loader() {
   return (
      <div style={{bottom: "50%", left: "0px", width: "100%", position: "fixed", zIndex: 200, display: "flex", justifyContent:"center"}}>
         <ReactLoading type={"bubbles"} color={"#FF363C"} height={'20%'} width={'5rem'} />
      </div>
   );
}
export default Loader;