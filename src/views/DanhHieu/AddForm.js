import {
  CButton,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CFormText,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
const AddForm = () => {
  return (
    <CCard>
      <CCardBody>
        <CForm action="" method="post">
          <CFormGroup>
            <CLabel>Tên Danh Hiệu</CLabel>
            <CInput
              type="Text"
              id="inputName"
              placeholder="Nhập tên danh hiệu"
            />
            <CFormText className="help-block">Nhập tên danh hiệu</CFormText>
          </CFormGroup>
          <CFormGroup>
            <CLabel>Điều kiện xét</CLabel>
            <CInput
              type="Text"
              id="inputCon"
              placeholder="Nhập điều kiện xét"
            />
            <CFormText className="help-block">Nhập điều kiện xét</CFormText>
          </CFormGroup>
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary">
          <CIcon name="cil-scrubber" /> Thêm{" "}
        </CButton>
      </CCardFooter>
    </CCard>
  );
};

export default AddForm;
