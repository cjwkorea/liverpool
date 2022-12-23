import Member from "./pages/Member";
import Main from "./pages/Main";
import History from "./pages/History";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Log/Login";
import Register from "./Log/Register";
import Write from "./pages/Write";
import { StoreProvider } from "./stores/RootStore";

const App = () => {
  return (
    <StoreProvider>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/Member"} element={<Member />} />
        <Route path={"/History"} element={<History />} />
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
        <Route path={"/Write"} element={<Write />} />
        

      </Routes>
    </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
