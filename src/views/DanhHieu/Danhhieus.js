import { useState } from "react";

import AddForm from "./AddForm";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { CButton } from "@coreui/react";

import data from "./DanhHieuData";

const Danhhieus = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [danhHieus, setDanhHieus] = useState(data);
  const addBtnClick = () => {
    setShowAddForm(!showAddForm);
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
                <h4>{dh.conditions}</h4>
              </td>
              <td>
                <Link to={`/danhhieus/${dh.id}`}>
                  <CButton color="primary" variant="ghost">
                    Sửa
                  </CButton>
                </Link>
                <Link to={`/danhhieus/${dh.id}`}>
                  <CButton color="primary" variant="ghost">
                    Xóa
                  </CButton>
                </Link>
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
