import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { CButton } from "@coreui/react";

import data from "./UsersData";

export const Users = () => {
  const [users, setUsers] = useState(data);

  return (
    <div>
      <table className="table table-hover table-outline mb-0 d-none d-sm-table text-center">
        <thead className="thead-light">
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Vai trò</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <h3>{user.id}</h3>
              </td>
              <td>
                <h4>{user.name}</h4>
              </td>
              <td>
                <h4>{user.role}</h4>
              </td>
              <td>
                <Link to={`/users/${user.id}`}>
                  <CButton
                    color="primary"
                    variant="ghost"
                    disabled={user.role === "Admin"}
                  >
                    Chi tiết
                  </CButton>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
