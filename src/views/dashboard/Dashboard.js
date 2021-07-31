import React, { lazy } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import Users from "../users/User";
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
