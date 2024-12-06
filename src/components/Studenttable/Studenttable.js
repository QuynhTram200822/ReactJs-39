import React, { useState, useEffect } from "react";
import "./Studenttable.css";

import { CFormSelect, CButton } from "@coreui/react";

function StudentTable() {
  const [selectStudent, setSelectStudent] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const HandleSelectChange = (e) => {
    setSelectStudent(e.target.value);
  };

  useEffect(() => {
    if (selectStudent === "" || selectStudent === "Vui lòng chọn 1 sinh viên") {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [selectStudent]);

  const HandleAddStudent = () => {
    let storedStudents = localStorage.getItem("students");
    let students = storedStudents ? JSON.parse(storedStudents) : [];

    students.push(selectStudent);
    localStorage.setItem("students", JSON.stringify(students));
  };
  return (
    <div className="App ">
      <div className="grid">
        <div className="col-6 col-offset-3  ">
          <div className=" flex justify-content-center mb-4  ">
            <h2>Student Form</h2>
          </div>

          <CFormSelect onChange={HandleSelectChange}>
            <option>Vui lòng chọn 1 sinh viên</option>
            <option value="Tram1">Tram1</option>
            <option value="Tram2">Tram2</option>
            <option value="Tram3">Tram3</option>
          </CFormSelect>
          <div className=" flex justify-content-center mt-4  ">
            <CButton
              disabled={isBtnDisabled}
              color="primary"
              onClick={HandleAddStudent}
            >
              Add
            </CButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
