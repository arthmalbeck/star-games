import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarApp from "../components/NavBar";
import { GAME_ROUTE, PLAY_ROUTE } from "../constants/routes";

import GameLibrary from "../pages/gameLibrary";
import GameProfile from "../pages/gameProfile";
import PlayGame from "../pages/playGame";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavBarApp/>
      <Fragment>
        <Routes>
          <Route exact path={`${PLAY_ROUTE}/:id`} element={<PlayGame />} />
          <Route exact path={`${GAME_ROUTE}/:id`} element={<GameProfile />} />
          <Route path="*" element={<GameLibrary />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;