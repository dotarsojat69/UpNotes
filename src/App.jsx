import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./route/PrivateRoute";

const routes = (
  <Router>
    <Routes>
      {/* Rute proteksi */}
      <Route path="/" element={<PrivateRoute element={<Home />} />} />

      {/* Rute tanpa proteksi */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;
