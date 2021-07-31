import React from "react";

const RequestImg = ({ match }) => {
  console.log(match);
  return (
    <div>
      <img
        src={`proofImg/${match.params.id}/${match.params.fileName}`}
        alt="proof Image"
      />
    </div>
  );
};

export default RequestImg;
