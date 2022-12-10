import Member from "./pages/Member";
import Main from "./pages/Main";
import History from "./pages/History";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/Member"} element={<Member />} />
        <Route path={"/History"} element={<History />} />
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;
