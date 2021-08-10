import React from "react";
import { CCard, CCardHeader, CCol, CRow } from "@coreui/react";

import DashBoardUsers from "../users/DashBoardUsers";
import DanhHieuDashBoard from "../DanhHieu/DanhHieuDashBoard";

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Thống kê Danh hiệu</CCardHeader>
            <DanhHieuDashBoard />
          </CCard>
          <CCard>
            <CCardHeader>Thống kê Người dùng</CCardHeader>
            <DashBoardUsers />
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
