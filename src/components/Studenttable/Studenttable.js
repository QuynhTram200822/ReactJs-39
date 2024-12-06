import React, { useState, useEffect } from "react";
import "./Studenttable.css";

import { CForm, CFormInput, CButton } from "@coreui/react";

import { useFormik } from "formik";
import * as Yup from "yup";

function StudentTable() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name không thể trống!")
        .min(5, "Tên không thể ngắn hơn 5")
        .matches(
          /^[a-zA-Z\s]+$/,
          "Tên không thể là số hoặc chứa ký tự đặc biệt"
        ),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  const HandleAddStudent = () => {
    let storedStudents = localStorage.getItem("students");
    let students = storedStudents ? JSON.parse(storedStudents) : [];

    students.push(formik.values.name);
    localStorage.setItem("students", JSON.stringify(students));
  };
  const isButtonDisabled =
  formik.errors.name || formik.values.name === "";

  return (
    <div className="App ">
      <div className="grid">
        <div className="col-6 col-offset-3  ">
          <div className=" flex justify-content-center mb-4  ">
            <h2>Student Form</h2>
          </div>

          <CForm onSubmit={formik.handleSubmit}>
            <CFormInput
              type="text"
              name="name"
              label="Name of Student"
              placeholder="Name of Student"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <p style={{ color: "red" }}> {formik.errors.name}</p>
            )}
          </CForm>
          <div className=" flex justify-content-center mt-4  ">
            <CButton   disabled={isButtonDisabled}  color="primary" onClick={HandleAddStudent}>
              Add
            </CButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
