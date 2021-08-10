import { useDispatch } from "react-redux";
import { useState } from "react";
import { UpdateDh } from "src/reducers/danhhieu";

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
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [req, setReq] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !req) alert("Vui lòng nhập đầy đủ thông tin");
    else {
      const newDh = { id: match.params.id, name: name, requirements: req };
      dispatch(UpdateDh(newDh));
      alert("Thông tin đã được lưu lại");
      setName("");
      setReq("");
    }
  };
  return (
    <>
      <CForm onSubmit={onSubmit} method="post">
        <CFormGroup>
          <CLabel>Tên Danh Hiệu Mới</CLabel>
          <CInput
            type="Text"
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CFormText className="help-block">Nhập tên danh hiệu mới</CFormText>
        </CFormGroup>
        <CFormGroup>
          <CLabel>Điều kiện xét Mới</CLabel>
          <CInput
            type="Text"
            id="inputCon"
            value={req}
            onChange={(e) => setReq(e.target.value)}
          />
          <CFormText className="help-block">Nhập điều kiện xét mới</CFormText>
        </CFormGroup>
        <CButton type="submit" size="sm" color="primary">
          <CIcon name="cil-scrubber" /> Thay đổi
        </CButton>
      </CForm>
    </>
  );
};

export default Danhhieu;
