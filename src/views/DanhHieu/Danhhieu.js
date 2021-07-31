import data from "./DanhHieuData";

import {
  CButton,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CFormText,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

const Danhhieu = ({ match }) => {
  const dh = data.find((dh) => dh.id.toString() === match.params.id);
  return (
    <>
      <CForm action="" method="post">
        <CFormGroup>
          <CLabel>Tên Danh Hiệu</CLabel>
          <CInput type="Text" id="inputName" placeholder={dh.name} />
          <CFormText className="help-block">Nhập tên danh hiệu</CFormText>
        </CFormGroup>
        <CFormGroup>
          <CLabel>Điều kiện xét</CLabel>
          <CInput type="Text" id="inputCon" placeholder={dh.conditions} />
          <CFormText className="help-block">Nhập điều kiện xét</CFormText>
        </CFormGroup>
      </CForm>
      <CButton type="submit" size="sm" color="primary">
        <CIcon name="cil-scrubber" /> Thay đổi
      </CButton>
    </>
  );
};

export default Danhhieu;
