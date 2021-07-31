import { CButton, CBadge } from "@coreui/react";
import { Link } from "react-router-dom";
const getBadge = (status) => {
  switch (status) {
    case 0:
      return "success";
    case 1:
      return "secondary";
    case 2:
      return "warning";
    case 3:
      return "danger";
    default:
      return "primary";
  }
};
const getName = (status) => {
  switch (status) {
    case 0:
      return "Đã duyệt";
    case 1:
      return "Đang chờ";
    case 2:
      return "Không hợp lệ";
    case 3:
      return "danger";
    default:
      return "primary";
  }
};

const splitProof = (proofString) => {
  return proofString.replace(/ /g, "").split(";");
};
const Requests = ({ requests, haveAction }) => {
  return (
    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
      <thead className="thead-light">
        <tr>
          <th className="text-center">Tên</th>
          <th className="text-center">Mã số sinh viên</th>
          <th className="text-center">Minh chứng</th>
          <th className="text-center">Trạng thái</th>
          {haveAction ? <th className="text-center">Thao tác</th> : <th></th>}
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request.id}>
            <td>
              <h4>{request.name}</h4>
            </td>
            <td className="text-center">
              <h4>{request.studentId}</h4>
            </td>
            <td className="text-center">
              {splitProof(request.proof).map((pro) => (
                <h4>
                  <Link
                    to={`/proofImg/${request.id}/${pro}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {" "}
                    {pro}{" "}
                  </Link>
                </h4>
              ))}
            </td>
            <td className="text-center">
              <CBadge color={getBadge(request.status)} size="lg">
                <h5>{getName(request.status)}</h5>
              </CBadge>
            </td>
            {haveAction ? (
              <td className="text-center">
                <CButton color="primary" variant="ghost">
                  Duyệt
                </CButton>
                <CButton color="danger" variant="ghost">
                  Hủy
                </CButton>
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Requests;
