import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./Pages/Welcome/Welcome";
import GameManager from "./Pages/GameManager"

const PageSwitcher = () => {
  return (
    <Router>
      <section>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/game" element={<GameManager />} />
        </Routes>
      </section>
    </Router>
  );
};

export default PageSwitcher;
