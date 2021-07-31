import { useState } from "react";
import { CButton } from "@coreui/react";

import data from "./RequestData";

import Requests from "./Requests";

const RequestsActionPage = () => {
  const [requests, setRequests] = useState(data);

  const [showAll, setShowAll] = useState(false);
  const showBtnClick = () => {
    setShowAll(!showAll);
  };
  console.log(requests);
  return (
    <div>
      <Requests
        requests={requests.filter((request) => request.status == 1)}
        haveAction={true}
      />
      <CButton
        color="info"
        shape="rounded-pill"
        size="lg"
        onClick={showBtnClick}
      >
        Toàn bộ yêu cầu
      </CButton>
      {showAll ? <Requests requests={requests} haveAction={false} /> : ""}
    </div>
  );
};

export default RequestsActionPage;
