import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> {/*루트 페이지, 3000/*/}
        <Route path="/dashboard" element={<Dashboard />} /> {/*Dashboard 페이지, 3000/Dashboard*/}
      </Routes>
    </Router>
  );
}

export default App;
