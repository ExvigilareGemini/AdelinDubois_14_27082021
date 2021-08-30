import React from "react";
import Header from "../components/EmployeeCreator/Header";
import Main from "../components/EmployeeCreator/Main";
import { ModalProvider } from "styled-react-modal";

export default function EmployeeCreator() {
  return (
    <div className="EmployeeCreatorBody">
      <ModalProvider>
        <Header />
        <Main />
      </ModalProvider>
    </div>
  );
}
