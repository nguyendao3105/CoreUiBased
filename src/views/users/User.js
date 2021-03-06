import { useSelector } from "react-redux";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardFooter,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import Requests from "../Request/Requests";

//match.params.id

const User = ({ match }) => {
  const users = useSelector((state) => state.users.list);

  const result = users.filter((user) => user.id.toString() === match.params.id);

  const user = result[0];
  const userDetails = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];
  const requests = useSelector((state) => state.requests.list);
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>User id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {userDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
          <CCardFooter>
            <CButton color="primary" variant="ghost">
              Lịch sử yêu cầu
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol>
        <CCard>
          <CCardHeader> Lịch sử yêu cầu </CCardHeader>
          <CCardBody>
            <Requests
              requests={requests.filter(
                (request) => request.studentId.toString() === match.params.id
              )}
              haveAction={false}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;
