import {
  CButton,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CFormText,
  CCard,
  CCardBody,
  CCardFooter,
} from "@coreui/react";

import { AddDh } from "src/reducers/danhhieu";
import { useDispatch } from "react-redux";
import { useState } from "react";

import CIcon from "@coreui/icons-react";
const AddForm = () => {
  const [name, setName] = useState("");
  const [req, setReq] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !req) alert("Vui lòng nhập đầy đủ thông tin");
    else {
      const newDh = { name, req };
      dispatch(AddDh(newDh));
    }
    setName("");
    setReq("");
  };
  return (
    <CCard>
      <CCardBody>
        <CForm onSubmit={onSubmit} method="post">
          <CFormGroup>
            <CLabel>Tên Danh Hiệu</CLabel>
            <CInput
              type="Text"
              id="inputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CFormText className="help-block">Nhập tên danh hiệu</CFormText>
          </CFormGroup>
          <CFormGroup>
            <CLabel>Điều kiện xét</CLabel>
            <CInput
              type="Text"
              id="inputCon"
              value={req}
              onChange={(e) => setReq(e.target.value)}
            />
            <CFormText className="help-block">Nhập điều kiện xét</CFormText>
          </CFormGroup>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Thêm{" "}
          </CButton>
        </CForm>
      </CCardBody>
      <CCardFooter></CCardFooter>
    </CCard>
  );
};

export default AddForm;
