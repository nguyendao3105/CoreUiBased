import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CProgress } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { fetchUsers } from "../../reducers/users";
import { fetchReqs } from "../../reducers/requests";

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
    dispatch(fetchReqs);
  }, []);

  const users = useSelector((state) => state.users.list);
  const requests = useSelector((state) => state.requests.list);
  const countReq = (userId) => {
    return requests.filter((req) => req.studentId === userId).length;
  };
  return (
    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
      <thead className="thead-light">
        <tr>
          <th className="text-center">
            <CIcon name="cil-people" />
          </th>
          <th>Sinh viên</th>
          <th className="text-center">Id</th>
          <th>Số lượng danh hiệu đăng kí</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td className="text-center">
                <div className="c-avatar">
                  <img
                    src="avatars/anonymous.png"
                    className="c-avatar-img"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="c-avatar-status bg-success"></span>
                </div>
              </td>
              <td>
                <div>{user.name}</div>
              </td>
              <td className="text-center">{user.id}</td>
              <td>
                <div className="clearfix">
                  <div className="float-left">
                    <strong>{`${
                      (countReq(user.id) / requests.length) * 100
                    }%`}</strong>
                  </div>
                  <div className="float-right">
                    <small className="text-muted">
                      {`${countReq(user.id)}/${requests.length}`}
                    </small>
                  </div>
                </div>
                <CProgress
                  className="progress-xs"
                  color="success"
                  value={`${(countReq(user.id) / requests.length) * 100}`}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default User;
