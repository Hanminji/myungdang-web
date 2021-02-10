import React from 'react';
import ReactLoading from 'react-loading';
function Loader() {
   return (
      <div style={{bottom: "50%", left: "40%", width: "100%", position: "fixed", zIndex: 200}}>
         <ReactLoading type={"bubbles"} color={"#FF363C"} height={'20%'} width={'20%'} />
      </div>
   );
}
export default Loader;