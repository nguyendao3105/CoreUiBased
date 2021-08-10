import { useState } from "react";

import AddForm from "./AddForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDh, RemoveDh } from "src/reducers/danhhieu";
import { Link } from "react-router-dom";

import { CButton } from "@coreui/react";

const Danhhieus = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDh);
  }, []);
  const danhHieus = useSelector((state) => state.danhhieu.list);
  const addBtnClick = () => {
    setShowAddForm(!showAddForm);
  };
  const RemoveDhCLick = (id) => {
    const confirmBox = window.confirm(
      "Bạn có chắc là mình muốn xóa danh hiệu này không?"
    );
    if (confirmBox) {
      dispatch(RemoveDh(id));
    }
  };
  return (
    <div>
      <table className="table table-hover table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th className="text-center">Tên</th>
            <th className="text-center">Điều kiện</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {danhHieus.map((dh) => (
            <tr key={dh.id}>
              <td>
                <h3>{dh.name}</h3>
              </td>
              <td>
                <h4>{dh.requirements}</h4>
              </td>
              <td>
                <Link to={`/danhhieus/${dh.id}`}>
                  <CButton color="primary" variant="ghost">
                    Sửa
                  </CButton>
                </Link>
                <CButton
                  color="primary"
                  variant="ghost"
                  onClick={() => {
                    RemoveDhCLick(dh.id);
                  }}
                >
                  Xóa
                </CButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CButton
        color="info"
        shape="rounded-pill"
        size="lg"
        onClick={addBtnClick}
      >
        Thêm
      </CButton>
      {showAddForm ? <AddForm /> : ""}
    </div>
  );
};

export default Danhhieus;
