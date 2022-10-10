import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarApp from "../components/NavBar";

import Dashboard from "../pages/public/dashboard";
import GameProfile from "../pages/public/gameProfile";
import PlayGame from "../pages/public/playGame";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavBarApp/>
      <Fragment>
        <Routes>
          <Route exact path="/play/:id" element={<PlayGame />} />
          <Route exact path="/game/:id" element={<GameProfile />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;