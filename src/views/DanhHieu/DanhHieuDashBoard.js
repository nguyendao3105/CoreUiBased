import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDh } from "src/reducers/danhhieu";

import CIcon from "@coreui/icons-react";

const DanhHieuDashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDh);
  }, []);
  const danhHieus = useSelector((state) => state.danhhieu.list);
  const requests = useSelector((state) => state.requests.list);
  const countReq = (dhId) => {
    return requests.filter((req) => req.type === dhId).length;
  };
  const countPending = (dhId) => {
    return requests.filter((req) => req.type === dhId && req.status === 1)
      .length;
  };
  const countSuccess = (dhId) => {
    return requests.filter((req) => req.type === dhId && req.status === 0)
      .length;
  };
  const countFail = (dhId) => {
    return requests.filter((req) => req.type === dhId && req.status === 2)
      .length;
  };
  return (
    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
      <thead className="thead-light">
        <tr>
          <th className="text-center">
            <CIcon name="cil-people" />
          </th>
          <th>Tên danh hiệu</th>
          <th>Số lượng đăng kí</th>
          <th>Đang chờ</th>
          <th>Đã duyệt</th>
          <th>Bị hủy</th>
        </tr>
      </thead>
      <tbody>
        {danhHieus.map((dh) => {
          return (
            <tr key={dh.id}>
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
                <div>{dh.name}</div>
              </td>
              <td className="text-center">{countReq(dh.id)}</td>
              <td className="text-center">{countPending(dh.id)}</td>
              <td className="text-center">{countSuccess(dh.id)}</td>
              <td className="text-center">{countFail(dh.id)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DanhHieuDashBoard;
