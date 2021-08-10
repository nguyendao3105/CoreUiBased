import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchUsers } from "src/reducers/users";

import { CButton } from "@coreui/react";

export const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
  }, []);

  const users = useSelector((state) => state.users.list);

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
