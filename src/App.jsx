import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Painel from "./Pages/Painel";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="painel" element={<Painel />}>
          <Route path="errorPage" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;