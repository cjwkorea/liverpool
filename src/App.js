import Member from "./pages/Member";
import Main from "./pages/Main";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/Member"} element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
